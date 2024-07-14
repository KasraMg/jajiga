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
import StepLayout from "@/src/components/modules/stepLayout/StepLayout";
import { useRouter } from "next/navigation";
import { baseUrl, getFromLocalStorage } from "@/src/utils/utils";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import Loader from "@/src/components/modules/loader/Loader";
import { useToast } from "@/src/components/shadcn/ui/use-toast";

interface userObjData {
  aboutVilla: {};
  step: 5;
  finished: false;
}

const page = () => {
  const [description, setDescription] = useState<string>("");
  const { toast } = useToast();

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
  const [disabelNextButton, setDisabelNextButton] = useState<boolean>(true);

  useEffect(() => {
    if (
      spaceSelectedOption &&
      typeSelectedOption &&
      areaSelectedOption &&
      description
    ) {
      setDisabelNextButton(false);
    } else {
      setDisabelNextButton(true);
    }
  }, [
    spaceSelectedOption,
    typeSelectedOption,
    areaSelectedOption,
    description,
  ]);

  const accessToken = Cookies.get("AccessToken");
  const villaId = getFromLocalStorage("villaId");
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (userData: userObjData) => {
      return await fetch(`${baseUrl}/villa/update/${villaId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify(userData),
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        toast({
          variant: "success",
          title: "ویلا ساخته و اطلاعات ابتدایی با موفقیت بروزرسانی شد",
        });
        router.replace("/newRoom/step5");
      }
    },
  });

  const submitHandler = () => {
    const userData: userObjData = {
      aboutVilla: {
        villaSpace: spaceSelectedOption?.value,
        villaType: '668af68875bf5b2709d6d6f0',
        // villaType: typeSelectedOption?.value,
        villaZone: areaSelectedOption?.value,
        aboutVilla: description,
      },
      finished: false,
      step: 5,
    }; 
    mutation.mutate(userData);
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
            disabelNextButton={disabelNextButton}
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
        {mutation.isPending && <Loader />}

      </div>
    </StepLayout>
  );
};

export default page;
