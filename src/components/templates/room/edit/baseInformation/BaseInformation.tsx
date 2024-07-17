"use client";
import { Map } from "@/src/components/modules/Map/Map";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { Alert } from "@/src/components/shadcn/ui/alert";
import { Button } from "@/src/components/shadcn/ui/button";
import useStateData from "@/src/hooks/useStateData";
import React, { useState } from "react";
import Select from "react-select";
import { BsInfoCircle } from "react-icons/bs";

const BaseInformation = () => {
  let coordinates;
  const [address, setAddress] = useState<string>("");
  const stateOptions = useStateData();
  const mapChangeHandler = (x: string, y: string) => {
    coordinates = {
      x: `${x}`,
      y: `${y}`,
    };
  };
  const [stateSelectedOption, setStateSelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);
  const [citySelectedOption, setCitySelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);
  const [cityOption, setCityOption] = useState<
    { label: string; value: string[] }[]
  >([]);
  const [citySelectorDisabel, setcitySelectorDisabel] = useState(true);
  const [description, setDescription] = useState<string>("");

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
            اقامتگاه و شیوه ‏دسترسی گردشگران به آنها شرح دهید. وجود فروشگاههای
            مواد غذایی و بهداشتی و نانوایی در مجاورت منزل خود را مشخص ‏کنید.‏‎
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
          <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
            انتخاب استان:
          </p>
          <Select
            defaultValue={stateSelectedOption}
            onChange={setStateSelectedOption as any}
            isClearable={true}
            className="w-full md:w-[200px] lg:!w-full"
            isRtl={true}
            isSearchable={true}
            options={stateOptions}
            placeholder={"استان خود را انتخاب کنید"}
          />
        </div>
        <div className="mt-2 flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
          <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
            انتخاب شهر:
          </p>
          <Select
            defaultValue={citySelectedOption}
            onChange={setCitySelectedOption as any}
            isDisabled={citySelectorDisabel}
            isClearable={true}
            className="w-full md:w-[200px] lg:!w-full"
            isRtl={true}
            isSearchable={true}
            value={citySelectedOption}
            options={cityOption}
            placeholder={"شهر خود را انتخاب کنید"}
          />
        </div>
        <div className="mb-20 flex flex-col justify-between md:!mb-4 md:flex-row">
          <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
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
            variant={"danger"}
            className="flex flex-row-reverse gap-2 text-sm"
            title="موقعیت مکانی (لوکیشن) را به دقت مشخص کنید."
          >
            <div>
              <p>موقعیت مکانی (لوکیشن) را به دقت مشخص کنید.</p>
              <p className="font-vazir my-2 font-light leading-6">
                لوکیشن ثبت شده برای مسیریابی به مهمانان ارسال می‌شود. طبق ضمانت
                تحویل جاجیگا، هرگونه مغایرت می‌تواند باعث لغو رزرو و عودت وجه به
                مهمان شود.
              </p>
            </div>
            <BsInfoCircle className="text-2xl" />
          </Alert>
          <p className="text-black">مکان اقامتگاه بر روی نقشه</p>
          <Map
            className="z-10"
            mapChangeHandler={mapChangeHandler}
            position={[35.551066, 51.297588]}
          />
          <p className="font-vazir text-sm font-light leading-6">
            مکان نما در وسط صفحه ثابت است. نقشه را به گونه ای حرکت دهیه تا مکان
            نما بر روی مکان اقامتگاه شما قرار گیرد. با استفاده از کلید + بر روی
            نقشه زوم کنید.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[380px]"> 
        <StepperInfo
          className="w-full max-w-[380px] !relative !top-0"
          title="توضیحات تکمیلی درباره اقامتگاه"
          text="هیچکس به اندازه شما از زیروبم اقامتگاه متعلق به شما باخبر نیست؛ پس با نوشتن اطلاعات تکمیلی درباره اقامتگاه خود به مهمانان کمک کنید تا انتخاب صحیح و مناسبی داشته باشند. انتقال اطلاعات غلط یا عدم انتقال اطلاعات صحیح و کامل، باعث وقوع رزرو غلط و دردسرهای بی‌شمار برای مهمان و همینطور شما خواهد گردید.‏ ‎"
        />
        <StepperInfo
          className="mt-4 w-full max-w-[380px] !relative !top-0"
          title="آدرس اقامتگاه"
          text="آدرس و مکان دقیق محرمانه است.
        آدرس و مکان دقیق بر روی نقشه تنها پس از قطعی‌شدن رزرو برای میهمان قابل مشاهده خواهد شد.
        
        با حرکت مکان‌نما و جابجاشدن بر روی نقشه، مکان‌نما را بر روی محل اقامتگاه خود قرار دهید.
        مکان‌نما را بر روی محل اقامتگاه قرار دهید همچنین می‌توانید با استفاده از کلیدهای + و -بزرگنمایی نقشه را تغییر دهید."
        />
      </div>
    </section>
  );
};

export default BaseInformation;
