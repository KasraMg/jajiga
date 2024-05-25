"use client";
import { LuEye } from "react-icons/lu";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import { Shape } from "../../components/templates/login/shape";
import { Button } from "@/src/components/shadcn/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <Container>
      <Breadcrumb route="ورود" />
      <div className="!z-10 relative bottom-2 rounded-xl gap-8 lg:!gap-20 pt-5 sm:!pt-10 bg-white flex flex-col-reverse md:!flex-row pb-20 justify-center px-3 sm:!px-5`">
        <div className="mt-20 relative z-[9999] px-3 sm:!px-0">
          <div className="w-full md:!w-[350px] sm:!pb-20 hidden">
            <p className="text-lg font-bold">ورود / ثبت‌نام</p>
            <span className="text-sm font-thin mt-3">
              برای ورود یا ثبت‌نام، شماره همراه خود را وارد کنید
            </span>
            <div className="relative mt-4">
              <input
                dir="ltr"
                className="rounded-lg pl-11 py-3 pr-3 w-full border border-solid border-gray-400 text-sm"
                type="number"
                name=""
                id=""
              />
              <span className="absolute left-3 top-[12px] font-thin">+98</span>
              <span className="absolute -top-2 right-3 bg-white px-1 text-xs">
                شماره همراه
              </span>
            </div>
            <Button
              className="!rounded-full w-full mt-6 text-center justify-center"
              variant={"main"}
            >
              ادامه
            </Button>
            <Link
              href={"/rules"}
              className="mt-4 border-b-2 pb-2 border-solid border-customYellow mx-auto block w-max"
            >
              قوانین و مقررات
            </Link>
          </div>
          <div className="w-full md:!w-[350px] sm:!pb-7 hidden">
            <div className="flex justify-between items-center">
              <p dir="ltr">+989046417084</p>
              <Button className="!px-4 !rounded-sm" variant={"outlineMain"}>
                ویرایش
              </Button>
            </div>
            <p className="mt-2">لطفا رمز عبور خود را وارد کنید</p>
            <div className="my-6 relative">
              <input
                type="text"
                className="pl-6 pr-3 rounded-md  w-full text-sm py-3 border border-solid border-gray-400"
                placeholder="رمز عبور"
              />
              <LuEye className=" cursor-pointer absolute top-[14px] left-3" />
            </div>
            <Button
              className="!rounded-full w-full mt-5 text-center justify-center"
              variant={"main"}
            >
              ورود
            </Button>
            <Button
              className="!px-4 !rounded-full mx-auto mt-5 font-thin !block"
              variant={"outlineMain"}
            >
              ورود با کد یکبار مصرف
            </Button>
          </div>
          <div className="w-full md:!w-[350px] hidden">
            <div className="flex justify-between items-center">
              <p dir="ltr">+989046417084</p>
              <Button className="!px-4 !rounded-sm" variant={"outlineMain"}>
                ویرایش
              </Button>
            </div>
            <p className="sm:!mt-2 mt-4 text-sm">
              کد فعالسازی به شماره موبایل شما پیامک شد
            </p>
            <div className="my-6 relative flex flex-col sm:!gap-0 gap-2 sm:!flex-row justify-between items-start sm:!items-center">
              <p className="text-sm">کد فعالسازی را وارد کنید</p>
              <input
                type="number"
                className="px-6 !py-1 rounded-md  placeholder:text-center text-center w-full sm:!w-[150px] border border-solid border-gray-400"
                placeholder="11111"
              />
            </div>
            <div className="my-6 relative flex justify-between items-center">
              <p>کد را دریافت نکردید؟</p>
              <Button
                className="!px-4 !rounded-sm text-sm"
                variant={"outlineMain"}
              >
                ارسال دوباره کد
              </Button>
            </div>
            <Button
              className="!rounded-full w-full mt-5 text-center justify-center"
              variant={"main"}
            >
              ورود
            </Button>
            <Button
              className="!px-4 !rounded-full mx-auto mt-5 font-thin !block"
              variant={"outlineMain"}
            >
              ورود با رمز عبور
            </Button>
          </div>
          <div className="w-full md:!w-[350px] ">
            <div className="flex justify-between items-center">
              <p dir="ltr">+989046417084</p>
              <Button className="!px-4 !rounded-sm" variant={"outlineMain"}>
                ویرایش
              </Button>
            </div>
            <p className="mt-2 text-2xl mb-2">ثبت‌نام</p>
            <p className="text-sm font-thin">
              لطفا مشخصات صحیح خود را وارد کنید
            </p>
            <input
              className="pl-6 pr-3 rounded-md text-sm mt-3 w-full py-2 border border-solid border-gray-400"
              type="text"
              placeholder="نام"
            />
            <input
              className="pl-6 pr-3 rounded-md text-sm mt-3 w-full py-2 border border-solid border-gray-400"
              type="text"
              placeholder="نام خانوادگی"
            />
            <div className=" relative">
              <input
                type="text"
                className="pl-6 pr-3 rounded-md text-sm  mt-3 w-full py-2 border border-solid border-gray-400"
                placeholder="رمز عبور"
              />
              <LuEye className=" cursor-pointer absolute top-[23px] left-3" />
            </div>
            <Button
              className="!rounded-full w-max mx-auto !px-12  mt-5 text-center !block"
              variant={"main"}
            >
              ثبت نام
            </Button>
          </div>
        </div>
        <Shape />
      </div>
    </Container>
  );
};

export default Login;
