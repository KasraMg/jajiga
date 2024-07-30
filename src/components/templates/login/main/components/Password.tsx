import { ButtonLoader } from "@/src/components/modules/loader/Loader";
import { Button } from "@/src/components/shadcn/ui/button";
import { getFromLocalStorage } from "@/src/utils/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import Cookies from "js-cookie";
import usePostData from "@/src/hooks/usePostData";
import { toast } from "@/src/components/shadcn/ui/use-toast";

const Password = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const successFunc = (data: {
    statusCode: number;
    RefreshToken: string;
    accessToken: string;
  }) => {
    if (data.statusCode === 200) {
      toast({
        variant: "success",
        title: "با موفقیت وارد شدید",
      });
      Cookies.set("RefreshToken", data.RefreshToken, {
        expires: 9999999,
        path: "",
      });
      Cookies.set("AccessToken", data.accessToken, {
        expires: 9999999,
        path: "",
      });
      router.replace("/dashboard");
    } else if (data.statusCode === 401) {
      toast({
        variant: "danger",
        title: "پسورد وارد شده اشتباه است",
      });
    } else if (data.statusCode === 409) {
      toast({
        variant: "danger",
        title: "این شماره قادر به ورود به سایت نیست",
      });
    } else {
      toast({
        variant: "danger",
        title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
      });
      localStorage.clear();
      location.reload();
    }
  };

  const phoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const inputChangeHandler = (value: string) => {
    setPassword(value);
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9.@$-_#]{8,}$/.test(value)) {
      setError(false);
    } else {
      setError(true);
    }
  };
  const { mutate: mutation, isPending } = usePostData<{ password: string }>(
    `/loginByPassword/${phoneNumber}`,
    null,
    false,
    successFunc,
  );

  const { mutate: resendCode } = usePostData<any>(
    `/resendCode/${phoneNumber}`,
    null,
    false,
  );
  const resendCodeHandler = () => {
    setStep("otp");
    resendCode({});
  };
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
          onChange={(event) => inputChangeHandler(event.target.value)}
        />
        <LuEye
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute left-3 top-[15px] cursor-pointer"
        />
      </div>
      <Button
        disabled={!error ? false : true}
        className="mt-5 w-full h-[36px] justify-center !rounded-full text-center"
        variant={"main"}
        onClick={() => mutation({ password: password })}
      >
        {isPending ? <ButtonLoader /> : "ورود"}
      </Button>
      <Button
        onClick={resendCodeHandler}
        className="mx-auto mt-5 !block !rounded-full !px-4 font-thin"
        variant={"outlineMain"}
      >
        ورود با کد یکبار مصرف
      </Button> 
    </div>
  );
};

export default Password;
