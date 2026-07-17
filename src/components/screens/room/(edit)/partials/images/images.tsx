"use client";

import Loader from "@/src/components/modules/loader/loader";
import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import { Button } from "@/src/components/shadcn/ui/button";
import Image from "next/image";
import { BsCamera, BsTrash3 } from "react-icons/bs";
import { useImages } from "./hook";
import { Skeleton } from "@/src/components/shadcn/ui/skeleton";

const Images = () => {
  const {
    userImages,
    disableNextButton,
    inputChangeHandler,
    deleteImgHandler,
    submitHandler,
    isPending,
  } = useImages();

  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <div className="w-full">
          <p>تصاویر اقامتگاه را آپلود کنید</p>

          <p className=" mt-3 text-sm font-light">
            ارائه تصاویر زیبا و واقعی از اقامتگاه شما می‌تواند نقش بسیار مهمی در
            جلب نظر میهمانان ایفا نماید. لذا:
          </p>

          <ul className="mr-4 mt-4 list-disc text-sm">
            <li className=" font-light">
              حداقل 3 عکسِ باکیفیت، از پذیرایی، اتاق خواب‌ها، آشپزخانه، سرویس
              بهداشتی، حیاط و نمای ساختمان آپلود کنید.
            </li>

            <li className=" mt-2 font-light">
              ترجیحاً از تصاویر افقی (Landscape) استفاده کنید.
            </li>
          </ul>

          <div className="relative mt-3 w-full rounded-xl border border-dashed border-gray-700 p-4 text-center">
            <input
              type="file"
              multiple
              onChange={inputChangeHandler}
              className="absolute right-0 top-0 z-50 h-full w-full cursor-pointer opacity-0"
            />

            <div className="mx-auto block w-max rounded-full bg-gray-200 p-[10px] text-3xl text-gray-700">
              <BsCamera />
            </div>

            <p className=" mt-3 text-sm font-light">انتخاب تصویر +</p>
          </div>

          <div className="mb-20 mt-5 grid grid-cols-[1fr,1fr] gap-4 rounded-lg">
            {userImages.length > 0 ? (
              userImages.map((img, index) => (
                <div key={img.name} className="relative mt-3">
                  <Image
                    src={img.url}
                    alt="cover"
                    width={1000}
                    height={1000}
                    crossOrigin="anonymous"
                    className="sm:!h-[200px] object-cover h-[140px] w-full rounded-lg border border-dashed border-gray-600 md:!h-[163px]"
                  />

                  <div className="absolute right-2 top-3 rounded-full bg-white px-2 pt-1 text-center text-sm text-black">
                    <p>{index + 1}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteImgHandler(img.name)}
                    className="absolute left-3 top-3 rounded-md bg-red-600 p-2 text-2xl text-white"
                  >
                    <BsTrash3 />
                  </button>
                </div>
              ))
            ) : (
              <>
                <Skeleton 
                    className="sm:!h-[200px] h-[140px] w-full rounded-lg md:!h-[163px]"
                />
                <Skeleton 
                    className="sm:!h-[200px] h-[140px] w-full rounded-lg md:!h-[163px]"
                />
              </>
            )}
          </div>
        </div>

        {!disableNextButton &&
          (userImages.length < 3 ? (
            <Button
              variant="danger"
              className="mx-auto block w-max justify-center rounded-md px-4 py-2"
            >
              حداقل باید 3 عکس وارد کنید
            </Button>
          ) : (
            <Button
              onClick={submitHandler}
              variant="yellow"
              className="mx-auto block w-max justify-center rounded-md px-4 py-2"
            >
              ذخیره تغییرات
            </Button>
          ))}
      </div>

      <StepperInfo
        className="!relative !top-0 w-full max-w-[380px]"
        title="تصاویر اقامتگاه"
        text="تصاویر ارسالی جدید بعد از انتشار اقامتگاه در صف بررسی قرار می‌گیرد و پس از تایید محتوا و کیفیت توسط همکاران جاجیگا منتشر می‌شود."
      />

      {isPending && <Loader />}
    </section>
  );
};

export default Images;
