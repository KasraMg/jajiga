import Loader from "@/src/components/modules/loader/Loader";
import { Button } from "@/src/components/shadcn/ui/button";
import { baseUrl, getFromLocalStorage, saveIntoCookies } from "@/src/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import swal from "sweetalert";

const Password = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const phoneNumber = getFromLocalStorage("otpLoginPhoneNumber");

  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const inputChangeHandler = (value: string) => {
    setPassword(value);
    if (/^[a-zA-Z0-9]{8,999}$/.test(value)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const mutation = useMutation({
    mutationFn: async (password: string) => {
      return await fetch(`${baseUrl}/loginByPassword/${phoneNumber}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ password }),
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log("Success:", data);
      if (data.statusCode === 200) {
        swal({
          title: "با موفقیت ثبت نام شدید",
          icon: "success",
          buttons: [false, "حله"],
        }).then(() => { 
          saveIntoCookies("RefreshToken", data.RefreshToken, 9999999999999999, false);
          saveIntoCookies("AccessToken", data.accessToken, 9999999999999999, false);
          router.push("/dashboard");
          localStorage.clear();
        });
      } else if (data.statusCode === 401) {
        swal({
          title: "پسورد وارد شده اشتباه است",
          icon: "error",
          buttons: [false, "حله"],
        });
      } else if (data.statusCode === 409) {
        swal({
          title: "این شماره قادر به ورود به سایت نیست",
          icon: "error",
          buttons: [false, "حله"],
        });
      } else {
        swal({
          title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
          icon: "error",
          buttons: [false, "حله"],
        }).then(() => {
          localStorage.clear();
          location.reload();
        });
      }
    },
  });
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
        className="mt-5 w-full justify-center !rounded-full text-center"
        variant={"main"}
        onClick={() => mutation.mutate(password)}
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

      {mutation.isPending && <Loader />}
    </div>
  );
};

export default Password;
