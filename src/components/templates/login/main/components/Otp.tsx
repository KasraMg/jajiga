"use client";
import { Button } from "@/src/components/shadcn/ui/button";
import { baseUrl, getFromLocalStorage } from "@/src/utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import Loader from "@/src/components/modules/loader/Loader";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/src/components/shadcn/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import Cookies from "js-cookie";
const Otp = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const otpLoginPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
  const otpRegisterPhoneNumber = getFromLocalStorage("otpRegisterPhoneNumber");
  const router = useRouter();
  const [timer, setTimer] = useState<number>(0);
  const phoneNumber = otpLoginPhoneNumber || otpRegisterPhoneNumber;
  const registerUserData = getFromLocalStorage("registerUserData");
  const queryClient = useQueryClient();
  const [otpCode, setOtpCode] = useState("");

  useEffect(() => {
    const savedTimer = localStorage.getItem("otpResendTimer");
    if (savedTimer) {
      const remainingTime =
        parseInt(savedTimer, 10) - Math.floor(Date.now() / 1000);
      if (remainingTime > 0) {
        setTimer(remainingTime);
      }
    }
  }, []);

  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 1;
          localStorage.setItem(
            "otpResendTimer",
            (Math.floor(Date.now() / 1000) + newTimer).toString(),
          );
          return newTimer;
        });
      }, 1000);
    } else if (timer === 0 && interval) {
      clearInterval(interval);
      localStorage.removeItem("otpResendTimer");
    }
    return () => clearInterval(interval);
  }, [timer]);

  const registerMutation = useMutation({
    mutationFn: async (userData) => {
      return await fetch(`${baseUrl}/auth/confirmCode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      }).then((res) => res.json());
    },
    onSuccess: (data) => {

      if (data.statusCode === 200) {
        Cookies.set("RefreshToken", data.RefreshToken, {
          expires: 9999999,
          path: "",
        });
        Cookies.set("AccessToken", data.accessToken, {
          expires: 9999999,
          path: "",
        });
        queryClient.invalidateQueries({ queryKey: ["auth"] });
        swal({
          title: "با موفقیت ثبت نام شدید",
          icon: "success",
          buttons: [false, "حله"],
        }).then(() => {
 
          router.replace("/dashboard");
          localStorage.clear();
        });
      } else if (data.statusCode === 400) {
        swal({
          title: "کد وارد شده اشتباه است",
          icon: "error",
          buttons: [false, "حله"],
        });
      } else if (data.statusCode === 405) {
        swal({
          title: "این کد قبلا مورد استفاده قرار گرفته است",
          icon: "error",
          buttons: [false, "حله"],
        });
      } else if (data.statusCode === 422) {
        swal({
          title: "کد وارد شده منسوخ شده است",
          icon: "error",
          buttons: [false, "حله"],
        });
      } else if (data.statusCode === 406) {
        swal({
          title: "کاربر قبلا در سایت ثبت نام شده است",
          icon: "error",
          buttons: ["رفتن به لاگین", false],
        }).then((res) => {
          if (res) {
            localStorage.clear();
            setStep("login");
          }
        });
      } else {
        swal({
          title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
          icon: "error",
          buttons: [false, "حله"],
        }).then(() => {
          location.reload();
          localStorage.clear();
        });
      }
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (code: string) => {
      return await fetch(`${baseUrl}/loginByCode/${otpLoginPhoneNumber}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ code }),
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        Cookies.set("RefreshToken", data.RefreshToken, {
          expires: 9999999,
          path: "",
        });
        Cookies.set("AccessToken", data.accessToken, {
          expires: 9999999,
          path: "",
        });
        queryClient.invalidateQueries({ queryKey: ["auth"] });

        swal({
          title: "با موفقیت ثبت نام شدید",
          icon: "success",
          buttons: [false, "حله"],
        }).then(() => {
        router.replace("/dashboard");

          // localStorage.clear();
        });
      } else if (data.statusCode === 400) {
        swal({
          title: "کد وارد شده اشتباه است",
          icon: "error",
          buttons: [false, "حله"],
        });
      } else if (data.statusCode === 405) {
        swal({
          title: "این کد قبلا مورد استفاده قرار گرفته است",
          icon: "error",
          buttons: [false, "حله"],
        });
      } else if (data.statusCode === 422) {
        swal({
          title: "کد وارد شده منسوخ شده است",
          icon: "error",
          buttons: [false, "حله"],
        });
      } else {
        swal({
          title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
          icon: "error",
          buttons: [false, "حله"],
        }).then(() => {
          localStorage.clear();
          location.reload();
        });
      }
    },
  });

  const resendCodeMutation = useMutation({
    mutationFn: async () => {
      return await fetch(`${baseUrl}/resendCode/${phoneNumber}`, {
        method: "POST",
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log(phoneNumber);
      if (data.statusCode !== 200) {
        swal({
          title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
          icon: "error",
          buttons: [false, "حله"],
        }).then(() => {
          localStorage.clear();
          location.reload();
        });
      }
    },
  });

  const registerHandler = () => {
    registerUserData.code = otpCode;
    registerMutation.mutate(registerUserData);
    console.log(registerUserData);
  };

  const loginHandler = () => {
    loginMutation.mutate(otpCode);
  };

  const resendCodeHandler = () => {
    setTimer(59);
    localStorage.setItem(
      "otpResendTimer",
      (Math.floor(Date.now() / 1000) + 59).toString(),
    );
    resendCodeMutation.mutate();
  };

  return (
    <div className="w-full md:!w-[350px]">
      <div className="flex items-center justify-between">
        <p dir="ltr">+98{phoneNumber.slice(1, 11)}</p>
        <Button
          onClick={() => setStep("login")}
          className="!rounded-sm !px-4"
          variant={"outlineMain"}
        >
          ویرایش
        </Button>
      </div>
      <p className="mt-4 text-sm sm:!mt-2">
        کد فعالسازی 4 رقمی به شماره موبایل شما پیامک شد
      </p>
      <div className="relative my-6 flex flex-col items-start justify-between gap-2 sm:!flex-row sm:!items-center sm:!gap-0">
        <p className="text-sm">کد فعالسازی را وارد کنید</p>
        <InputOTP
          value={otpCode}
          type="text"
          inputMode="numeric"
          onChange={(value) => setOtpCode(value)}
          maxLength={4}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup dir="ltr">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {timer > 0 ? (
        <div className="w-full justify-center text-center text-sm">
          {`${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60} ثانیه تا ارسال مجدد کد  `}
        </div>
      ) : (
        <Button
          onClick={resendCodeHandler}
          className="w-full justify-center !rounded-sm !px-4 text-sm"
          variant={"outlineMain"}
        >
          ارسال دوباره کد
        </Button>
      )}

      <Button
        disabled={otpCode.length !== 4 ? true : false}
        className="mt-5 w-full justify-center !rounded-full text-center"
        variant={"main"}
        onClick={registerUserData ? registerHandler : loginHandler}
      >
        ورود
      </Button>
      {!otpRegisterPhoneNumber ? (
        <Button
          onClick={() => setStep("password")}
          className={`mx-auto mt-5 !block !rounded-full !px-4 font-thin`}
          variant={"outlineMain"}
        >
          ورود با رمز عبور
        </Button>
      ) : null}

      {loginMutation.isPending && <Loader enableOverlay={true} />}
      {registerMutation.isPending && <Loader enableOverlay={true} />}
    </div>
  );
};

export default Otp;
