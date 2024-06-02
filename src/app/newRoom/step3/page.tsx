"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/components/modules/stepLayout/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { useState } from "react";
import { BsCamera, BsTrash3 } from "react-icons/bs";

const page = () => {
  const [description, setDescription] = useState<string>("");
  const [disabelNextButton, setDisabelNextButton] = useState(true);

  return (
    <StepLayout stepperActive={3}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={3} />
        </div>
        <div className="w-full">
          <p>تصاویر اقامتگاه را آپلود کنید</p>
          <p className="font-vazir mt-3 text-sm font-light">
            ارائه تصاویر زیبا و واقعی از اقامتگاه شما می تواند نقش بسیار مهمی در
            جلب نظر میهمانان ایفا نماید.‏‎‏ لذا:
          </p>
          <ul className="mr-4 mt-4 list-disc text-sm">
            <li className="font-vazir font-light">
              حداقل 10 عکسِ باکیفیت، از پذیرایی، اتاق خواب ها، آشپزخانه، سرویس
              بهداشتی، حیاط و نمای ساختمان آپلود کنید.
            </li>
            <li className="font-vazir mt-2 font-light">
              ترجیحاً از تصاویر افقی (Landscape) استفاده کنید.
            </li>
          </ul>

          <div className="relative mt-3 w-full rounded-xl border border-dashed border-gray-700 p-4 text-center">
            <input
              type="file"
              className="absolute right-0 top-0 z-50 h-full w-full cursor-pointer opacity-0"
              id=""
            />
            <div className="mx-auto block w-max rounded-full bg-gray-200 p-[10px] text-3xl text-gray-700">
              <BsCamera />
            </div>
            <p className="font-vazir mt-3 text-sm font-light">انتخاب تصویر +</p>
          </div>

          <div
            className="mb-20 mt-5 rounded-lg pb-3"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            }}
          >
            <div className="relative">
              <img
                className="h-[200px] w-full rounded-lg border border-dashed border-gray-600 lg:!h-[353px]"
                src="https://storage.jajiga.com/public/pictures/medium/2024/01/28/3216492240128221348.jpg"
                alt=""
              />
              <div className="absolute right-2 top-3 rounded-full bg-white px-2 pt-1 text-center text-sm text-black">
                <p>1</p>
              </div>
              <div className="absolute left-3 top-3 w-max cursor-pointer rounded-md bg-red-600 p-2 text-center text-2xl text-white">
                <BsTrash3 />
              </div>
            </div>
            <div className="relative">
              <Textarea
                className="mx-auto mt-2 block !h-[70px] !w-[98%] rounded-lg !px-4 !pb-10 !pt-2 text-xs placeholder:text-gray-400 focus:!border-black"
                placeholder="عنوان مناسبی برای این تصویر بنویسید"
                maxLength={56}
                setValue={setDescription}
                value={description}
              />
            </div>
          </div>
          <ContentNavigator
            disablelPrevButton={false}
            disabelNextButton={disabelNextButton}
            prevLink={"newRoom/step2"}
            nextLink={"newRoom/step4"}
          />
        </div>
        <div className="sticky top-[68px] hidden h-max max-w-[243px] md:!block">
          <StepperInfo
            className="!relative !top-0"
            title="تصاویر اقامتگاه"
            text="شما می توانید با گرفتن و کشیدن (Drag) عکسها, تصویر اصلی اقامتگاه و ترتیب نمایش تصاویر را به میل خود تغییر دهید..‏"
          />
          <StepperInfo
            className="!relative !top-0 mt-4"
            title="ویرایش تصاویر اقامتگاه"
            text="همچنین می توانید بعد از ثبت اقامتگاه, به قسمت ویرایش اقامتگاه مراجعه کرده, تصویر اصلی اقامتگاه را ‏تغییر دهید, تصاویر بیشتری اضافه کنید و یا ترتیب تصاویر را تغییر دهید"
          />
        </div>
      </div>
    </StepLayout>
  );
};

export default page;
