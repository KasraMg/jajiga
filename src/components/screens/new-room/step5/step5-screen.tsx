"use client";

import ContentNavigator from "@/src/components/modules/content-navigator/content-navigator";
import StepLayout from "@/src/components/modules/new-Room-stepper/step-layout";
import Stepper from "@/src/components/modules/stepper/stepper";
import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import Textarea from "@/src/components/modules/textarea/textarea"; 
import { useStep5 } from "./hook";

const Step5Screen = () => {
  const {
    standardSpace,
    maximumSpace,
    landSize,
    areaSize,
    roomCount,
    description,
    setLandSize,
    setAreaSize,
    setDescription,
    setRoomCount,
    disableNextButton,
    incrementStandardHandler,
    decrementStandardHandler,
    incrementMaximumHandler,
    decrementMaximumHandler,
    submitHandler,
    isPending,
  } = useStep5();

  return (
    <StepLayout stepperActive={5}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={5} />
        </div>

        <div className="w-full space-y-4">
          <div className="flex items-center justify-between pl-1">
            <p>ظرفیت استاندارد</p>

            <div className="flex w-1/2 items-center justify-between">
              <p
                onClick={incrementStandardHandler}
                className="cursor-pointer text-2xl hover:text-gray-500"
              >
                +
              </p>

              <p className="text-sm">{standardSpace} نفر</p>

              <p
                onClick={decrementStandardHandler}
                className={`${standardSpace === 1 && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pl-1">
            <p>حداکثر ظرفیت</p>

            <div className="flex w-1/2 items-center justify-between">
              <p
                onClick={incrementMaximumHandler}
                className="cursor-pointer text-2xl hover:text-gray-500"
              >
                +
              </p>

              <p className="text-sm">{maximumSpace} نفر</p>

              <p
                onClick={decrementMaximumHandler}
                className={`${(maximumSpace === 1 || maximumSpace === standardSpace) && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center">
            <p className=" text-sm font-light">
              متراژ زمین و محوطه اقامتگاه
            </p>

            <div className="relative flex w-full justify-between lg:w-1/2">
              <input
                value={landSize}
                onChange={(e) => setLandSize(e.target.value)}
                type="number"
                dir="ltr"
                className="w-full rounded-lg border border-solid border-gray-400 py-2 pl-9 pr-8 outline-none"
              />

              <span className="absolute left-2 top-[10px] text-sm text-gray-500">
                متر
              </span>

              {Number(landSize) > 9999 && (
                <span className="absolute -bottom-6 text-xs text-red-600">
                  متراژ زمین نمی‌تواند بزرگتر از 9999 متر باشد
                </span>
              )}
            </div>
          </div>

          <div className="!mt-10 flex flex-col items-start justify-between gap-2 !pb-4 lg:flex-row lg:items-center">
            <p className=" text-sm font-light">
              متراژ زیربنای اقامتگاه
            </p>

            <div className="relative flex w-full items-center justify-between lg:w-1/2">
              <input
                value={areaSize}
                onChange={(e) => setAreaSize(e.target.value)}
                type="number"
                dir="ltr"
                className="w-full rounded-lg border border-solid border-gray-400 py-2 pl-9 pr-8 outline-none"
              />

              <span className="absolute left-2 top-[10px] text-sm text-gray-500">
                متر
              </span>

              {Number(areaSize) > Number(landSize) && (
                <span className="absolute -bottom-[36px] text-xs text-red-600">
                  متراژ بنای اقامتگاه نمی‌تواند بزرگتر از متراژ زمین و محوطه
                  باشد
                </span>
              )}

              {Number(areaSize) > 9999 && (
                <span className="absolute -bottom-[27px] text-xs text-red-600">
                  متراژ زیربنا نمی‌تواند بزرگتر از 9999 متر باشد
                </span>
              )}
            </div>
          </div>

          <div className="!mt-6 flex items-center justify-between pl-1">
            <p>تعداد اتاق خواب</p>

            <div className="flex w-1/2 items-center justify-between">
              <p
                onClick={() => setRoomCount((prev) => prev + 1)}
                className="cursor-pointer text-2xl hover:text-gray-500"
              >
                +
              </p>

              <p className="text-sm">
                {roomCount === 0 ? "فاقد اتاق خواب" : `${roomCount} اتاق`}
              </p>

              <p
                onClick={() =>
                  setRoomCount((prev) => (prev === 0 ? 0 : prev - 1))
                }
                className={`${roomCount === 0 && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between pb-20 lg:flex-row">
            <p className="mb-3">توضیحات فضای خواب</p>

            <div className="w-full lg:w-1/2">
              <Textarea
                maxLength={250}
                setValue={setDescription}
                value={description}
              />

              <span className="mt-3 text-xs text-[#5f738c]">
                در این قسمت می توانید توضیحات تکمیلی درباره امکانات و شرایط مهیا
                شده برای خواب میهمانان را ارائه کنید
              </span>
            </div>
          </div>

          <ContentNavigator
            clickHandler={submitHandler}
            disablelPrevButton={false}
            disableNextButton={disableNextButton}
            isPending={isPending}
            prevLink="new-room/step4"
          />
        </div>

        <div className="sticky top-[68px] hidden h-max max-w-[243px] md:block">
          <StepperInfo
            className="!relative !top-0"
            title="وسعت اقامتگاه"
            text="متراژ تقریبی زیربنا و همچنین متراژ کل اقامتگاه شامل محوطه و حیاط را در این قسمت وارد کنید."
          />

          <StepperInfo
            className="!relative !top-0 mt-5"
            title="ظرفیت استاندارد/ حداکثر ظرفیت"
            text="حداکثر ظرفیت حداکثر گنجایش اقامتگاه می‌باشد که بر اساس فضا و امکانات موجود تعیین می گردد"
          />

          <StepperInfo
            className="!relative !top-0 mt-5"
            title="امکانات خواب"
            text="این قسمت امکانات خواب اقامتگاه را مشخص کنید."
          />
        </div>
 
      </div>
    </StepLayout>
  );
};

export default Step5Screen;
