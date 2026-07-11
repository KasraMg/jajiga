import { useEffect, useState } from "react";
import { useResendCodeMutation } from "@/src/api/auth/password";

type Props = {
  phoneNumber: string;
};

export const useTimer = ({ phoneNumber }: Props) => {
  const [timer, setTimer] = useState(0);

  const resendMutation = useResendCodeMutation();

  useEffect(() => {
    const savedTimer = localStorage.getItem("otpResendTimer");

    if (!savedTimer) return;

    const remain = Number(savedTimer) - Math.floor(Date.now() / 1000);

    if (remain > 0) {
      setTimer(remain);
    }
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      localStorage.removeItem("otpResendTimer");
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => {
        const next = prev - 1;

        localStorage.setItem(
          "otpResendTimer",
          (Math.floor(Date.now() / 1000) + next).toString(),
        );

        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const resendCodeHandler = () => {
    resendMutation.mutate(phoneNumber);

    setTimer(59);

    localStorage.setItem(
      "otpResendTimer",
      (Math.floor(Date.now() / 1000) + 59).toString(),
    );
  };

  return {
    timer,
    resendCodeHandler,
  };
};
