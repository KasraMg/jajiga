import { LuEye } from "react-icons/lu";

import { ButtonLoader } from "@/src/components/modules/loader/loader";
import { Button } from "@/src/components/shadcn/ui/button";

import { useRegister } from "./hook";

const Register = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    phoneNumber,
    formHandler,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    submitHandler,
    isPending,
  } = useRegister({ setStep });

  return (
    <form className="w-full md:!w-[350px]">
      <div className="flex items-center justify-between">
        <p dir="ltr">+98{phoneNumber?.slice(1, 11)}</p>

        <Button
          className="!rounded-sm !px-4"
          variant="outlineMain"
          onClick={() => setStep("login")}
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
        onBlur={formHandler.handleBlur}
      />

      {formHandler.touched.firstName && formHandler.errors.firstName && (
        <span className="mt-2 block text-center text-xs text-red-600">
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
        onBlur={formHandler.handleBlur}
      />

      {formHandler.touched.lastName && formHandler.errors.lastName && (
        <span className="mt-2 block text-center text-xs text-red-600">
          {formHandler.errors.lastName}
        </span>
      )}

      <div className="relative">
        <input
          dir="ltr"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="رمز عبور"
          value={formHandler.values.password}
          onChange={formHandler.handleChange}
          onBlur={formHandler.handleBlur}
          className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-9 pr-3 text-sm placeholder:text-right"
        />

        <LuEye
          className="absolute left-3 top-[23px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        />
      </div>

      {formHandler.touched.password && formHandler.errors.password && (
        <span className="mt-2 block text-center text-xs text-red-600">
          {formHandler.errors.password}
        </span>
      )}

      <div className="relative">
        <input
          dir="ltr"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="تکرار رمز عبور"
          value={formHandler.values.confirmPassword}
          onChange={formHandler.handleChange}
          onBlur={formHandler.handleBlur}
          className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-9 pr-3 text-sm placeholder:text-right"
        />

        <LuEye
          className="absolute left-3 top-[23px] cursor-pointer"
          onClick={() => setShowConfirmPassword((prev) => !prev)}
        />
      </div>

      {formHandler.touched.confirmPassword &&
        formHandler.errors.confirmPassword && (
          <span className="mt-2 block text-center text-xs text-red-600">
            {formHandler.errors.confirmPassword}
          </span>
        )}

      <Button
        type="submit"
        variant="main"
        onClick={submitHandler}
        disabled={!formHandler.isValid || !formHandler.dirty}
        className="mx-auto mt-5 !block h-[36px] w-max !rounded-full !px-12 text-center"
      >
        {isPending ? <ButtonLoader /> : "ثبت نام"}
      </Button>
    </form>
  );
};

export default Register;
