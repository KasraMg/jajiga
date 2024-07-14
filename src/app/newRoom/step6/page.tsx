"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/components/modules/stepLayout/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { getFromLocalStorage } from "@/src/utils/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loader from "@/src/components/modules/loader/Loader";
import useCustomQuery from "@/src/hooks/useCustomQuery";
interface userObjData {
  capacity: {};
  step: 5;
  finished: false;
}

const page = () => {
  const getItems = async () => {
    const data = await fetch("");
    const res = await data.json();
    return res;
  };
  const { data } = useCustomQuery(["step_6_items"], getItems);

  const informatin = [
    {
      title: "مبلمان",
      placeholder: "مثال: مبلمان راحتی برای 7 نفر",
    },
    {
      title: "یخچال",
      placeholder: "توضیحات یخچال  ",
    },
    {
      title: "تلویزیون",
      placeholder: " مثال: یک عدد تلویزیون فلت سامسونگ 48 اینچ ",
    },
    {
      title: "میز نهار خوری",
      placeholder: "مثال: میز نهارخوری برای 6 نفر و 6 عدد صندلی",
    },
    {
      title: "سیستم گرمایشی",
      placeholder: "مثال: سیستم پکیج / بخاری گازی",
    },
    {
      title: "سیستم سرمایش",
      placeholder: "مثال: اسپیلت 18 هزار",
    },
    {
      title: "پارکینگ",
      placeholder: "مثال:  پارکینگ روباز برای 3 عدد اتومبیل",
    },
    {
      title: "بیلیارد",
      placeholder: "توضیحات بیلیارد",
    },
    {
      title: " اینترنت wifi",
      placeholder: "مشخص نمایید: اینترنت کابلی / بی‌سیم-وای‌فای",
    },
    {
      title: "توالت فرنگی",
      placeholder: "توضیحات توالت فرنگی",
    },
    {
      title: "استخر",
      placeholder: "توضیحات استخر",
    },
  ];
  const sanitaryItems = [
    "تعویض روبالشتی و روتختی (برای هر میهمان جدید) ",
    "تعویض ملحفه (برای هر میهمان جدید)",
    "شارژ کاغذ توالت",
    "مایع ظرفشویی",
    "شارژ مایع دستشویی یا صابون",
    "مواد ضدعفونی کننده",
  ];

  const [disabelNextButton, setDisabelNextButton] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean[]>(
    new Array(informatin.length).fill(false),
  );
  const villaId = getFromLocalStorage("villaId");
  const accessToken = Cookies.get("AccessToken");
  const router = useRouter();

  useEffect(() => {}, []);
  const submitHandler = () => {
    const userData: userObjData = {
      capacity: {},
      step: 5,
      finished: false,
    };
    // mutation.mutate(userData);
  };
  return (
    <StepLayout stepperActive={6}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={6} />
        </div>
        <div className="w-full space-y-4">
          <p className="text-sm lg:!text-base">
            امکانات و تجهیزات موجود در اقامتگاه خود را مشخص کنید
          </p>
          {informatin.map((data, index) => (
            <div className="flex justify-between" key={index}>
              <div className="flex items-center gap-3">
                <input
                  onClick={() => {
                    const newShowInput = [...showInput];
                    newShowInput[index] = !newShowInput[index];
                    setShowInput(newShowInput);
                  }}
                  style={{ boxShadow: "none" }}
                  className="cursor-pointer rounded checked:bg-black"
                  type="checkbox"
                />
                <label className="text-xs lg:!text-sm">{data.title}</label>
              </div>
              {showInput[index] && (
                <input
                  placeholder={data.placeholder}
                  className="w-[65%] rounded-md p-2 text-sm placeholder:text-gray-500"
                  type="text"
                />
              )}
            </div>
          ))}
          <div className="flex items-center justify-between">
            <label className="text-sm">سایر امکانات</label>
            <input
              placeholder={"سایر امکانات"}
              className="w-[65%] rounded-md border border-solid border-gray-400 p-2 text-sm placeholder:text-gray-500"
              type="text"
            />
          </div>
          <p className="!mt-8 border-t border-solid border-gray-200 pt-5">
            اقلام بهداشتی
          </p>
          {sanitaryItems.map((data) => (
            <div className="flex items-center gap-3">
              <input
                style={{ boxShadow: "none" }}
                className="cursor-pointer rounded checked:bg-black"
                type="checkbox"
              />
              <label className="text-xs lg:!text-sm">{data}</label>
            </div>
          ))}
          <div className="!mb-16 flex items-center justify-between">
            <label className="text-sm">سایر موارد</label>
            <input
              placeholder={"سایر موارد"}
              className="w-[65%] rounded-md border border-solid border-gray-400 p-2 text-sm placeholder:text-gray-500"
              type="text"
            />
          </div>
          <ContentNavigator
            disablelPrevButton={false}
            disabelNextButton={disabelNextButton}
            clickHandler={submitHandler}
            prevLink={"newRoom/step5"}
          />
        </div>
        <div className="sticky top-[68px] hidden h-max max-w-[243px] md:!block">
          <StepperInfo
            className="!relative !top-0"
            title="امکانات اقامتگاه"
            text=" در این قسمت امکانات موجود در اقامتگاه را مشخص کنید. همچنین می توانید توضیحات تکمیلی هر گزینه را در کادر روبری آن وارد کنید. بعنوان مثال بعد از افزودن سیستم سرمایش, وارد کنید:  اسپیلت . در صورتی که بعضی از امکانات اقامتگاه خود را در لیست نیافتید, آن موارد را در کادر انتهای صفحه وارد کنید."
          />
          <StepperInfo
            className="!relative !top-0 mt-5"
            title="اقلام بهداشتی"
            text="‎‏تعویض و شارژ اقلام بهداشتی (شامل روبالشی, روتختی, ملحفه تمیز, کاغذ ‏توالت و صابون یا مایع دستشویی) موجب می شود تا میهمان شما احساس کند که در منزل خود حضور ‏دارد. این اقلام می باید پیش از ورود میهمان جدید تعویض یا شارژ شوند.‏"
          />
        </div>
      </div>
    </StepLayout>
  );
};

export default page;
