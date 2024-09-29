"use client";
import React, { FC, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { MdOutlineEdit } from "react-icons/md";
import { Button } from "@/src/components/shadcn/ui/button";
import usePostData from "@/src/hooks/usePostData";
import { userInfoObj } from "@/src/types/Auth.types";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/components/shadcn/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { FaAngleRight } from "react-icons/fa6";
import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";

interface BoxProps {
  type: string;
  title: string;
  regex?: any;
  value?: string;
  setValue?: (data: any) => void;
  errorText?: string;
  multiple?: string[];
  requestBody?: any;
  options?: string[];
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
  const [error, setError] = useState(false);
  const [disabled, setdisabled] = useState(true);
  const [otpCode, setOtpCode] = useState("");
  const [timer, setTimer] = useState<number>(0);
  const [step, setStep] = useState(1);
  const [prevValue, setPrevValue] = useState<string | undefined>(undefined);
  const queryClient = useQueryClient();
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (type === "email" && !prevValue && value?.includes("@")) {
      setPrevValue(value);
    } else {
      if (!isNaN(value as any) && !prevValue) {
        setPrevValue(value);
      }
    }
    if (value) {
      setData(value);
    }
  }, [prevValue, value]);

  const inputChangeHandler = (value: string) => {
    setdisabled(false);

    if (!regex.test(value)) {
      setError(true);
    } else {
      setError(false);
    }
    setValue && setData(value);
  };

  const successFunc = (data: {
    statusCode: number;
    RefreshToken: string;
    accessToken: string;
  }) => {
    if (type === "email") {
      if (step === 1) {
        if (data.statusCode === 200) {
          toast({
            variant: "success",
            title: "کد ارسال شده به ایمیلتون رو وارد کنید",
          });
          setStep(2);
        } else if (data.statusCode === 400) {
          toast({
            variant: "danger",
            title: "لطفا مجدد امتحان کنید",
          });
        } else {
          toast({
            variant: "danger",
            title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
          });
        }
      } else {
        if (data.statusCode === 200) {
          toast({
            variant: "success",
            title: "ایمیل با موفقیت ثبت شد",
          });
          queryClient.invalidateQueries({ queryKey: ["auth"] });
          setStep(1);
          setOpen(false);
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
        } else {
          toast({
            variant: "danger",
            title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
          });
        }
      }
    } else {
      if (step === 1) {
        if (data.statusCode === 200) {
          toast({
            variant: "success",
            title: "کد ارسال شده به موبایلتون رو وارد کنید",
          });
          setStep(2);
        } else {
          toast({
            variant: "danger",
            title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
          });
        }
      } else {
        if (data.statusCode === 200) {
          Cookies.set("RefreshToken", data.RefreshToken, {
            expires: 9999999,
            path: "",
          });
          Cookies.set("AccessToken", data.accessToken, {
            expires: 9999999,
            path: "",
          });
          toast({
            variant: "success",
            title: "شماره موبایل با موفقیت تغییر یافت",
          });
          queryClient.invalidateQueries({ queryKey: ["auth"] });
          setStep(1);
          setOpen(false);
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
        } else {
          toast({
            variant: "danger",
            title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
          });
        }
      }
    }
  };

  const { mutate: mutation, isPending } = usePostData<userInfoObj>(
    type == "email"
      ? step === 1
        ? "/user/addEmail"
        : "/user/authEmail"
      : step === 1
        ? "/user/changeNumber"
        : "/user/authNumber",
    null,
    step === 1 ? false : true,
    successFunc,
  );

  const { mutate: resendCode } = usePostData<userInfoObj>(
    type == "email" ? "/user/addEmail" : "/user/changeNumber",
    null,
    false,
  );

  const submitHandler = () => {
    if (step === 1) {
      const newData = {
        [requestBody]: data,
      };
      mutation(newData as any);
    } else {
      const newData = {
        [type === "email" ? "email" : "phone"]: data,
        code: otpCode,
      };
      if (type === "email") {
        newData.newsletter = false as any;
      }
      mutation(newData as any);
    }
  };

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
            `${type === "email" ? "email" : "phone"}otpResendTimer`,
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

  const resendCodeHandler = () => {
    setTimer(59);
    localStorage.setItem(
      `${type === "email" ? "email" : "phone"}otpResendTimer`,
      (Math.floor(Date.now() / 1000) + 59).toString(),
    );
    const newData = {
      [requestBody]: data,
    };
    resendCode(newData as any);
  };

  const [open, setOpen] = useState(false);
  return (
    <>
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
                    ` ویرایش ${title}`
                  ) : (
                    <div className="flex justify-between text-sm font-thin">
                      <p
                        className="flex cursor-pointer flex-row-reverse items-center gap-1"
                        onClick={() => setStep(1)}
                      >
                        برگشت <FaAngleRight />
                      </p>

                      {timer > 0 ? (
                        <div className="w-max justify-center text-center text-sm">
                          {`${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60} ثانیه تا ارسال مجدد کد  `}
                        </div>
                      ) : (
                        <p
                          className="cursor-pointer"
                          onClick={resendCodeHandler}
                        >
                          ارسال دوباره کد
                        </p>
                      )}
                    </div>
                  )}
                </DialogTitle>
              </DialogHeader>

              <div className="flex flex-col items-center justify-between gap-3">
                {step === 1 ? (
                  <div className="flex w-full items-center justify-between gap-8">
                    <p className="whitespace-nowrap">{title}</p>
                    <input
                      onChange={(event) =>
                        inputChangeHandler(event.target.value)
                      }
                      className="w-full rounded-md border border-gray-300 p-2 text-sm font-thin"
                      type={type}
                      value={data}
                    />
                  </div>
                ) : (
                  <InputOTP
                    value={otpCode}
                    type="text"
                    inputMode="numeric"
                    onChange={(value) => {
                      setOtpCode(value);
                    }}
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
                )}
              </div>

              {error && (
                <span className="mt-2 text-center text-xs text-red-600">
                  {errorText}
                </span>
              )}

              <Button
                disabled={
                  prevValue === data
                    ? true
                    : false ||
                        error ||
                        disabled ||
                        (step === 2 && otpCode.length !== 4)
                      ? true
                      : false
                }
                className="mt-4 h-[36px] w-full justify-center"
                variant="main"
                onClick={submitHandler}
              >
                {isPending ? (
                  <svg
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                  >
                    <circle
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      r="15"
                      cx="40"
                      cy="100"
                    >
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="-.4"
                      ></animate>
                    </circle>
                    <circle
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      r="15"
                      cx="100"
                      cy="100"
                    >
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="-.2"
                      ></animate>
                    </circle>
                    <circle
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      r="15"
                      cx="160"
                      cy="100"
                    >
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="0"
                      ></animate>
                    </circle>
                  </svg>
                ) : step === 1 ? (
                  "ذخیره"
                ) : (
                  "ارسال"
                )}
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        <p className="mt-4 text-sm text-gray-500">{value}</p>
      </section>
    </>
  );
};

export default TwoStepBox;
