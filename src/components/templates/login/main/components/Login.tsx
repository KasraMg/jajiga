import { Button } from "@/src/components/shadcn/ui/button";
import useFetchData from "@/src/hooks/useFetchData";
import { usePostData } from "@/src/hooks/usePostData";
import { getFromLocalStorage, saveIntoLocalStorage } from "@/src/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Login = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [error, setError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const submitHandler = () => {
    const phoneRegex = RegExp(/^(09)[0-9]{9}$/);

    const phoneRegexResult = phoneRegex.test(phoneNumber);
    if (phoneRegexResult) {
      const userObj: any = {
        Identifeir: "PhoneNum",
        Password: "09332464029",
      };
      const { data }: any = usePostData({
        course: userObj,
        url: "/login/Phone",
      });
      console.log(data);

      setError(false);
      saveIntoLocalStorage("otpPhoneNumber", phoneNumber);
      setStep("otp");
    } else setError(true);
  };

  useEffect(() => {
    const phoneNumber = getFromLocalStorage("otpPhoneNumber");
    setPhoneNumber(phoneNumber);
  }, []);

  return (
    <div className="w-full sm:!pb-20 md:!w-[350px]">
      <p className="text-lg font-bold">ورود / ثبت‌نام</p>
      <span className="mt-3 text-sm font-thin">
        برای ورود یا ثبت‌نام، شماره همراه خود را وارد کنید
      </span>
      <div className="relative mt-4">
        <input
          dir="ltr"
          className="w-full rounded-lg border border-solid border-gray-400 py-3 pl-11 pr-3 text-sm"
          type="number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        {error && (
          <span className="mt-1 block text-center text-xs text-red-600">
            شماره وارد شده معتبر نمی‌باشد
          </span>
        )}
        <span className="absolute left-3 top-[12px] font-thin">+98</span>
        <span className="absolute -top-2 right-3 bg-white px-1 text-xs">
          شماره همراه
        </span>
      </div>
      <Button
        className="mt-6 w-full justify-center !rounded-full text-center"
        variant={"main"}
        onClick={submitHandler}
      >
        ادامه
      </Button>
      <Link
        href={"/rules"}
        className="mx-auto mt-4 block w-max border-b-2 border-solid border-customYellow pb-2"
      >
        قوانین و مقررات
      </Link>
    </div>
  );
};

export default Login;
