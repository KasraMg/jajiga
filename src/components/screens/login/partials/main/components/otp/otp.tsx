"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { ButtonLoader } from "@/src/components/modules/loader/loader";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/components/shadcn/ui/input-otp";

import Timer from "../timer/timer";
import { useOtp } from "./hook";

const Otp = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    otpCode,
    setOtpCode,
    submitHandler,
    isPending,
    phoneNumber,
    otpRegisterPhoneNumber,
  } = useOtp({ setStep });

  return (
    <div className="w-full md:!w-[350px]">
      <div className="flex items-center justify-between">
        <p dir="ltr">+98{phoneNumber?.slice(1, 11)}</p>

        <Button
          onClick={() => setStep("login")}
          className="!rounded-sm !px-4"
          variant="outlineMain"
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
          onChange={setOtpCode}
          maxLength={4}
          type="text"
          inputMode="numeric"
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

      <span className="mb-3 block text-center text-xs text-red-600">
        در صورت عدم دریافت کد فعالسازی، لطفاً بخش spam دستگاه خود را بررسی کنید
      </span>

      <Timer phoneNumber={phoneNumber} />

      <Button
        disabled={otpCode.length !== 4}
        className="mt-5 h-[36px] w-full justify-center !rounded-full text-center"
        variant="main"
        onClick={submitHandler}
      >
        {isPending ? <ButtonLoader /> : "ورود"}
      </Button>

      {!otpRegisterPhoneNumber && (
        <Button
          onClick={() => setStep("password")}
          className="mx-auto mt-5 !block !rounded-full !px-4 font-thin"
          variant="outlineMain"
        >
          ورود با رمز عبور
        </Button>
      )}
    </div>
  );
};

export default Otp;
