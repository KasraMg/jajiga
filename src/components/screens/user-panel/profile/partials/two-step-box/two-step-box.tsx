"use client";

import React, { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/components/shadcn/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { MdOutlineEdit } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import useTwoStepBox from "./hook";
import { ButtonLoader } from "@/src/components/modules/loader/loader";

interface BoxProps {
  type: string;
  title: string;
  regex: RegExp;
  value?: string;
  setValue?: (data: any) => void;
  errorText?: string;
  requestBody: string;
}

const TwoStepBox: FC<BoxProps> = ({
  type,
  title,
  regex,
  value,
  setValue,
  errorText,
  requestBody,
}) => {
  const [open, setOpen] = useState(false);

  const {
    error,
    disabled,
    otpCode,
    timer,
    step,
    prevValue,
    data,
    isPending,
    setStep,
    setOtpCode,
    inputChangeHandler,
    submitHandler,
    resendCodeHandler,
  } = useTwoStepBox({
    type,
    regex,
    value,
    setValue,
    requestBody,
    setOpen,
  });

  return (
    <section>
      <div className="mt-4 flex items-center justify-between">
        <p>{title}</p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <MdOutlineEdit className="cursor-pointer" />
          </DialogTrigger>

          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="py-3 text-center">
                {step === 1 ? (
                  `ویرایش ${title}`
                ) : (
                  <div className="flex justify-between text-sm font-thin">
                    <p
                      onClick={() => setStep(1)}
                      className="flex cursor-pointer flex-row-reverse items-center gap-1"
                    >
                      برگشت <FaAngleRight />
                    </p>

                    {timer > 0 ? (
                      <div className="text-sm">
                        {`${Math.floor(timer / 60)}:${
                          timer % 60 < 10 ? `0${timer % 60}` : timer % 60
                        } ثانیه تا ارسال مجدد کد`}
                      </div>
                    ) : (
                      <p className="cursor-pointer" onClick={resendCodeHandler}>
                        ارسال دوباره کد
                      </p>
                    )}
                  </div>
                )}
              </DialogTitle>
            </DialogHeader>

            {step === 1 ? (
              <div className="flex items-center gap-8">
                <p className="whitespace-nowrap">{title}</p>

                <input
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  type={type}
                  value={data}
                  onChange={(e) => inputChangeHandler(e.target.value)}
                />
              </div>
            ) : (
              <InputOTP
                value={otpCode}
                onChange={setOtpCode}
                maxLength={4}
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
            )}

            {error && (
              <span className="mt-2 text-center text-xs text-red-600">
                {errorText}
              </span>
            )}

            <Button
              variant="main"
              className="mt-4 w-full"
              onClick={submitHandler}
              disabled={
                prevValue === data ||
                error ||
                disabled ||
                (step === 2 && otpCode.length !== 4)
              }
            >
              {isPending ? <ButtonLoader /> : step === 1 ? "ذخیره" : "ارسال"}
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <p className="mt-4 text-sm text-gray-500">{value}</p>
    </section>
  );
};

export default TwoStepBox;
