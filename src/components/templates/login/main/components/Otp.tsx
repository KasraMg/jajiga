"use client";
import { Button } from "@/src/components/shadcn/ui/button";
import { getFromLocalStorage } from "@/src/utils/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonLoader } from "@/src/components/modules/loader/Loader";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/components/shadcn/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Cookies from "js-cookie";
import usePostData from "@/src/hooks/usePostData";
import { toast } from "@/src/components/shadcn/ui/use-toast";

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

  const successFunc = (data: {
    statusCode: number;
    RefreshToken: string;
    accessToken: string;
  }) => {
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
      toast({
        variant: "success",
        title: otpLoginPhoneNumber
          ? "با موفقیت وارد شدید"
          : "با موفقیت ثبت نام شدید",
      });
      router.replace("/dashboard");
    } else if (data.statusCode === 400) {
      toast({
        variant: "danger",
        title: "کد اشتباه است",
      });
    } else if (data.statusCode === 405) {
      toast({
        variant: "danger",
        title: "این کد قبلا مورد استفاده قرار گرفته است",
      });
    } else if (data.statusCode === 422) {
      toast({
        variant: "danger",
        title: "کد وارد شده منسوخ شده است",
      });
    } else if (data.statusCode === 406) {
      toast({
        variant: "danger",
        title: "کاربر قبلا در سایت ثبت نام شده است",
      });
    } else {
      toast({
        variant: "danger",
        title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
      });
      location.reload();
      localStorage.clear();
    }
  };

  const { mutate: mutation, isPending } = usePostData<{ code: string }>(
    otpLoginPhoneNumber
      ? `/loginByCode/${otpLoginPhoneNumber}`
      : "/auth/confirmCode",
    null,
    false,
    successFunc,
  );

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

  const { mutate: resendCode } = usePostData<any>(
    `/resendCode/${phoneNumber}`,
    null,
    false,
  );

  const submitHandler = () => {
    if (otpLoginPhoneNumber) {
      const data = { code: otpCode };
      mutation(data);
    } else {
      registerUserData.code = otpCode;
      mutation(registerUserData);
    }
  };

  const resendCodeHandler = () => {
    setTimer(59);
    localStorage.setItem(
      "otpResendTimer",
      (Math.floor(Date.now() / 1000) + 59).toString(),
    );
    resendCode({});
  };

  return (
    <div className="w-full md:!w-[350px]">
      <div className="flex items-center justify-between">
        <p dir="ltr">+98{phoneNumber?.slice(1, 11)}</p>
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
        className="mt-5 h-[36px] w-full justify-center !rounded-full text-center"
        variant={"main"}
        onClick={submitHandler}
      >
        {isPending ? <ButtonLoader /> : "ورود"}  
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
 
    </div>
  );
};

export default Otp;
