"use client";

import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  Accordion as AccordionParent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/shadcn/ui/accordion";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useEditVilla from "@/src/hooks/useEditVilla";
import { authStore } from "@/src/stores/auth";
import Loader from "@/src/components/modules/loader/Loader";
import { formatNumber } from "@/src/utils/utils";

interface userObjData {
  price: {};
  finished: true;
}

const Price = () => {
  const [disableNextButton, setDisableNextButton] = useState<boolean>(true);
  const [newYearPrice, setNewYearPrice] = useState<string>("");
  const params = useParams();
  const { userData } = authStore((state) => state);

  const villa = userData?.villas.find((villa) => villa._id === params.id);
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

  const { mutate: mutation, isPending } = useEditVilla<userObjData>(
    null,
    "اطلاعات با موفقیت بروزرسانی شد",
    params.id as any,
  );

  useEffect(() => {
    setNewYearPrice(villa?.price.newYear as any);
  }, [villa]);

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

  const unformatNumber = (num: string) => {
    return num.replace(/,/g, "");
  };

  const changeInputHandler = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
    date: string,
  ) => {
    setDisableNextButton(false);

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
  };

  const submitHandler = () => {
    const userData: userObjData = {
      price: {
        newYear: newYearPrice,
        spring: {
          midWeek: seasonDatas[0].Data[0].amount
            ? seasonDatas[0].Data[0].amount
            : villa?.price.spring.midWeek,
          holidays: seasonDatas[0].Data[1].amount
            ? seasonDatas[0].Data[1].amount
            : villa?.price.spring.holidays,
          peakDays: seasonDatas[0].Data[2].amount
            ? seasonDatas[0].Data[2].amount
            : villa?.price.spring.peakDays,
        },
        summer: {
          midWeek: seasonDatas[1].Data[0].amount
            ? seasonDatas[1].Data[0].amount
            : villa?.price.summer.midWeek,
          holidays: seasonDatas[1].Data[1].amount
            ? seasonDatas[1].Data[1].amount
            : villa?.price.summer.holidays,
          peakDays: seasonDatas[1].Data[2].amount
            ? seasonDatas[1].Data[2].amount
            : villa?.price.summer.peakDays,
        },
        autumn: {
          midWeek: seasonDatas[2].Data[0].amount
            ? seasonDatas[2].Data[0].amount
            : villa?.price.autumn.midWeek,
          holidays: seasonDatas[2].Data[1].amount
            ? seasonDatas[2].Data[1].amount
            : villa?.price.autumn.holidays,
          peakDays: seasonDatas[2].Data[2].amount
            ? seasonDatas[2].Data[2].amount
            : villa?.price.autumn.peakDays,
        },
        winter: {
          midWeek: seasonDatas[3].Data[0].amount
            ? seasonDatas[3].Data[0].amount
            : villa?.price.winter.midWeek,
          holidays: seasonDatas[3].Data[1].amount
            ? seasonDatas[3].Data[1].amount
            : villa?.price.winter.holidays,
          peakDays: seasonDatas[3].Data[2].amount
            ? seasonDatas[3].Data[2].amount
            : villa?.price.winter.peakDays,
        },
      },
      finished: true,
    };
    mutation(userData);
    setDisableNextButton(true);
  };

  const newYearInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDisableNextButton(false); 
    const inputValue = event.target.value; 
    const unformattedValue = unformatNumber(inputValue);
    if (!isNaN(Number(unformattedValue))) {
      setNewYearPrice(unformattedValue);
    }
  };
  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <p className="text-sm">
          <strong>نرخ اجاره بهای </strong>اقامتگاه را ابتدا به تفکیک روزهای
          مختلف هفته و فصول مختلف سال وارد کنید تا بصورت خودکار در تقویم سالیانه
          اقامتگاه اعمال شود .
        </p>
        <p className="my-4 text-xs text-red-600">
          وارد کردن همه فیلدا اجباری نیست
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm lg:!text-base">نرخ تعطیلات نوروز</p>
          <div className="relative w-1/2 lg:!w-[60%]">
            <input
              value={formatNumber(String(newYearPrice))}
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
            <div className="py-2 pb-3">
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
                    <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
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
                          placeholder="نرخ جدید را وارد کنید"
                          dir="ltr"
                          className="w-full border-b border-solid border-black p-2 pl-14 placeholder:text-right placeholder:text-xs placeholder:text-gray-600"
                        />
                        <span className="absolute left-2 top-2 text-gray-500">
                          تومان
                        </span>
                      </div>
                    </div>
                    <div className="my-4 flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
                      <p className="text-sm lg:!text-base">
                        آخر هفته و تعطیلات عادی
                      </p>
                      <div className="relative w-full lg:!w-[60%]">
                        <input
                          value={formatNumber(
                            seasonDatas[data.id - 1].Data[1].amount,
                          )}
                          onChange={(event) =>
                            changeInputHandler(event, data.id, "آخر هفته")
                          }
                          type="text"
                          placeholder="نرخ جدید را وارد کنید"
                          dir="ltr"
                          className="w-full border-b border-solid border-black p-2 pl-14 placeholder:text-right placeholder:text-xs placeholder:text-gray-600"
                        />
                        <span className="absolute left-2 top-2 text-gray-500">
                          تومان
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
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
                          placeholder="نرخ جدید را وارد کنید"
                          dir="ltr"
                          className="w-full border-b border-solid border-black p-2 pl-14 placeholder:text-right placeholder:text-xs placeholder:text-gray-600"
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

        {!disableNextButton && (
          <Button
            onClick={submitHandler}
            variant="yellow"
            className={`mx-auto !mt-0 block w-max justify-center rounded-md px-4 py-2 transition-colors hover:opacity-75`}
          >
            ذخیره تغییرات
          </Button>
        )}
      </div>
      <StepperInfo
        className="w-full max-w-[380px]"
        title="تعیین اجاره‌بها"
        text="برای آسان‌تر شدن نرخ‌گذاری اقامتگاه در روزهای مختلف سال، پس از تعیین نرخ‌های زیر توسط شما، این نرخ‌ها با رعایت روزهای عادی و تعطیل هفته در فصول مختلف سال، بصورت خودکار در تقویم اقامتگاه شما اعمال خواهد گردید.

        وسط هفته: روزهای شنبه تا چهارشنبه هر هفته.
        آخر هفته: روزهای پنج شنبه و جمعه و تعطیلات عادی.
        ایام پیک: تعطیلات خاص و پر مسافر.
        
        توجه: شما همچنین می‌توانید با مراجعه به بخش تقویم (موجود در صفحه ویرایش اقامتگاه)، اجاره‌بهای روزهای خاص را بصورت دستی تغییر دهید."
      />
      {isPending && <Loader />}
    </section>
  );
};

export default Price;
