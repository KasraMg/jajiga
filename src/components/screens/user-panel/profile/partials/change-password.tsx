"use client";
import { useChangePassword } from "@/src/api/user";
import  { ButtonLoader } from "@/src/components/modules/loader/loader";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { changePasswordSchema } from "@/src/schema/rules";
import { useFormik } from "formik";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

interface newPasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}
const ChangePassword = () => {
  const { mutate: changePasswordMutation, isPending } = useChangePassword();

  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const formHandler = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: (values: newPasswordData) => {
      changePasswordMutation(values, {
        onSuccess() {
          formHandler.resetForm();
          setOpen(false);
        },
      });
    },
    validationSchema: changePasswordSchema,
  });
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    formHandler.handleSubmit();
  };
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} className="my-5 block bg-gray-100 text-black">
          ﺗﻐﯿﯿﺮ رمزعبور
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <div>
          <DialogTitle>
            <p>رمز عبور فعلی</p>
          </DialogTitle>

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
          className="mx-auto my-3 block h-9 w-[90px]"
        >
          {isPending ? <ButtonLoader /> : "ﺗﻐﯿﯿﺮ رمزعبور"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassword;
