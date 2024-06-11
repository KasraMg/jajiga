import { Button } from "@/src/components/shadcn/ui/button";
import { baseUrl, getFromLocalStorage } from "@/src/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import swal from "sweetalert";
const Otp = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const otpLoginPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
  const otpRegisterPhoneNumber = getFromLocalStorage("registerUserData");

  const phoneNumber = otpLoginPhoneNumber || otpRegisterPhoneNumber;
  const registerUserData = getFromLocalStorage("registerUserData");

  const [otpCode, setOtpCode] = useState("");

  const sendOtpAgain = () => {};

  const mutation = useMutation({
    mutationFn: async () => {
      return await fetch(`${baseUrl}/auth/confirmCode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerUserData),
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log("Success:", data);
      if (data.statusCode === 200) {
        swal({
          title: "با موفقیت ثبت نام شدید",
          icon: "success",
          buttons: [false, "حله"],
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
          localStorage.clear();
        });
      }
    },
  });

  const registerHandler = () => {
    registerUserData.Code = otpCode;

    mutation.mutate();
  };

  const inputChangeHandler = (value: string) => {
    if (/^\d*$/.test(value)) {
      setOtpCode(value);
    }
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
        <input
          type="text"
          maxLength={4}
          className="w-full rounded-md border border-solid border-gray-400 !py-1 px-6 text-center placeholder:text-center sm:!w-[150px]"
          placeholder="11111"
          value={otpCode}
          onChange={(event) => inputChangeHandler(event.target.value)}
        />
      </div>

      <Button
        onClick={sendOtpAgain}
        className="w-full justify-center !rounded-sm !px-4 text-sm"
        variant={"outlineMain"}
      >
        ارسال دوباره کد
      </Button>

      <Button
        disabled={otpCode.length !== 4 ? true : false}
        className="mt-5 w-full justify-center !rounded-full text-center"
        variant={"main"}
        onClick={registerHandler}
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
    </div>
  );
};

export default Otp;
