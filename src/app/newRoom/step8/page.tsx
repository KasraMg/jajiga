"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/components/modules/stepLayout/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { useState } from "react";

const page = () => {
  const [disabelNextButton, setDisabelNextButton] = useState<boolean>(false);
  const [rules, setRules] = useState<string>("");

  return (
    <StepLayout stepperActive={9}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={9} />
        </div>
        <div className="w-full space-y-5">
          <div>
            <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
              <p className="text-sm">همراه داشتن حیوان خانگی</p>

              <div className="mb-4 grid w-full grid-cols-2 gap-2 rounded-[32px] bg-gray-200 p-1 lg:!mb-0 lg:!max-w-[8rem]">
                <div>
                  <input
                    type="radio"
                    name="animall"
                    id="7"
                    value="7"
                    className="peer hidden"
                  />
                  <label
                    htmlFor={"7"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    مجاز
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="animall"
                    id="8"
                    value="8"
                    className="peer hidden"
                  />
                  <label
                    htmlFor={"8"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    ممنوع
                  </label>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400">توضیحات:</p>
            <p className="text-xs text-gray-400">
              ورود حیوان خانگی (سگ، گربه، ...) به شرط رعایت کامل نظافت مجاز است.
              در داخل ساختمان حیوان باید در باکس مخصوص نگهداری شود.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
              <p className="text-sm">برگزاری جشن و پخش موزیک</p>

              <div className="mb-4 grid w-full grid-cols-2 gap-2 rounded-[32px] bg-gray-200 p-1 lg:!mb-0 lg:!max-w-[8rem]">
                <div>
                  <input
                    type="radio"
                    name="music"
                    id="3"
                    value="1"
                    className="peer hidden"
                  />
                  <label
                    htmlFor={"3"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    مجاز
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="music"
                    id="4"
                    value="2"
                    className="peer hidden"
                  />
                  <label
                    htmlFor={"4"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    ممنوع
                  </label>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400">توضیحات:</p>
            <p className="text-xs text-gray-400">
              {" "}
              برگزاری جشن کوچک با هماهنگی میزبان امکانپذیر است.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
              <p className="text-sm">
                استعمال دخانیات (سیگار، قلیان و ...) در فضای داخلی ساختمان
              </p>

              <div className="mb-4 grid w-full grid-cols-2 gap-2 rounded-[32px] bg-gray-200 p-1 lg:!mb-0 lg:!max-w-[8rem]">
                <div>
                  <input
                    type="radio"
                    name="smoke"
                    id="5"
                    value="1"
                    className="peer hidden"
                  />
                  <label
                    htmlFor={"5"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    مجاز
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="smoke"
                    id="6"
                    value="2"
                    className="peer hidden"
                  />
                  <label
                    htmlFor={"6"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    ممنوع
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pb-20 lg:!flex-row">
            <p className="mb-3">افزودن مقررات بیشتر</p>
            <div className="w-full lg:!w-[60%]">
              <Textarea maxLength={250} setValue={setRules} value={rules} />
            </div>
          </div>
          <ContentNavigator
            disablelPrevButton={false}
            disabelNextButton={disabelNextButton}
            prevLink={"newRoom/step8"} 
          />
        </div>
        <div className="max-w-[243px]">
          <StepperInfo
            title=" مقررات اقامتگاه "
            text="تعیین و درج مقررات اقامتگاه بصورت شفاف و گویا باعث حداقل شدن مشکلات آینده خواهد شد. توجه داشته باشید که تنها میهمانانی که تمامی مقررات اقامتگاه شما را می پذیرند قادر به رزرو اقامتگاه خواهند بود, لذا با رعایت تعادل در تعیین مقررات ‏تعداد کمتری از میهمانان را از دست خواهید داد."
          />
        </div>
      </div>
    </StepLayout>
  );
};

export default page;
