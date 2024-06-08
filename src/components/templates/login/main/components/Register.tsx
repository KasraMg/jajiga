import { Button } from "@/src/components/shadcn/ui/button";
import { registerSchema } from "@/src/validations/rules";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye } from "react-icons/lu";

const Register = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formHandler = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(values);
    },
    validationSchema: registerSchema,
  });

  return (
    <form onClick={formHandler.handleSubmit} className="w-full md:!w-[350px]">
      <div className="flex items-center justify-between">
        <p dir="ltr">+989046417084</p>
        <Button className="!rounded-sm !px-4" variant={"outlineMain"}>
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
       
            onBlur={formHandler.handleBlur}
        onChange={formHandler.handleChange}
      />
       {formHandler.errors.firstName && formHandler.errors.firstName}
      <input
        className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-6 pr-3 text-sm"
        type="text"
        name="lastName"
        placeholder="نام خانوادگی"
        value={formHandler.values.lastName}
       
            onBlur={formHandler.handleBlur}
        onChange={formHandler.handleChange}
      />
       {formHandler.errors.lastName && formHandler.errors.lastName}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          dir="ltr"
          value={formHandler.values.password}
         
            onBlur={formHandler.handleBlur}
          onChange={formHandler.handleChange}
          className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-9 pr-3 text-sm placeholder:text-right"
          name="password"
          placeholder="رمز عبور"
        />
         {formHandler.errors.password && formHandler.errors.password}
        <LuEye
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute left-3 top-[23px] cursor-pointer"
        />
      </div>
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          dir="ltr"
          value={formHandler.values.confirmPassword}
         
            onBlur={formHandler.handleBlur}
          onChange={formHandler.handleChange}
          className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-9 pr-3 text-sm placeholder:text-right"
          name="confirmPassword"
          placeholder="تکرار رمز عبور"
        />
         {formHandler.errors.confirmPassword && formHandler.errors.confirmPassword}
        <LuEye
          onClick={() => setShowConfirmPassword((prev) => !prev)}
          className="absolute left-3 top-[23px] cursor-pointer"
        />
      </div>
      <Button
        type="submit"
        className="mx-auto mt-5 !block w-max !rounded-full !px-12 text-center"
        variant={"main"}
      >
        ثبت نام
      </Button>
    </form>
  );
};

export default Register;
