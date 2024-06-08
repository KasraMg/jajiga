import { Button } from "@/src/components/shadcn/ui/button";
import { getFromLocalStorage } from "@/src/utils/utils";
import Link from "next/link";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

const Password = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const phoneNumber = getFromLocalStorage("otpLoginPhoneNumber");

  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full sm:!pb-7 md:!w-[350px]">
      <div className="flex items-center justify-between">
        <p dir="ltr">+98{phoneNumber.slice(1, 11)}</p>
        <Button
          onClick={() => setStep("login")}
          className="!rounded-sm !px-4"
          variant={"outlineMain"}
        >
          ویرایش
        </Button>
      </div>
      <p className="mt-2">لطفا رمز عبور خود را وارد کنید</p>
      <div className="relative my-6">
        <input
          dir="ltr"
          type={showPassword ? "text" : "password"}
          className="w-full rounded-md border border-solid border-gray-400 py-3 pl-10 pr-3 text-sm placeholder:text-right"
          placeholder="رمز عبور"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <LuEye
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute left-3 top-[15px] cursor-pointer"
        />
      </div>
      <Button
        className="mt-5 w-full justify-center !rounded-full text-center"
        variant={"main"}
      >
        ورود
      </Button>
      <Button
        onClick={() => setStep("otp")}
        className="mx-auto mt-5 !block !rounded-full !px-4 font-thin"
        variant={"outlineMain"}
      >
        ورود با کد یکبار مصرف
      </Button>
    </div>
  );
};

export default Password;
