"use client";
import Loader from "@/src/components/modules/loader/Loader";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { Button } from "@/src/components/shadcn/ui/button";
import useEditVilla from "@/src/hooks/useEditVilla";
import { authStore } from "@/src/stores/auth";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface userObjData {
  capacity: {};
  step: 9;
  finished: true;
}

const Capacity = () => {
  const { userData } = authStore((state) => state);
  const params = useParams();

  const { mutate: mutation, isPending } = useEditVilla<userObjData>(
    null,
    "اطلاعات با موفقیت بروزرسانی شد",
    params.id as any,
  );

  const [standardSpace, setStandardSpace] = useState<number>(1);
  const [maximumSpace, setMaximumSpace] = useState<number>(1);
  const [landSize, setLandSize] = useState<string>("");
  const [areaSize, setAreaSize] = useState<string>("");
  const [roomCount, setRoomCount] = useState<number>(0);
  const [disableNextButton, setDisableNextButton] = useState<boolean>(true);
  const [description, setDescription] = useState<string>("");

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  useEffect(() => {
    if (villa) {
      console.log(villa);
      setStandardSpace(villa.capacity.normalCapacity as number);
      setLandSize(villa.capacity.buildingSize as string);
      setAreaSize(villa.capacity.fuundationSize as string);
      setRoomCount(villa.capacity.bedRoom as number);
      setMaximumSpace(villa.capacity.maxCapacity as number);
      setDescription(villa.capacity.description as string);
    }
  }, [villa]);

  const incrementStandardHandler = () => {
    setDisableNextButton(false);
    setStandardSpace((prev) => prev + 1);
    if (maximumSpace - 1 < standardSpace) {
      setMaximumSpace((prev) => prev + 1);
    }
  };
  const decrementStandardHandler = () => {
    setDisableNextButton(false);

    if (standardSpace !== 1) {
      setStandardSpace((prev) => prev - 1);
    }
  };
  const incrementMaximumHandler = () => {
    setDisableNextButton(false);

    setMaximumSpace((prev) => prev + 1);
  };
  const decrementMaximumHandler = () => {
    setDisableNextButton(false);

    if (maximumSpace !== 1 && maximumSpace !== standardSpace) {
      setMaximumSpace((prev) => prev - 1);
    }
  };
  const landSizeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDisableNextButton(false);
    setLandSize(event.target.value);
  };
  const areaSizeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDisableNextButton(false);
    setAreaSize(event.target.value);
  };

  const submitHandler = () => {
    const data: userObjData = {
      capacity: {
        normalCapacity: standardSpace,
        maxCapacity: maximumSpace,
        buildingSize: landSize,
        fuundationSize: areaSize,
        bedRoom: roomCount,
        description: description,
      },
      step: 9,
      finished: true,
    };
    mutation(data);
    setDisableNextButton(true);
  };

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
              {areaSize > landSize ? (
                <span className="absolute -bottom-[36px] text-xs text-red-600">
                  متراژ بنای اقامتگاه نمی‌تواند بزرگتر از متراژ زمین و محوطه
                  باشد
                </span>
              ) : null}

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
                onClick={() => {
                  setDisableNextButton(false);
                  setRoomCount((prev) => prev + 1);
                }}
                className="cursor-pointer text-2xl hover:text-gray-500"
              >
                +
              </p>
              <p className="text-sm">
                {roomCount == 0 ? "فاقد اتاق خواب" : roomCount + "   اتاق  "}
              </p>
              <p
                onClick={() => {
                  setDisableNextButton(false);
                  setRoomCount((prev) => prev == -1 && ((prev - 1) as any));
                }}
                className={`${roomCount == 0 && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between border-t border-gray-300 pb-20 pt-4 lg:!flex-row">
            <p className="mb-3">توضیحات فضای خواب</p>
            <div className="w-full lg:!w-1/2">
              <Textarea
                maxLength={250}
                setValue={setDescription}
                value={description}
                buttonDisableFun={() => setDisableNextButton(false)}
              />
              <span className="mt-3 text-xs text-[#5f738c]">
                در این قسمت می توانید توضیحات تکمیلی درباره امکانات و شرایط مهیا
                شده برای خواب میهمانان را ارائه کنید
              </span>
            </div>
          </div>
        </div>
        {!disableNextButton && (
          <Button
            onClick={submitHandler}
            variant="yellow"
            className={`mx-auto !mt-10 block w-max justify-center rounded-md px-4 py-2 transition-colors hover:opacity-75`}
          >
            ذخیره تغییرات
          </Button>
        )}
      </div>
      <div className="hidden md:block">
        <StepperInfo
          className="w-full max-w-[380px]"
          title="ظرفیت استاندارد / ظرفیت حداکثر"
          text="تعداد نفرات تعیین‌شده در ظرفیت استاندارد اقامتگاهمبنای محاسبه نرخ استاندارد اقامتگاه خواهد بود؛ هر تعداد میهمان بیش از ظرفیت استاندارد مشمول محاسبه «هزینه نفر اضافه» خواهد گردید.
          حداکثر ظرفیت، حداکثر گنجایش اقامتگاه می‌باشد که بر اساس فضا، امکانات موجود و امکانات خواب تعیین می‌گردد."
        />
      </div>
      {isPending && <Loader />}
    </section>
  );
};

export default Capacity;
