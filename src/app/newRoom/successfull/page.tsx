"use client";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import { getFromLocalStorage } from "@/src/utils/utils";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const villaId = getFromLocalStorage("villaId");

  return (
    <Container disableFooter={true}>
      <Breadcrumb route={"ثبت اقامتگاه"} />
      <main
        className={`relative bottom-2 z-10 rounded-xl bg-white px-3 sm:!px-5`}
      >
        <div className="Container">
          <div className="flex max-w-[1120px] flex-col justify-center gap-5 py-8">
            <Image
              className="mx-auto mt-20 !h-28 !w-28"
              alt="verified-account"
              src="/images/verify.PNG"
              width={100}
              height={100}
            /> 
            <p className="mt-3 text-center text-sm sm:!text-xl">
              اقامتگاه شما با موفقیت ثبت شد و پس از تایید ادمین به لیست ویلا ها
              اضافه خواهد شد
            </p>
            <Link
              className="text-sx text-center text-blue-600"
              href={`/room/${villaId}`}
            >
              مشاهده اقامتگاه
            </Link>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default page;
