"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { useState } from "react";
import Select from "react-select";
import { firstTimeOptions, secondTimeOptions } from "@/src/utils/selectOptions";
import StepLayout from "@/src/components/modules/stepLayout/StepLayout";

const page = () => {
  const [disabelNextButton, setDisabelNextButton] = useState<boolean>(false);
  const [dayCount, setDayCount] = useState<number>(1);
  const [firstTimeOptionsSelectedOption, setFirstTimeSelectedOption] =
    useState<{ label: string; value: string } | null>(null);
  const [secondTimeOptionsSelectedOption, setSecondTimeSelectedOption] =
    useState<{ label: string; value: string } | null>(null);

  const decrementHandler = () => {
    if (dayCount !== 1) {
      setDayCount((prev) => prev - 1);
    }
  };

  return (
    <StepLayout stepperActive={7}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={7} />
        </div>
        <div className="w-full space-y-4">
          <div className="flex flex-col items-start justify-between pl-1 sm:!flex-row sm:!items-center">
            <p>حداقل مدت اقامت</p>
            <div className="my-2 flex w-full items-center justify-between sm:!my-0 sm:!w-1/2">
              <p
                onClick={() => setDayCount((prev) => prev + 1)}
                className="cursor-pointer text-2xl hover:text-gray-500"
              >
                +
              </p>
              <p>{dayCount} شب</p>
              <p
                onClick={decrementHandler}
                className={`${dayCount <= 1 && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>
          <span className="font-vazir mt-3 text-xs font-light">
            بعنوان مثال درصورت تعیین حداقل 2 شب اقامت، درخواست رزرو برای 1 شب
            اقامت قابل ثبت نخواهد بود.
          </span>
          <div className="flex flex-col items-start gap-3 lg:!flex-row lg:!items-center">
            <p className="whitespace-nowrap">زمان تحویل از</p>
            <Select
              defaultValue={[{ label: "12 ظهر", value: "12 ظهر" }]}
              onChange={setFirstTimeSelectedOption as any}
              isClearable={true}
              className="font-vazir w-full text-sm font-light"
              isRtl={true}
              isSearchable={true}
              options={firstTimeOptions}
            />
            تا
            <Select
              defaultValue={[{ label: "نامحدود", value: "نامحدود" }]}
              onChange={setSecondTimeSelectedOption as any}
              isClearable={true}
              className="font-vazir w-full text-sm font-light"
              isRtl={true}
              isSearchable={true}
              options={secondTimeOptions}
            />
          </div>
          <div className="!mt-5 flex items-start justify-between gap-3 lg:!items-center">
            <p className="whitespace-nowrap">زمان تخلیه</p>
            <Select
              defaultValue={[{ label: "11 صبح", value: "11 صبح" }]}
              onChange={setFirstTimeSelectedOption as any}
              isClearable={true}
              className="font-vazir w-[60%] text-sm font-light"
              isRtl={true}
              isSearchable={true}
              options={firstTimeOptions}
            />
          </div>

          <ContentNavigator
            disablelPrevButton={false}
            disabelNextButton={disabelNextButton}
            prevLink={"newRoom/step6"}
            nextLink={"newRoom/step8"}
          />
        </div>
        <div className="sticky top-[68px] hidden h-max max-w-[243px] md:!block">
          <StepperInfo
            className="!relative !top-0"
            title="زمان تحویل و تخلیه"
            text=" زمان تحویل اقامتگاه به میهمان بعدی می بایست با فاصله مناسب از زمان تخلیه اقامتگاه توسط میهمان قبلی تعیین گردد تا فرصت کافی برای نظافت و مرتب کردن خانه فراهم باشد. زمان تحویل بطور معمول ساعت 2 بعد از ظهر می‌باشد.‎توجه: با انتخاب گزینه نامحدود آمادگی خواهید داشت تا در هر زمانی از شبانه روز, منزل را به میهمان تازه وارد تحویل دهی"
          />
        </div>
      </div>
    </StepLayout>
  );
};

export default page;
