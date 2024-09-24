"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/components/layouts/stepLayout/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Accordion as AccordionParent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/shadcn/ui/accordion";
import { getFromLocalStorage } from "@/src/utils/utils";
import Loader from "@/src/components/modules/loader/Loader";
import useEditVilla from "@/src/hooks/useEditVilla";

interface priceDays {
  midWeek: string;
  holidays: string;
  peakDays: string;
}

interface userObjData {
  price: {
    newYear: string;
    spring: priceDays;
    summer: priceDays;
    autumn: priceDays;
    winter: priceDays;
  };
  step: 8;
  finished: false;
}

const page = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [newYearPrice, setNewYearPrice] = useState<string>("");
  const [seasonDatas, setSeasonDatas] = useState([
    {
      id: 1,
      Data: [
        { title: "وسط هفته", amount: "" },
        { title: "آخر هفته", amount: "" },
        { title: "تعطیلات", amount: "" },
      ],
    },
    {
      id: 2,
      Data: [
        { title: "وسط هفته", amount: "" },
        { title: "آخر هفته", amount: "" },
        { title: "تعطیلات", amount: "" },
      ],
    },
    {
      id: 3,
      Data: [
        { title: "وسط هفته", amount: "" },
        { title: "آخر هفته", amount: "" },
        { title: "تعطیلات", amount: "" },
      ],
    },
    {
      id: 4,
      Data: [
        { title: "وسط هفته", amount: "" },
        { title: "آخر هفته", amount: "" },
        { title: "تعطیلات", amount: "" },
      ],
    },
  ]);
  const villaId = getFromLocalStorage("villaId");
  const { mutate: mutation, isPending } = useEditVilla<userObjData>(
    "/newRoom/step8",
    "اطلاعات با موفقیت بروزرسانی شد",
    villaId,
  );

  const submitHandler = () => {
    const userData: userObjData = {
      price: {
        newYear: newYearPrice,
        spring: {
          midWeek: seasonDatas[0].Data[0].amount,
          holidays: seasonDatas[0].Data[1].amount,
          peakDays: seasonDatas[0].Data[2].amount,
        },
        summer: {
          midWeek: seasonDatas[1].Data[0].amount,
          holidays: seasonDatas[1].Data[1].amount,
          peakDays: seasonDatas[1].Data[2].amount,
        },
        autumn: {
          midWeek: seasonDatas[2].Data[0].amount,
          holidays: seasonDatas[2].Data[1].amount,
          peakDays: seasonDatas[2].Data[2].amount,
        },
        winter: {
          midWeek: seasonDatas[3].Data[0].amount,
          holidays: seasonDatas[3].Data[1].amount,
          peakDays: seasonDatas[3].Data[2].amount,
        },
      },
      step: 8,
      finished: false,
    };
    mutation(userData);
    setDisableNextButton(true);
  };

  const formatNumber = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const unformatNumber = (num: string) => {
    return num.replace(/,/g, "");
  };

  const newYearInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const unformattedValue = unformatNumber(inputValue);
    if (!isNaN(Number(unformattedValue))) {
      setNewYearPrice(unformattedValue);
    }
  };
  const changeInputHandler = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
    date: string,
  ) => {
    const inputValue = event.target.value;
    const unformattedValue = unformatNumber(inputValue);
    const formattedValue = formatNumber(unformattedValue);

    const updatedSeasonDatas = [...seasonDatas];
    const seasonIndex = id - 1;
    const dataIndex = updatedSeasonDatas[seasonIndex].Data.findIndex(
      (data) => data.title === date,
    );
    updatedSeasonDatas[seasonIndex].Data[dataIndex].amount = unformattedValue;
    setSeasonDatas(updatedSeasonDatas);
    event.target.value = formattedValue;
    validInputsHandler(updatedSeasonDatas);
  };

  const validInputsHandler = (updatedSeasonDatas: any) => {
    const isAnyInputEmpty = updatedSeasonDatas.some((season: any) =>
      season.Data.some((data: any) => data.amount.length === 0),
    );
    const isNewYearPriceEmpty = newYearPrice.length === 0;

    if (!isAnyInputEmpty && !isNewYearPriceEmpty) {
      setDisableNextButton(false);
    } else {
      setDisableNextButton(true);
    }
  };

  useEffect(() => {
    validInputsHandler(seasonDatas);
  }, [newYearPrice, seasonDatas]);

  const season = [
    {
      title: "فصل بهار",
      id: 1,
      avatar: " https://www.jajiga.com/static/img/pricing/spring.png",
    },
    {
      title: "فصل تابستان",
      id: 2,
      avatar: "https://www.jajiga.com/static/img/pricing/summer.png",
    },
    {
      title: "فصل پاییز",
      id: 3,
      avatar: "https://www.jajiga.com/static/img/pricing/autumn.png",
    },
    {
      title: "فصل زمستان",
      id: 4,
      avatar: "https://www.jajiga.com/static/img/pricing/winter.png",
    },
  ];

  return (
    <StepLayout stepperActive={7}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={7} />
        </div>
        <div className="mb-20 w-full space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm lg:!text-base">نرخ تعطیلات نوروز</p>
            <div className="relative w-1/2 lg:!w-[60%]">
              <input
                value={formatNumber(newYearPrice)}
                onChange={newYearInputChangeHandler}
                type="text"
                dir="ltr"
                className="w-full rounded-md border border-solid border-gray-400 p-2 pl-14"
              />
              <span className="absolute left-2 top-2 text-gray-500">تومان</span>
            </div>
          </div>
          {season &&
            season.map((data) => (
              <div className="py-2 pb-3" key={data.id}>
                <AccordionParent className={``} type="single" collapsible>
                  <AccordionItem value={`item-${data.id}`}>
                    <AccordionTrigger className="font-vazir text-sm !font-normal hover:no-underline">
                      <div>
                        <div className="flex items-center gap-3">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={data.avatar}
                            alt=""
                          />
                          <p className="font-vazir font-extrabold">
                            {data.title}
                          </p>
                        </div>
                        <p className="mb-3 mt-2 text-sm">
                          تکمیل قیمت‌های این فصل اجباری است
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-vazir text-sm font-light leading-6 text-[#404040]">
                      <div className="mb-5 flex flex-col items-start justify-between gap-2 lg:!mb-3 lg:!flex-row lg:!items-center lg:!gap-0">
                        <p className="text-sm lg:!text-base">وسط هفته</p>
                        <div className="relative w-full lg:!w-[60%]">
                          <input
                            value={formatNumber(
                              seasonDatas[data.id - 1].Data[0].amount,
                            )}
                            onChange={(event) =>
                              changeInputHandler(event, data.id, "وسط هفته")
                            }
                            type="text"
                            dir="ltr"
                            className="w-full border-b border-solid border-black p-2 pl-14"
                          />
                          <span className="absolute left-2 top-2 text-gray-500">
                            تومان
                          </span>
                        </div>
                      </div>
                      <div className="mb-5 flex flex-col items-start justify-between gap-2 lg:!mb-3 lg:!flex-row lg:!items-center lg:!gap-0">
                        <p className="text-sm lg:!text-base">آخر هفته</p>
                        <div className="relative w-full lg:!w-[60%]">
                          <input
                            value={formatNumber(
                              seasonDatas[data.id - 1].Data[1].amount,
                            )}
                            onChange={(event) =>
                              changeInputHandler(event, data.id, "آخر هفته")
                            }
                            type="text"
                            dir="ltr"
                            className="w-full border-b border-solid border-black p-2 pl-14"
                          />
                          <span className="absolute left-2 top-2 text-gray-500">
                            تومان
                          </span>
                        </div>
                      </div>
                      <div className="mb-5 flex flex-col items-start justify-between gap-2 lg:!mb-3 lg:!flex-row lg:!items-center lg:!gap-0">
                        <p className="text-sm lg:!text-base">تعطیلات</p>
                        <div className="relative w-full lg:!w-[60%]">
                          <input
                            value={formatNumber(
                              seasonDatas[data.id - 1].Data[2].amount,
                            )}
                            onChange={(event) =>
                              changeInputHandler(event, data.id, "تعطیلات")
                            }
                            type="text"
                            dir="ltr"
                            className="w-full border-b border-solid border-black p-2 pl-14"
                          />
                          <span className="absolute left-2 top-2 text-gray-500">
                            تومان
                          </span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionParent>
              </div>
            ))}

          <ContentNavigator
            clickHandler={submitHandler}
            disablelPrevButton={false}
            disableNextButton={disableNextButton}
            prevLink={"newRoom/step7"}
          />
        </div>
        <div className="max-w-[243px]">
          <StepperInfo
            title="تعیین اجاره بها"
            text="برای آسانتر شدن نرخ گذاری اقامتگاه در روزهای مختلف سال, پس از تعیین نرخهای زیر توسط شما, این نرخها با رعایت روزهای عادی و تعطیل هفته در فصول مختلف سال, بصورت خودکار در تقویم اقامتگاه شما اعمال خواهد گردید.وسط هفته: روزهای شنبه تا چهارشنبه هر هفته. آخر هفته: روزهای پنجشنبه و جمعه و تعطیلات عادی. ایام پیک: تعطیلات خاص و پر مسافر.توجه: شما همچنین می توانید با مراجعه به تقویم موجود در صفحه ویرایش اقامتگاه, اجاره بهای روزهای خاص را بصورت دستی تغییر دهید."
          />
        </div>
        {isPending && <Loader />}
      </div>
    </StepLayout>
  );
};

export default page;
