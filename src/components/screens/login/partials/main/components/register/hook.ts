import { useState } from "react";
import { useFormik } from "formik";

import { toast } from "@/src/components/shadcn/ui/use-toast";
import { getFromLocalStorage, saveIntoLocalStorage } from "@/src/utils/utils";

import { registerSchema } from "@/src/validations/rules";
import { RegisterRequest, useRegisterMutation } from "@/src/api/auth/register";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
};

type RegisterResponse = {
  statusCode: number;
};

export const useRegister = ({ setStep }: Props) => {
  const phoneNumber = getFromLocalStorage("otpRegisterPhoneNumber");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const registerMutation = useRegisterMutation();

  const formHandler = useFormik<RegisterRequest>({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      phone: phoneNumber,
    },

    validationSchema: registerSchema,

    onSubmit: (values) => {
      registerMutation.mutate(values, {
        onSuccess: (data: RegisterResponse) => {
          if (data.statusCode === 200) {
            toast({
              variant: "success",
              title: "اطلاعات با موفقیت ثبت شد",
            });

            saveIntoLocalStorage("registerUserData", values);

            formHandler.resetForm();

            setStep("otp");

            return;
          }

          toast({
            variant: "danger",
            title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
          });

          localStorage.clear();
        },
      });
    },
  });

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    formHandler.handleSubmit();
  };

  return {
    phoneNumber,

    formHandler,

    showPassword,
    setShowPassword,

    showConfirmPassword,
    setShowConfirmPassword,

    submitHandler,

    isPending: registerMutation.isPending,

    setStep,
  };
};
