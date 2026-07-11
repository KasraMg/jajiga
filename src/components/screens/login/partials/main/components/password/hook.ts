import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { toast } from "@/src/components/shadcn/ui/use-toast";
import { getFromLocalStorage } from "@/src/utils/utils";
import {
  useLoginByPasswordMutation,
  useResendCodeMutation,
} from "@/src/api/auth/password";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
};

type LoginResponse = {
  statusCode: number;
  RefreshToken: string;
  accessToken: string;
};

export const usePassword = ({ setStep }: Props) => {
  const router = useRouter();

  const phoneNumber = getFromLocalStorage("otpLoginPhoneNumber");

  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useLoginByPasswordMutation();
  const resendMutation = useResendCodeMutation();

  const inputChangeHandler = (value: string) => {
    setPassword(value);

    setError(
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9.@$-_#]{8,}$/.test(value),
    );
  };

  const handleSuccess = (data: LoginResponse) => {
    switch (data.statusCode) {
      case 200:
        Cookies.set("RefreshToken", data.RefreshToken, {
          expires: 9999999,
        });

        Cookies.set("AccessToken", data.accessToken, {
          expires: 9999999,
        });

        toast({
          variant: "success",
          title: "با موفقیت وارد شدید",
        });

        router.replace("/dashboard");
        return;

      case 401:
        toast({
          variant: "danger",
          title: "پسورد وارد شده اشتباه است",
        });
        return;

      case 409:
        toast({
          variant: "danger",
          title: "این شماره قادر به ورود به سایت نیست",
        });
        return;

      default:
        toast({
          variant: "danger",
          title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
        });

        localStorage.clear();
    }
  };

  const submitHandler = () => {
    loginMutation.mutate(
      {
        phone: phoneNumber,
        password,
      },
      {
        onSuccess: handleSuccess,
      },
    );
  };

  const resendCodeHandler = () => {
    resendMutation.mutate(phoneNumber);
    setStep("otp");
  };

  return {
    phoneNumber,
    password,
    showPassword,
    error,
    isPending: loginMutation.isPending,
    setShowPassword,
    inputChangeHandler,
    submitHandler,
    resendCodeHandler,
    setStep,
  };
};
