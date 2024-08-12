"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  spaceOptions,
  typeOptions,
  areaOptions,
} from "@/src/utils/selectOptions";
import StepLayout from "@/src/components/layouts/stepLayout/StepLayout";
import { getFromLocalStorage } from "@/src/utils/utils";
import Loader from "@/src/components/modules/loader/Loader";
import useEditVilla from "@/src/hooks/useEditVilla";

interface userObjData {
  aboutVilla: {
    villaSpace: string | undefined;
    villaType: string | undefined;
    villaZone: string | undefined;
    aboutVilla: string | undefined;
  };
  step: 5;
  finished: false;
}

const page = () => {
  const [description, setDescription] = useState<string>("");
  const villaId = getFromLocalStorage("villaId");
  const { mutate: mutation, isPending } = useEditVilla<userObjData>(
    "/newRoom/step5",
    "اطلاعات با موفقیت بروزرسانی شد",
    villaId,
  );
  const [spaceSelectedOption, setSpaceSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [typeSelectedOption, setTypeSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [areaSelectedOption, setAreaSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [disableNextButton, setDisableNextButton] = useState(true);

  useEffect(() => {
    if (
      spaceSelectedOption &&
      typeSelectedOption &&
      areaSelectedOption &&
      description
    ) {
      setDisableNextButton(false);
    } else {
      setDisableNextButton(true);
    }
  }, [
    spaceSelectedOption,
    typeSelectedOption,
    areaSelectedOption,
    description,
  ]);
  const submitHandler = () => {
    const userData: userObjData = {
      aboutVilla: {
        villaSpace: spaceSelectedOption?.value,
        villaType: typeSelectedOption?.value,
        villaZone: areaSelectedOption?.value,
        aboutVilla: description,
      },
      finished: false,
      step: 5,
    };
    mutation(userData);
    setDisableNextButton(true);
  };

  return (
    <StepLayout stepperActive={4}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={4} />
        </div>
        <div className="w-full space-y-4">
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
            <p className="font-vazir min-w-[120px] text-sm font-light">
              فضای اقامتگاه
            </p>
            <Select
              defaultValue={spaceSelectedOption}
              onChange={setSpaceSelectedOption as any}
              isClearable={true}
              className="font-vazir w-full font-light md:w-[200px] lg:!w-full"
              isRtl={true}
              isSearchable={true}
              options={spaceOptions}
              placeholder={"فضای اقامتگاه خود را انتخاب کنید"}
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
            <p className="font-vazir min-w-[120px] text-sm font-light">
              نوع اقامتگاه
            </p>
            <Select
              defaultValue={typeSelectedOption}
              onChange={setTypeSelectedOption as any}
              isClearable={true}
              className="font-vazir w-full font-light md:w-[200px] lg:!w-full"
              isRtl={true}
              isSearchable={true}
              options={typeOptions}
              placeholder={"نوع اقامتگاه خود را انتخاب کنید"}
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
            <p className="font-vazir min-w-[120px] text-sm font-light">
              منطقه اقامتگاه
            </p>
            <Select
              defaultValue={areaSelectedOption}
              onChange={setAreaSelectedOption as any}
              isClearable={true}
              className="font-vazir w-full font-light md:w-[200px] lg:!w-full"
              isRtl={true}
              isSearchable={true}
              options={areaOptions}
              placeholder={"منطقه اقامتگاه خود را انتخاب کنید"}
            />
          </div>
          <div className="!mb-14 !mt-8 border-t border-solid border-gray-300 pt-5">
            <p className="mb-3 text-sm text-gray-500">درباره اقامتگاه</p>
            <Textarea
              maxLength={994}
              setValue={setDescription}
              value={description}
            />
            <p className="text-xs leading-5 text-gray-500">
              در اینجا نکاتی را که میهمان شما باید بداند بنویسید، از نقاط قوت و
              ضعف اقامتگاه، بعنوان مثال از تعداد زیاد پله ها که برای سالمندان
              مناسب نیست و ورودی تنگ پارکینگ، از چشم انداز زیبای منزل یا از
              جاذبه های گردشگری ‏اطراف همچون ساحل دریا/رودخانه/کوهستان/ اماکن
              تاریخی/بازار محلی بگویید و فاصله اقامتگاه از هر یک را بنویسید.
              وجود فروشگاههای مواد غذایی و نانوایی در مجاورت منزل خود را مشخص
              ‏کنید.‏‎ از حال و هوای محله و رفتار احتمالی همسایه ها بنویسید. هر
              آنچه میهمان شما لازم ااست بداند را اینجا بنویسید.‏‎
            </p>
          </div>
          <ContentNavigator
            clickHandler={submitHandler}
            disablelPrevButton={false}
            disableNextButton={disableNextButton}
            prevLink={"newRoom/step3"}
          />
        </div>
        <div className="sticky top-[68px] hidden h-max max-w-[243px] md:!block">
          <StepperInfo
            className="!relative !top-0"
            title="توضیحات   درباره اقامتگاه"
            text="بهتر است در توضیحات خود, به فراهم بودن امکانات ‏تفریحی همچون دوچرخه سواری, اسب سواری یا ماهی گیری و قایقرانی در مجاورت اقامتگاه خود اشاره کنید. همچنین نحوه و ‏فاصله دسترسی گردشگران به ‏تاکسی/اتوبوس/فرودگاه/قطار را در این قسمت مشخص نمایید تا میهمانان شما با اطلاع از شرایط زندگی در ‏محله شما و با خیالی آسوده, سفر خود را آغاز کنند.‏‎"
          />
        </div>
        {isPending && <Loader />}
      </div>
    </StepLayout>
  );
};

export default page;
