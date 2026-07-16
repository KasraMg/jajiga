"use client";
import Breadcrumb from "@/src/components/modules/breadcrumb/breadcrumb";
import Container from "@/src/components/modules/container/container";
import Metadata from "@/src/components/modules/meta-data";
import { getFromLocalStorage } from "@/src/utils/utils";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SuccessfullScreen = () => {
  const villaId = getFromLocalStorage("villaId");

  return (
    <Container disableFooter={true}>
      <Breadcrumb route={"ثبت اقامتگاه"} />
      <Metadata
        seoTitle={"جاجیگا | ثبت اقامتگاه "}
        seoDescription={
          "چگونه در جاجیگا بتونیم ویلای خودمون رو ثبت و میزبان شویم؟"
        }
      />
      <main
        className={`relative bottom-2 z-10 rounded-xl bg-white px-3 sm:!px-5`}
      >
        <div className="Container">
          <div className="flex max-w-[1120px] flex-col justify-center gap-5 py-8">
            <CheckCircle size={120} className="mx-auto mt-20 stroke-green-600"/>
            <p className="mt-3 text-center sm:!text-xl">
              اقامتگاه شما با موفقیت ثبت شد و پس از تایید ادمین به لیست ویلا ها
              اضافه خواهد شد
            </p>
            <Link
              className="text-sx text-center text-green-600"
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

export default SuccessfullScreen;
