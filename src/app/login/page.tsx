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
      <div className="sm:!px-5` relative bottom-2 !z-10 flex flex-col-reverse justify-center gap-8 rounded-xl bg-white px-3 pb-20 pt-5 sm:!pt-10 md:!flex-row lg:!gap-20">
        <div className="relative z-[9999] mt-20 px-3 sm:!px-0">
          <div className="hidden w-full sm:!pb-20 md:!w-[350px]">
            <p className="text-lg font-bold">ورود / ثبت‌نام</p>
            <span className="mt-3 text-sm font-thin">
              برای ورود یا ثبت‌نام، شماره همراه خود را وارد کنید
            </span>
            <div className="relative mt-4">
              <input
                dir="ltr"
                className="w-full rounded-lg border border-solid border-gray-400 py-3 pl-11 pr-3 text-sm"
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
              className="mt-6 w-full justify-center !rounded-full text-center"
              variant={"main"}
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
          <div className="hidden w-full sm:!pb-7 md:!w-[350px]">
            <div className="flex items-center justify-between">
              <p dir="ltr">+989046417084</p>
              <Button className="!rounded-sm !px-4" variant={"outlineMain"}>
                ویرایش
              </Button>
            </div>
            <p className="mt-2">لطفا رمز عبور خود را وارد کنید</p>
            <div className="relative my-6">
              <input
                type="text"
                className="w-full rounded-md border border-solid border-gray-400 py-3 pl-6 pr-3 text-sm"
                placeholder="رمز عبور"
              />
              <LuEye className="absolute left-3 top-[14px] cursor-pointer" />
            </div>
            <Button
              className="mt-5 w-full justify-center !rounded-full text-center"
              variant={"main"}
            >
              ورود
            </Button>
            <Button
              className="mx-auto mt-5 !block !rounded-full !px-4 font-thin"
              variant={"outlineMain"}
            >
              ورود با کد یکبار مصرف
            </Button>
          </div>
          <div className="hidden w-full md:!w-[350px]">
            <div className="flex items-center justify-between">
              <p dir="ltr">+989046417084</p>
              <Button className="!rounded-sm !px-4" variant={"outlineMain"}>
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
              />
            </div>
            <div className="relative my-6 flex items-center justify-between">
              <p>کد را دریافت نکردید؟</p>
              <Button
                className="!rounded-sm !px-4 text-sm"
                variant={"outlineMain"}
              >
                ارسال دوباره کد
              </Button>
            </div>
            <Button
              className="mt-5 w-full justify-center !rounded-full text-center"
              variant={"main"}
            >
              ورود
            </Button>
            <Button
              className="mx-auto mt-5 !block !rounded-full !px-4 font-thin"
              variant={"outlineMain"}
            >
              ورود با رمز عبور
            </Button>
          </div>
          <div className="w-full md:!w-[350px]">
            <div className="flex items-center justify-between">
              <p dir="ltr">+989046417084</p>
              <Button className="!rounded-sm !px-4" variant={"outlineMain"}>
                ویرایش
              </Button>
            </div>
            <p className="mb-2 mt-2 text-2xl">ثبت‌نام</p>
            <p className="text-sm font-thin">
              لطفا مشخصات صحیح خود را وارد کنید
            </p>
            <input
              className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-6 pr-3 text-sm"
              type="text"
              placeholder="نام"
            />
            <input
              className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-6 pr-3 text-sm"
              type="text"
              placeholder="نام خانوادگی"
            />
            <div className="relative">
              <input
                type="text"
                className="mt-3 w-full rounded-md border border-solid border-gray-400 py-2 pl-6 pr-3 text-sm"
                placeholder="رمز عبور"
              />
              <LuEye className="absolute left-3 top-[23px] cursor-pointer" />
            </div>
            <Button
              className="mx-auto mt-5 !block w-max !rounded-full !px-12 text-center"
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
