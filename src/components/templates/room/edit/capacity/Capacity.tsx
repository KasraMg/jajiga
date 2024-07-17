"use client"
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { Button } from "@/src/components/shadcn/ui/button";
import { useEffect, useState } from "react";
const Capacity = () => {

    const [standardSpace, setStandardSpace] = useState<number>(1);
    const [maximumSpace, setMaximumSpace] = useState<number>(1);
    const [landSize, setLandSize] = useState<string>("");
    const [areaSize, setAreaSize] = useState<string>("");
    const [roomCount, setRoomCount] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
  
    useEffect(() => {
      
    }, [landSize, areaSize, description]);
  
    const incrementStandardHandler = () => {
      setStandardSpace((prev) => prev + 1);
      if (maximumSpace - 1 < standardSpace) {
        setMaximumSpace((prev) => prev + 1);
      }
    };
    const decrementStandardHandler = () => {
      if (standardSpace !== 1) {
        setStandardSpace((prev) => prev - 1);
      }
    };
    const incrementMaximumHandler = () => {
      setMaximumSpace((prev) => prev + 1);
    };
    const decrementMaximumHandler = () => {
      if (maximumSpace !== 1 && maximumSpace !== standardSpace) {
        setMaximumSpace((prev) => prev - 1);
      }
    };
    const landSizeChangeHandler = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      setLandSize(event.target.value);
    };
    const areaSizeChangeHandler = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      setAreaSize(event.target.value);
    };
   
  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700"> 
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
                className={`${standardSpace == 1 && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
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
                className={`${(maximumSpace == 1 || maximumSpace == standardSpace) && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
            <p className="font-vazir text-sm font-light">
              متراژ زمین و محوطه اقامتگاه
            </p>
            <div className="relative flex w-full justify-between lg:!w-1/2 lg:!items-center">
              <input
                value={landSize}
                onChange={(event) => landSizeChangeHandler(event)}
                type="number"
                dir="ltr"
                className="w-full rounded-lg border border-solid border-gray-400 py-2 pl-9 pr-8 outline-none"
              />
              <span className="absolute left-2 top-[10px] text-sm text-gray-500">
                متر
              </span>
              {(landSize as any) > 9999 && (
                <span className="absolute -bottom-6 text-xs text-red-600">
                  متراژ زمین نمی‌تواند بزرگتر از 9999 متر باشد
                </span>
              )}
            </div>
          </div>
          <div className="!mt-10 flex flex-col items-start justify-between gap-2 !pb-4 lg:!flex-row lg:!items-center lg:!gap-0">
            <p className="font-vazir text-sm font-light">
              متراژ زیربنای اقامتگاه
            </p>
            <div className="relative flex w-full items-center justify-between lg:!w-1/2">
              <input
                value={areaSize}
                onChange={(event) => areaSizeChangeHandler(event)}
                type="number"
                dir="ltr"
                className="w-full rounded-lg border border-solid border-gray-400 py-2 pl-9 pr-8 outline-none"
              />
              <span className="absolute left-2 top-[10px] text-sm text-gray-500">
                متر
              </span>
              {landSize < areaSize && (
                <span className="absolute -bottom-[36px] text-xs text-red-600">
                  متراژ بنای اقامتگاه نمی‌تواند بزرگتر از متراژ زمین و محوطه
                  باشد
                </span>
              )}
              {landSize > areaSize && (areaSize as any) > 9999 && (
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
                {roomCount == 0 ? "فاقد اتاق خواب" : roomCount + "   اتاق  "}
              </p>
              <p
                onClick={() =>
                  setRoomCount((prev) => prev == -1 && ((prev - 1) as any))
                }
                className={`${roomCount == 0 && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pb-20 lg:!flex-row border-t border-gray-300 pt-4">
            <p className="mb-3">توضیحات فضای خواب</p>
            <div className="w-full lg:!w-1/2">
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
        </div>
      </div>
      <div>
        <StepperInfo
          className="w-full max-w-[380px]"
          title="ظرفیت استاندارد / ظرفیت حداکثر"
          text="تعداد نفرات تعیین‌شده در ظرفیت استاندارد اقامتگاهمبنای محاسبه نرخ استاندارد اقامتگاه خواهد بود؛ هر تعداد میهمان بیش از ظرفیت استاندارد مشمول محاسبه «هزینه نفر اضافه» خواهد گردید.
          حداکثر ظرفیت، حداکثر گنجایش اقامتگاه می‌باشد که بر اساس فضا، امکانات موجود و امکانات خواب تعیین می‌گردد."
        />
      </div>
    </section>
  );
};

export default Capacity;
