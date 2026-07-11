import { useEffect, useState } from "react";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { getFromLocalStorage, saveIntoLocalStorage } from "@/src/utils/utils";
import { useLoginMutation } from "@/src/api/auth/login";

type UseLoginProp = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
};

export const useLogin = ({ setStep }: UseLoginProp) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [regexError, setRegexError] = useState(false);

  const { mutate, isPending } = useLoginMutation();

  const submitHandler = () => {
    const phoneRegex = /^(09)[0-9]{9}$/;

    if (!phoneRegex.test(phoneNumber)) {
      setRegexError(true);
      return;
    }

    setRegexError(false);

    mutate(
      { phone: phoneNumber },
      {
        onSuccess: (data: { statusCode: number }) => {
          switch (data.statusCode) {
            case 200:
              saveIntoLocalStorage("otpRegisterPhoneNumber", phoneNumber);
              localStorage.removeItem("otpLoginPhoneNumber");
              setStep("register");
              break;

            case 411:
              saveIntoLocalStorage("otpLoginPhoneNumber", phoneNumber);
              localStorage.removeItem("otpRegisterPhoneNumber");
              setStep("otp");
              break;

            case 409:
              toast({
                variant: "danger",
                title: "این شماره قادر به ورود به سایت نیست",
              });
              break;
          }
        },
        onError: () => {
          toast({
            variant: "danger",
            title: "خطایی غیرمنتظره رخ داد",
          });
        },
      },
    );
  };

  useEffect(() => {
    const otpLoginPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");

    const otpRegisterPhoneNumber = getFromLocalStorage(
      "otpRegisterPhoneNumber",
    );

    const prevPhoneNumber = otpLoginPhoneNumber || otpRegisterPhoneNumber;

    if (prevPhoneNumber) {
      setPhoneNumber(prevPhoneNumber);
    }
  }, []);

  return {
    phoneNumber,
    setPhoneNumber,
    regexError,
    submitHandler,
    isPending,
  };
};
