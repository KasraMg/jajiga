import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import { toast } from "@/src/components/shadcn/ui/use-toast";
import { getFromLocalStorage } from "@/src/utils/utils";
import {
  useLoginOtpMutation,
  useRegisterOtpMutation,
} from "@/src/api/auth/otp";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
};

type OtpResponse = {
  statusCode: number;
  RefreshToken: string;
  accessToken: string;
};

export const useOtp = ({ setStep }: Props) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const otpLoginPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
  const otpRegisterPhoneNumber = getFromLocalStorage("otpRegisterPhoneNumber");

  const registerUserData = getFromLocalStorage("registerUserData");

  const phoneNumber = otpLoginPhoneNumber || otpRegisterPhoneNumber;

  const [otpCode, setOtpCode] = useState("");

  const loginMutation = useLoginOtpMutation();
  const registerMutation = useRegisterOtpMutation();

  const handleSuccess = async (data: OtpResponse) => {
    if (data.statusCode === 200) {
      Cookies.set("RefreshToken", data.RefreshToken, {
        expires: 9999999,
      });

      Cookies.set("AccessToken", data.accessToken, {
        expires: 9999999,
      });

      await queryClient.refetchQueries({
        queryKey: ["auth"],
      });

      toast({
        variant: "success",
        title: otpLoginPhoneNumber
          ? "با موفقیت وارد شدید"
          : "با موفقیت ثبت نام شدید",
      });

      router.replace("/dashboard");

      return;
    }

    switch (data.statusCode) {
      case 400:
        toast({
          variant: "danger",
          title: "کد اشتباه است",
        });
        break;

      case 405:
        toast({
          variant: "danger",
          title: "این کد قبلا مورد استفاده قرار گرفته است",
        });
        break;

      case 406:
        toast({
          variant: "danger",
          title: "کاربر قبلا در سایت ثبت نام شده است",
        });
        break;

      case 422:
        toast({
          variant: "danger",
          title: "کد وارد شده منسوخ شده است",
        });
        break;

      default:
        toast({
          variant: "danger",
          title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
        });

        localStorage.clear();
    }
  };

  const submitHandler = () => {
    if (otpLoginPhoneNumber) {
      loginMutation.mutate(
        {
          phone: otpLoginPhoneNumber,
          code: otpCode,
        },
        {
          onSuccess: handleSuccess,
        },
      );

      return;
    }

    registerMutation.mutate(
      {
        ...registerUserData,
        code: otpCode,
      },
      {
        onSuccess: handleSuccess,
      },
    );
  };

  return {
    otpCode,
    setOtpCode,
    phoneNumber,
    otpRegisterPhoneNumber,
    submitHandler,
    isPending: loginMutation.isPending || registerMutation.isPending,
    setStep,
  };
};
