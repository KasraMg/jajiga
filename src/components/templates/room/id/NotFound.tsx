import { Button } from "@/src/components/shadcn/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center">
      <p className="text-2xl">متاسفیم</p>
      <Image
        src={"https://www.jajiga.com/static/img/404/error404.png"}
        height={1000}
        className="mx-auto block h-[340px] w-[583px]"
        alt="notFound"
        width={1000}
      />
      <p className="text-2xl font-medium">اقامتگاه مورد نظر شما موجود نیست.</p>
      <p className="mt-4 text-sm">کد خطا:404</p>
      <p className="text-sm">
        صفحه ای که درخواست کرده اید وجود ندارد. شما می توانید از لینک های زیر
        برای ورود به قسمت های دیگر سایت استفاده کنید.
      </p>
      <div className="flex justify-center gap-5 mt-4">
        <Link href="/"> <Button variant={"main"}>صفحه اصلی</Button></Link>
        <Link href="/rooms"><Button variant={"main"}>جستجو</Button></Link>
      </div>
    </div>
  );
};

export default NotFound;
