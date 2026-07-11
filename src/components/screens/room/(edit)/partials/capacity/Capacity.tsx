"use client";

import Loader from "@/src/components/modules/loader/loader";
import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import Textarea from "@/src/components/modules/textarea/textarea";
import { Button } from "@/src/components/shadcn/ui/button";
import { useCapacity } from "./hook";

const Capacity = () => {
  const {
    standardSpace,
    maximumSpace,
    landSize,
    areaSize,
    roomCount,
    description,
    setDescription,
    disableNextButton,
    setDisableNextButton,
    incrementStandardHandler,
    decrementStandardHandler,
    incrementMaximumHandler,
    decrementMaximumHandler,
    incrementRoomHandler,
    decrementRoomHandler,
    landSizeChangeHandler,
    areaSizeChangeHandler,
    submitHandler,
    isPending,
  } = useCapacity();

  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="w-full font-thin text-gray-700">
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
                className={`${
                  (maximumSpace === 1 || maximumSpace === standardSpace) &&
                  "!cursor-not-allowed text-gray-300"
                } mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center lg:gap-0">
            <p className="font-vazir text-sm font-light">
              متراژ زمین و محوطه اقامتگاه
            </p>

            <div className="relative flex w-full justify-between lg:w-1/2 lg:items-center">
              <input
                value={landSize}
                onChange={landSizeChangeHandler}
                type="number"
                dir="ltr"
                className="w-full rounded-lg border border-gray-400 py-2 pl-9 pr-8 outline-none"
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

          <div className="mt-10 flex flex-col items-start justify-between gap-2 pb-4 lg:flex-row lg:items-center lg:gap-0">
            <p className="font-vazir text-sm font-light">
              متراژ زیربنای اقامتگاه
            </p>

            <div className="relative flex w-full items-center justify-between lg:w-1/2">
              <input
                value={areaSize}
                onChange={areaSizeChangeHandler}
                type="number"
                dir="ltr"
                className="w-full rounded-lg border border-gray-400 py-2 pl-9 pr-8 outline-none"
              />

              <span className="absolute left-2 top-[10px] text-sm text-gray-500">
                متر
              </span>

              {Number(areaSize) > Number(landSize) && (
                <span className="absolute -bottom-[36px] text-xs text-red-600">
                  متراژ بنای اقامتگاه نمی‌تواند بزرگتر از متراژ زمین باشد
                </span>
              )}

              {Number(areaSize) > 9999 && (
                <span className="absolute -bottom-[27px] text-xs text-red-600">
                  متراژ زیربنا نمی‌تواند بزرگتر از 9999 متر باشد
                </span>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between pl-1">
            <p>تعداد اتاق خواب</p>

            <div className="flex w-1/2 items-center justify-between">
              <p
                onClick={incrementRoomHandler}
                className="cursor-pointer text-2xl hover:text-gray-500"
              >
                +
              </p>

              <p className="text-sm">
                {roomCount === 0 ? "فاقد اتاق خواب" : `${roomCount} اتاق`}
              </p>

              <p
                onClick={decrementRoomHandler}
                className={`${
                  roomCount === 0 && "!cursor-not-allowed text-gray-300"
                } mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-gray-300 pb-20 pt-4 lg:flex-row">
            <p className="mb-3">توضیحات فضای خواب</p>

            <div className="w-full lg:w-1/2">
              <Textarea
                value={description}
                setValue={setDescription}
                maxLength={250}
                buttonDisableFun={() => setDisableNextButton(false)}
              />

              <span className="mt-3 text-xs text-[#5f738c]">
                در این قسمت می‌توانید توضیحات تکمیلی درباره امکانات و شرایط مهیا
                شده برای خواب میهمانان را ارائه کنید.
              </span>
            </div>
          </div>
        </div>

        {!disableNextButton && (
          <Button
            onClick={submitHandler}
            variant="yellow"
            className="mx-auto mt-10 block w-max justify-center rounded-md px-4 py-2 transition-colors hover:opacity-75"
          >
            ذخیره تغییرات
          </Button>
        )}
      </div>

      <div className="hidden md:block">
        <StepperInfo
          className="w-full max-w-[380px]"
          title="ظرفیت استاندارد / ظرفیت حداکثر"
          text="تعداد نفرات تعیین‌شده در ظرفیت استاندارد اقامتگاه مبنای محاسبه نرخ استاندارد اقامتگاه خواهد بود."
        />
      </div>

      {isPending && <Loader />}
    </section>
  );
};

export default Capacity;
