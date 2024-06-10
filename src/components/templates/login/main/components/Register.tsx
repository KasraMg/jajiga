import { Button } from "@/src/components/shadcn/ui/button";
import {
  baseUrl,
  getFromLocalStorage,
  saveIntoLocalStorage,
} from "@/src/utils/utils";
import { registerSchema } from "@/src/validations/rules";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye } from "react-icons/lu";

interface formValues {
  firstName: string;
  lastName: string;
  Password: string;
  ConfirmPassword: string;
  Phone: string;
}
const Register = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
  const formHandler = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      Password: "",
      ConfirmPassword: "",
      Phone: phoneNumber,
    },
    onSubmit: (values: formValues, { setSubmitting, resetForm }) => {
      console.log(values);
      mutation.mutate(values);
    },
    validationSchema: registerSchema,
  });

  const mutation = useMutation({
    mutationFn: async (values: formValues) => {
      return await fetch(`${baseUrl}/auth/sendCode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    },
    onSuccess: (data) => {
      console.log("Success:", data);
      if (data.status === 200) {
        setStep("otp");
        saveIntoLocalStorage("registerUserData", formHandler.values);
        formHandler.resetForm();
      }
    },
  });

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    formHandler.handleSubmit();
  };
  return (
    <form className="w-full md:!w-[350px]">
      <div className="flex items-center justify-between">
        <p dir="ltr">+989046417084</p>
        <Button
          className="!rounded-sm !px-4"
          onClick={() => setStep("login")}
          variant={"outlineMain"}
        >
          ویرایش
        </Button>
      </div>
      <p className="mb-2 mt-2 text-2xl">ثبت‌نام</p>
      <p className="text-sm font-thin">لطفا مشخصات صحیح خود را وارد کنید</p>
      <input
        className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-6 pr-3 text-sm"
        type="text"
        name="firstName"
        placeholder="نام"
        value={formHandler.values.firstName}
        onChange={formHandler.handleChange}
      />
      {isSubmitted && formHandler.errors.firstName && (
        <span className="mt-2 block w-full text-center text-xs text-red-600">
          {formHandler.errors.firstName}
        </span>
      )}
      <input
        className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-6 pr-3 text-sm"
        type="text"
        name="lastName"
        placeholder="نام خانوادگی"
        value={formHandler.values.lastName}
        onChange={formHandler.handleChange}
      />
      {isSubmitted && formHandler.errors.lastName && (
        <span className="mt-2 block w-full text-center text-xs text-red-600">
          {formHandler.errors.lastName}
        </span>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          dir="ltr"
          value={formHandler.values.Password}
          onChange={formHandler.handleChange}
          className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-9 pr-3 text-sm placeholder:text-right"
          name="Password"
          placeholder="رمز عبور"
        />
        {isSubmitted && formHandler.errors.Password && (
          <span className="mt-2 block w-full text-center text-xs text-red-600">
            {formHandler.errors.Password}
          </span>
        )}
        <LuEye
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute left-3 top-[23px] cursor-pointer"
        />
      </div>
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          dir="ltr"
          value={formHandler.values.ConfirmPassword}
          onChange={formHandler.handleChange}
          className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-9 pr-3 text-sm placeholder:text-right"
          name="ConfirmPassword"
          placeholder="تکرار رمز عبور"
        />
        {isSubmitted && formHandler.errors.ConfirmPassword && (
          <span className="mt-2 block w-full text-center text-xs text-red-600">
            {formHandler.errors.ConfirmPassword}
          </span>
        )}
        <LuEye
          onClick={() => setShowConfirmPassword((prev) => !prev)}
          className="absolute left-3 top-[23px] cursor-pointer"
        />
      </div>
      <Button
        type="submit"
        onClick={(event) => submitHandler(event)}
        className="mx-auto mt-5 !block w-max !rounded-full !px-12 text-center"
        variant={"main"}
      >
        ثبت نام
      </Button>
    </form>
  );
};

export default Register;

 