"use client";
import Loader from "@/src/components/modules/loader/Loader";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import usePostData from "@/src/hooks/usePostData";
import { changePasswordSchema } from "@/src/validations/rules";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { LuEye } from "react-icons/lu";

interface newPasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}
const ChangePassword = () => {
  const successFunc = (data: { statusCode: number }) => {
    if (data.statusCode === 200) {
      formHandler.resetForm()
      toast({
        variant: "success",
        title: "رمز عبور با موفقیت بروزرسانی شد",
      });
    } else if (data.statusCode === 401) {
      toast({
        variant: "danger",
        title: "رمز عبور فعلی شما اشتباه است",
      });
    }else if (data.statusCode === 402) {
      toast({
        variant: "danger",
        title: "این رمز قبلا ست شده و نیازه یک رمز جدید وارد کنید",
      });
    }
  };

  const {
    mutate: mutation,
    isPending,
    isError,
    isSuccess,
  } = usePostData<newPasswordData>(
    "/user/changePassword",
    null,
    true,
    successFunc,
  );
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  
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
          className="mx-auto my-3 block h-[36px] w-[90px]"
        >
          {isPending ? (
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
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
          ) : (
            "ﺗﻐﯿﯿﺮ رمزعبور"
          )}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassword;
