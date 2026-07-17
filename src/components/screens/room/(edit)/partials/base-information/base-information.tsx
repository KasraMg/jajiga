"use client";

import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import Textarea from "@/src/components/modules/textarea/textarea";
import { Alert } from "@/src/components/shadcn/ui/alert";
import { Button } from "@/src/components/shadcn/ui/button";
import Loader from "@/src/components/modules/loader/loader";
import dynamic from "next/dynamic";
import Select from "react-select";
import { BsInfoCircle } from "react-icons/bs";
import { useBaseInformation } from "./hook";

const Map = dynamic(
  () => import("@/src/components/modules/map/map").then((mod) => mod.Map),
  {
    ssr: false,
  },
);

const BaseInformation = () => {
  const {
    villa,

    address,
    setAddress,

    description,
    setDescription,

    stateSelectedOption,
    citySelectedOption,

    userSelectState,
    setUserSelectState,
 
    setUserSelectCity,

    disableNextButton,

    mapChangeHandler,

    submitHandler,

    isPending,
  } = useBaseInformation();

  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="space-y-4 font-thin text-gray-700">
        <div>
          <p className="mb-3 text-sm text-black">درباره اقامتگاه</p>

          <Textarea
            maxLength={994}
            setValue={setDescription}
            value={description}
          />

          <p className="text-xs leading-5 text-gray-500">
            جاذبه های گردشگری ‏اطراف اقامتگاه خود همچون ساحل
            دریا/رودخانه/کوهستان/ اماکن تاریخی/بازار محلی را با ذکر فاصله از
            اقامتگاه و شیوه ‏دسترسی گردشگران به آنها شرح دهید.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
          <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
            انتخاب استان:
          </p>

          {userSelectState && (
            <Select
              defaultValue={userSelectState}
              onChange={(option) => {
                setUserSelectState(option);
              }}
              isClearable
              className="w-full lg:!w-full"
              isRtl
              isSearchable
              options={stateSelectedOption}
              placeholder="استان خود را انتخاب کنید"
            />
          )}
        </div>

        <div className="mt-2 flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
          <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
            انتخاب شهر:
          </p>

          {citySelectedOption && (
            <Select
              onChange={(option) => {
                setUserSelectCity(option);
              }}
              isClearable
              className="w-full xl:!w-full"
              isRtl
              isSearchable
              options={citySelectedOption}
              placeholder="شهر خود را انتخاب کنید"
            />
          )}
        </div>

        <div className="mb-20 flex flex-col justify-between md:!mb-4 md:flex-row">
          <p className="mb-3 min-w-[150px] whitespace-nowrap text-sm text-[#252a31] md:mb-0">
            آدرس دقیق:
          </p>

          <div className="w-full">
            <Textarea
              className="h-[104px]"
              maxLength={250}
              setValue={setAddress}
              value={address}
            />

            <span className="mt-3 text-xs text-[#5f738c]">
              آدرس اقامتگاه را با جزییات کامل وارد کنید تا میهمان پس از رزرو به
              راحتی بتوانند اقامتگاه را پیدا کنند.
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <Alert
            variant="danger"
            className="flex flex-row-reverse gap-2 text-sm"
            title="موقعیت مکانی (لوکیشن) را به دقت مشخص کنید."
          >
            <div>
              <p>موقعیت مکانی (لوکیشن) را به دقت مشخص کنید.</p>

              <p className=" my-2 font-light leading-6">
                لوکیشن ثبت شده برای مسیریابی به مهمانان ارسال می‌شود.
              </p>
            </div>

            <BsInfoCircle className="text-2xl" />
          </Alert>

          <p className="text-black">مکان اقامتگاه بر روی نقشه</p>

          {villa && (
            <Map
              className="z-10"
              mapChangeHandler={mapChangeHandler}
              position={[villa.coordinates.x, villa.coordinates.y]}
            />
          )}

          <p className=" text-sm font-light leading-6">
            مکان نما در وسط صفحه ثابت است. نقشه را به گونه ای حرکت دهید تا مکان
            نما بر روی مکان اقامتگاه شما قرار گیرد.
          </p>
        </div>

        {!disableNextButton && (
          <Button
            onClick={submitHandler}
            variant="yellow"
            className="mx-auto !mt-10 block w-max justify-center rounded-md px-4 py-2 transition-colors hover:opacity-75"
          >
            ذخیره تغییرات
          </Button>
        )}
      </div>

      <div className="hidden w-full max-w-[380px] md:block">
        <StepperInfo
          className="!relative !top-0 w-full max-w-[380px]"
          title="توضیحات تکمیلی درباره اقامتگاه"
          text="هیچکس به اندازه شما از زیروبم اقامتگاه متعلق به شما باخبر نیست؛ پس با نوشتن اطلاعات تکمیلی درباره اقامتگاه خود به مهمانان کمک کنید."
        />

        <StepperInfo
          className="!relative !top-0 mt-4 w-full max-w-[380px]"
          title="آدرس اقامتگاه"
          text="آدرس و مکان دقیق محرمانه است و تنها پس از قطعی شدن رزرو برای مهمان قابل مشاهده خواهد بود."
        />
      </div>

      {isPending && <Loader />}
    </section>
  );
};

export default BaseInformation;
