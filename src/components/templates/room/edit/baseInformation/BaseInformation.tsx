"use client";
import { Map } from "@/src/components/modules/Map/Map";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { Alert } from "@/src/components/shadcn/ui/alert";
import useStateData from "@/src/hooks/useStateData";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { BsInfoCircle } from "react-icons/bs";
import { authStore } from "@/src/stores/auth";
import { useParams } from "next/navigation";
import { Button } from "@/src/components/shadcn/ui/button";
import useEditVilla from "@/src/hooks/useEditVilla";
import Loader from "@/src/components/modules/loader/Loader";

interface userObjData {
  address: {
    state: string | undefined;
    city: string[] | undefined;
    address: string;
  };
  coordinates: {
    x: string;
    y: string;
  };
  aboutVilla: {};
  step: 9;
  finished: true;
}

const BaseInformation = () => {
  let coordinates: { x: string; y: string };
  const { userData } = authStore((state) => state);
  const params = useParams();

  const { mutate: mutation, isPending } = useEditVilla<userObjData>(
    null,
    "اطلاعات با موفقیت بروزرسانی شد",
    params.id as any,
  );

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  const [address, setAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [disableNextButton, setDisableNextButton] = useState<boolean>(true);

  const [stateSelectedOption, setStateSelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);

  const [citySelectedOption, setCitySelectedOption] = useState<
    { label: string; value: string }[] | null
  >([]);

  const [userSelectState, setUserSelectState] = useState<any>(null);
  const [userSelectCity, setUserSelectCity] = useState<any>(null);

  const stateOptions = useStateData();
  const mapChangeHandler = (x: string, y: string) => {
    setDisableNextButton(false);
    coordinates = {
      x: `${x}`,
      y: `${y}`,
    };
  };
  const submitHandler = () => {
    console.log(coordinates);
    if (!coordinates) {
      coordinates = { x: villa?.coordinates.x, y: villa?.coordinates.y } as any;
    }
    const data: userObjData = {
      address: {
        state: userSelectState?.label,
        city: userSelectCity?.label,
        address,
      },
      coordinates,
      aboutVilla: {
        villaSpace: villa?.aboutVilla.villaSpace,
        villaType: villa?.aboutVilla.villaType,
        villaZone: villa?.aboutVilla.villaZone,
        aboutVilla: description,
      },
      step: 9,
      finished: true,
    };
    mutation(data);
     setDisableNextButton(true);
  };

  useEffect(() => {
    setAddress(villa?.address.address || "");
    setDescription(villa?.aboutVilla.aboutVilla || "");

    const userSelectState = stateOptions.find(
      (state) => state.label === villa?.address.state,
    );
    const prevStateOption = stateOptions.filter(
      (state) => state.label !== villa?.address.state,
    );
    setUserSelectState(userSelectState);
    setStateSelectedOption([userSelectState, ...prevStateOption] as any);

    const prevCityOption = userSelectState?.value.filter(
      (city) => city !== villa?.address.city,
    );

    const newCity = Array.isArray(prevCityOption)
      ? prevCityOption.map((data) => ({
          value: data,
          label: data,
        }))
      : [];

    setCitySelectedOption([
      { value: villa?.address.city, label: villa?.address.city },
      ...newCity,
    ] as any);
    console.log(villa);
  }, [villa]);

  useEffect(() => {
    if (userSelectState?.value) {
      const city: any = userSelectState?.value.map((data: any) => {
        return {
          value: data,
          label: data,
        };
      });
      setCitySelectedOption(city);
    }
  }, [userSelectState]);
  const handleTextareaChange = () => {
    setDisableNextButton(false);
  };
  

  
  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="space-y-4 font-thin text-gray-700">
        <div>
          <p className="mb-3 text-sm text-black">درباره اقامتگاه</p>
          <Textarea
            maxLength={994}
            setValue={setDescription}
            value={description}  
            buttonDisableFun={handleTextareaChange}
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
          {userSelectState && (
            <Select
              defaultValue={userSelectState}
              onChange={(selectedOption) => {
                setUserSelectState(selectedOption);
                setDisableNextButton(false);
              }}
              isClearable={true}
              className="w-full  lg:!w-full"
              isRtl={true}
              isSearchable={true}
              options={stateSelectedOption as any}
              placeholder={"استان خود را انتخاب کنید"}
            />
          )}
        </div>
        <div className="mt-2 flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
          <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
            انتخاب شهر:
          </p>
          {citySelectedOption && (
            <Select
              onChange={(selectedOption) => {
                setUserSelectCity(selectedOption);
                setDisableNextButton(false);
              }}
              isClearable={true}
              className="w-full  xl:!w-full"
              isRtl={true}
              isSearchable={true}
              options={citySelectedOption}
              placeholder={"شهر خود را انتخاب کنید"}
            />
          )}
        </div>
        <div className="mb-20 flex flex-col justify-between md:!mb-4 md:flex-row">
          <p className="min-w-[150px] md:mb-0 mb-3 whitespace-nowrap text-sm text-[#252a31]">
            آدرس دقیق:
          </p>
          <div className="w-full">
            <Textarea
              className="h-[104px]"
              maxLength={250}
              setValue={setAddress}
              buttonDisableFun={handleTextareaChange} 
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
          {villa && (
            <Map
              className="z-10"
              mapChangeHandler={mapChangeHandler}
              position={[villa.coordinates.x, villa.coordinates.y]}
            />
          )}
          <p className="font-vazir text-sm font-light leading-6">
            مکان نما در وسط صفحه ثابت است. نقشه را به گونه ای حرکت دهیه تا مکان
            نما بر روی مکان اقامتگاه شما قرار گیرد. با استفاده از کلید + بر روی
            نقشه زوم کنید.
          </p>
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
      <div className="w-full max-w-[380px] hidden md:block">
        <StepperInfo
          className="!relative !top-0 w-full max-w-[380px]"
          title="توضیحات تکمیلی درباره اقامتگاه"
          text="هیچکس به اندازه شما از زیروبم اقامتگاه متعلق به شما باخبر نیست؛ پس با نوشتن اطلاعات تکمیلی درباره اقامتگاه خود به مهمانان کمک کنید تا انتخاب صحیح و مناسبی داشته باشند. انتقال اطلاعات غلط یا عدم انتقال اطلاعات صحیح و کامل، باعث وقوع رزرو غلط و دردسرهای بی‌شمار برای مهمان و همینطور شما خواهد گردید.‏ ‎"
        />
        <StepperInfo
          className="!relative !top-0 mt-4 w-full max-w-[380px]"
          title="آدرس اقامتگاه"
          text="آدرس و مکان دقیق محرمانه است.
        آدرس و مکان دقیق بر روی نقشه تنها پس از قطعی‌شدن رزرو برای میهمان قابل مشاهده خواهد شد.
        
        با حرکت مکان‌نما و جابجاشدن بر روی نقشه، مکان‌نما را بر روی محل اقامتگاه خود قرار دهید.
        مکان‌نما را بر روی محل اقامتگاه قرار دهید همچنین می‌توانید با استفاده از کلیدهای + و -بزرگنمایی نقشه را تغییر دهید."
        />
      </div>
      {isPending && <Loader />}
    </section>
  );
};

export default BaseInformation;
