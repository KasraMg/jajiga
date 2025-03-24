"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/layouts/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "@/src/utils/utils";
import Loader from "@/src/components/modules/loader/Loader";
import useEditVilla from "@/src/hooks/useEditVilla";

interface userObjData {
  capacity: {
    bedRoom: number;
    buildingSize: string;
    description?: string;
    fuundationSize: string;
    maxCapacity: number;
    normalCapacity: number;
  };
  step: 6;
  finished: false;
}

const page = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [standardSpace, setStandardSpace] = useState<number>(1);
  const [maximumSpace, setMaximumSpace] = useState<number>(1);
  const [landSize, setLandSize] = useState<string>("");
  const [areaSize, setAreaSize] = useState<string>("");
  const [roomCount, setRoomCount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const villaId = getFromLocalStorage("villaId");

  const { mutate: mutation, isPending } = useEditVilla<userObjData>(
    "/newRoom/step6",
    "اطلاعات با موفقیت بروزرسانی شد",
    villaId,
  );

  useEffect(() => {
    if (landSize.length && areaSize.length) {
      setDisableNextButton(false);
    } else {
      setDisableNextButton(true);
    }
  }, [landSize, areaSize]);

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

  const submitHandler = () => {
    
    const userData: userObjData = {
      capacity: {
        normalCapacity: standardSpace,
        maxCapacity: maximumSpace,
        buildingSize: landSize,
        fuundationSize: areaSize,
        bedRoom: roomCount,
        ...(description && { description: description }),
      },
      step: 6,
      finished: false,
    };
    console.log(userData);

    mutation(userData);
    setDisableNextButton(true);
  }; 

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
              {landSize < areaSize && (areaSize as any) > 9999 && (
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
                  setRoomCount((prev) => prev == 0 ? 0 : prev - 1)
                }
                className={`${roomCount == 0 && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
              >
                _
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pb-20 lg:!flex-row">
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
          <ContentNavigator
            clickHandler={submitHandler}
            disablelPrevButton={false}
            disableNextButton={disableNextButton}
            prevLink={"newRoom/step4"}
          />
        </div>
        <div className="sticky top-[68px] hidden h-max max-w-[243px] md:!block">
          <StepperInfo
            className="!relative !top-0"
            title="وسعت اقامتگاه"
            text="متراژ تقریبی زیربنا و همچنین متراژ کل اقامتگاه شامل محوطه و حیاط را در این قسمت وارد کنید."
          />
          <StepperInfo
            className="!relative !top-0 mt-5"
            title="ظرفیت استاندارد/ حداکثر ظرفیت"
            text="حداکثر ظرفیت حداکثر گنجایش اقامتگاه می‌باشد که بر اساس فضا, امکانات موجود و امکانات خواب تعیین می گردد"
          />
          <StepperInfo
            className="!relative !top-0 mt-5"
            title="امکانات خواب"
            text="  این قسمت, امکانات خواب اقامتگاه, همچون تعداد و نوع تخت خواب های موجود در هر اتاق خواب را مشخص کنید. تعداد و شرح   انواع رخت خواب, همچون رخت خواب سنتی (زمین خواب), مبل تخت خواب شو و غیرو ... را نیز در این قسمت وارد کنید"
          />
        </div>
        {isPending && <Loader />}
      </div>
    </StepLayout>
  );
};
 
export default page;
