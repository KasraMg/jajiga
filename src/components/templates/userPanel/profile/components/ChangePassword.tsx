"use client";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent, 
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import usePostData from "@/src/hooks/usePostData";
import { changePasswordSchema } from "@/src/validations/rules";
import {  useFormik } from "formik";
import { useState, useEffect } from "react";
import { LuEye } from "react-icons/lu";

interface newPasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}
const ChangePassword = () => {
  const {
    mutate: mutation,
    isPending,
    isError,
    isSuccess,
  } = usePostData<newPasswordData>(
    "/user/changePassword",
    "رمز عبور با موفقیت بروزرسانی شد",
    true,
  );
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
 
  useEffect(() => {
    console.log(isError);
    console.log(isSuccess);
  }, [isSuccess, isError]);

  const formHandler = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: (values: newPasswordData) => {
      mutation({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
    },
    validationSchema: changePasswordSchema,
  });
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    formHandler.handleSubmit();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} className="my-5 block bg-gray-100 text-black">
          ﺗﻐﯿﯿﺮ رمزعبور
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div>
          <p>رمز عبور فعلی</p>
          <input
            className="w-full border-b border-solid py-2"
            type="text"
            name="currentPassword"
            value={formHandler.values.currentPassword}
            onChange={formHandler.handleChange}
            onBlur={formHandler.handleBlur}
          />
          {formHandler.touched.currentPassword &&
            formHandler.errors.currentPassword && (
              <span className="mt-2 block w-full text-center text-xs text-red-600">
                {formHandler.errors.currentPassword as any}
              </span>
            )}
        </div>
        <div>
          <p>رمز عبور جدید</p>
          <div className="relative">
            <input
              className="w-full border-b border-solid py-2"
              type={showNewPass ? "text" : "password"}
              name="newPassword"
              value={formHandler.values.newPassword}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
            />
            <LuEye
              onClick={() => setShowNewPass((prev) => !prev)}
              className="absolute left-3 top-[15px] cursor-pointer"
            />
          </div>
          {formHandler.touched.newPassword &&
            formHandler.errors.newPassword && (
              <span className="mt-2 block w-full text-center text-xs text-red-600">
                {formHandler.errors.newPassword as any}
              </span>
            )}
        </div>

        <div>
          <p>تکرار رمز عبور جدید</p>
          <div className="relative">
            <input
              className="w-full border-b border-solid py-2"
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              value={formHandler.values.confirmPassword}
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
            />
            <LuEye
              onClick={() => setShowConfirmPass((prev) => !prev)}
              className="absolute left-3 top-[15px] cursor-pointer"
            />
          </div>
          {formHandler.touched.confirmPassword &&
            formHandler.errors.confirmPassword && (
              <span className="mt-2 block w-full text-center text-xs text-red-600">
                {formHandler.errors.confirmPassword as any}
              </span>
            )}
        </div>

        <Button
          onClick={(event) => submitHandler(event)}
          variant={"main"}
          className="mx-auto my-3 block"
        >
          ﺗﻐﯿﯿﺮ رمزعبور
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassword;
