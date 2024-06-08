import { Button } from "@/src/components/shadcn/ui/button";
// import { usePostData } from "@/src/hooks/usePostData";
import {
  baseUrl,
  getFromLocalStorage,
  saveIntoLocalStorage,
} from "@/src/utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";

const Login = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [regexError, setRegextError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // interface todo {
  //     userId: number,
  //     id: number,
  //     title: string,
  //     completed: boolean
  // }
  // function Todos() {
  //   const {
  //     status,
  //     data: todos,
  //     error,
  //     isFetching,
  //   } = useQuery({
  //     queryKey: ["todos"],
  //     queryFn: fetchTodos,
  //   });

  //   return status === "pending" ? (
  //     <span>Loading...</span>
  //   ) : status === "error" ? (
  //     <span>Error: {error.message}</span>
  //   ) : (
  //     <>
  //       {isFetching ? <div>Refreshing...</div> : null}

  //       <div>
  //         {todos.map((todo:todo) => (
  //           <p>{todo.title}</p>
  //         ))}
  //       </div>
  //     </>
  //   );
  // }

  const mutation = useMutation({
    mutationFn: async () => {
      return await fetch(`${baseUrl}signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Phone: phoneNumber }),
      });
    },
    onSuccess: (data) => {
      console.log("Success:", data);
      if (data.status === 200) {
        saveIntoLocalStorage("otpRegisterPhoneNumber", phoneNumber);
        setStep("register");
      }
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  const submitHandler = () => {
    const phoneRegex = RegExp(/^(09)[0-9]{9}$/);
    const phoneRegexResult = phoneRegex.test(phoneNumber);
    if (phoneRegexResult) {
      setRegextError(false);
      mutation.mutate();
    } else setRegextError(true);
  };

  useEffect(() => {
    const prevPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
    if (prevPhoneNumber) {
      setPhoneNumber(phoneNumber);
    }
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
        {regexError && (
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