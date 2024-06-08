import { Button } from "@/src/components/shadcn/ui/button";
import { getFromLocalStorage } from "@/src/utils/utils";
import { useState } from "react";

const Otp = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const phoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
  const [code, setCode] = useState('');
  const sendOtpAgain = () => {};

  return (
    <div className="w-full md:!w-[350px]">
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
      <p className="mt-4 text-sm sm:!mt-2">
        کد فعالسازی به شماره موبایل شما پیامک شد
      </p>
      <div className="relative my-6 flex flex-col items-start justify-between gap-2 sm:!flex-row sm:!items-center sm:!gap-0">
        <p className="text-sm">کد فعالسازی را وارد کنید</p>
        <input
          type="number"
          className="w-full rounded-md border border-solid border-gray-400 !py-1 px-6 text-center placeholder:text-center sm:!w-[150px]"
          placeholder="11111"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
      </div>

      <Button
        onClick={sendOtpAgain}
        className="w-full justify-center !rounded-sm !px-4 text-sm"
        variant={"outlineMain"}
      >
        ارسال دوباره کد
      </Button>

      <Button
        className="mt-5 w-full justify-center !rounded-full text-center"
        variant={"main"}
      >
        ورود
      </Button>
      <Button
        onClick={() => setStep("password")}
        className="mx-auto mt-5 !block !rounded-full !px-4 font-thin"
        variant={"outlineMain"}
      >
        ورود با رمز عبور
      </Button>
    </div>
  );
};

export default Otp;
