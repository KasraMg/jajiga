import { Button } from "@/src/components/shadcn/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye } from "react-icons/lu";

const Register = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full md:!w-[350px]">
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
        placeholder="نام"
        value={firstName}
        onChange={(event)=>setFirstName(event.target.value)}
      />
      <input
        className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-6 pr-3 text-sm"
        type="text"
        placeholder="نام خانوادگی"
        value={lastName}
        onChange={(event)=>setLastName(event.target.value)}
      />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          dir="ltr"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-9 pr-3 text-sm placeholder:text-right"
          placeholder="رمز عبور"
        />
        <LuEye
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute left-3 top-[23px] cursor-pointer"
        />
      </div>
      <Button
        className="mx-auto mt-5 !block w-max !rounded-full !px-12 text-center"
        variant={"main"}
      >
        ثبت نام
      </Button>
    </div>
  );
};

export default Register;
