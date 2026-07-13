"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { useTwoStepMutation } from "@/src/api/user";

interface UseTwoStepBoxProps {
  type: string;
  regex: RegExp;
  requestBody: string;
  value?: string;
  setValue?: (value: any) => void;
  resetForm?: () => void;
  setOpen: (value: boolean) => void;
}

const useTwoStepBox = ({
  type,
  regex,
  requestBody,
  value,
  setValue,
  setOpen,
}: UseTwoStepBoxProps) => {
  const queryClient = useQueryClient();

  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [otpCode, setOtpCode] = useState("");
  const [timer, setTimer] = useState(0);
  const [step, setStep] = useState(1);
  const [prevValue, setPrevValue] = useState<string>();
  const [data, setData] = useState<any>(value);

  useEffect(() => {
    if (!prevValue && value) {
      setPrevValue(value);
      setData(value);
    }
  }, [value]);

  const successHandler = (res: any) => {
    if (step === 1) {
      if (res.statusCode === 200) {
        toast({
          variant: "success",
          title:
            type === "email"
              ? "کد ارسال شده به ایمیلتون رو وارد کنید"
              : "کد ارسال شده به موبایلتون رو وارد کنید",
        });

        setStep(2);
        return;
      }

      toast({
        variant: "danger",
        title: "لطفا مجدد امتحان کنید",
      });

      return;
    }

    if (res.statusCode === 200) {
      if (type !== "email") {
        Cookies.set("RefreshToken", res.RefreshToken, {
          expires: 9999999,
        });

        Cookies.set("AccessToken", res.accessToken, {
          expires: 9999999,
        });
      }

      toast({
        variant: "success",
        title:
          type === "email"
            ? "ایمیل با موفقیت ثبت شد"
            : "شماره موبایل با موفقیت تغییر یافت",
      });

      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });

      setStep(1);
      setOpen(false);
      return;
    }

    const messages: Record<number, string> = {
      400: "کد اشتباه است",
      405: "این کد قبلا مورد استفاده قرار گرفته است",
      422: "کد وارد شده منسوخ شده است",
    };

    toast({
      variant: "danger",
      title: messages[res.statusCode] ?? "خطایی رخ داد",
    });
  };

  const { mutate, isPending } = useTwoStepMutation({
    onSuccess: successHandler,
  });

  const { mutate: resendCode } = useTwoStepMutation();

  const inputChangeHandler = (value: string) => {
    setDisabled(false);

    setError(!regex.test(value));

    setData(value);

    setValue?.(value);
  };

  const submitHandler = () => {
    if (step === 1) {
      mutate({
        url: type === "email" ? "/user/addEmail" : "/user/changeNumber",
        method: "POST",
        body: {
          [requestBody]: data,
        },
      });

      return;
    }

    const body: any = {
      [type === "email" ? "email" : "phone"]: data,
      code: otpCode,
    };

    if (type === "email") {
      body.newsletter = false;
    }

    mutate({
      url: type === "email" ? "/user/authEmail" : "/user/authNumber",
      method: "PUT",
      body,
    });
  };

  const resendCodeHandler = () => {
    setTimer(59);

    localStorage.setItem(
      `${type}otpResendTimer`,
      (Math.floor(Date.now() / 1000) + 59).toString(),
    );

    resendCode({
      url: type === "email" ? "/user/addEmail" : "/user/changeNumber",
      method: "POST",
      body: {
        [requestBody]: data,
      },
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem(`${type}otpResendTimer`);

    if (!saved) return;

    const remain = Number(saved) - Math.floor(Date.now() / 1000);

    if (remain > 0) {
      setTimer(remain);
    }
  }, []);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        const next = prev - 1;

        localStorage.setItem(
          `${type}otpResendTimer`,
          (Math.floor(Date.now() / 1000) + next).toString(),
        );

        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return {
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
  };
};

export default useTwoStepBox;
