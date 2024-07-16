"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/components/modules/stepLayout/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Accordion as AccordionParent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/shadcn/ui/accordion";
import { baseUrl, getFromLocalStorage } from "@/src/utils/utils";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Loader from "@/src/components/modules/loader/Loader";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { useMutation } from "@tanstack/react-query";

interface userObjData {
  price: {};
  step: 8;
  finished: false;
}

const page = () => {
  const [disableNextButton, setDisableNextButton] = useState<boolean>(true);
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
  const accessToken = Cookies.get("AccessToken");
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: userObjData) => {
      return await fetch(`${baseUrl}/villa/update/${villaId}`, { 
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
    onSuccess: (data:any) => {
      if (data.status === 200) {
        toast({
          variant: "success",
          title: "اطلاعات با موفقیت بروزرسانی شد",
        });
        router.replace("/newRoom/step8");
      }
    },
  });

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
    console.log(userData);
    mutation.mutate(userData);
  };

  const changeInputHandler = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
    date: string,
  ) => {
    const updatedSeasonDatas = [...seasonDatas];
    const seasonIndex = id - 1;
    const dataIndex = updatedSeasonDatas[seasonIndex].Data.findIndex(
      (data) => data.title === date,
    );
    updatedSeasonDatas[seasonIndex].Data[dataIndex].amount = event.target.value;
    setSeasonDatas(updatedSeasonDatas);
    validInputsHandler(updatedSeasonDatas);
  };

  const validInputsHandler = (updatedSeasonDatas: any) => {
    const isAnyInputEmpty = updatedSeasonDatas.some((season:any) =>
      season.Data.some((data:any) => data.amount.length === 0),
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
    <StepLayout stepperActive={8}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={8} />
        </div>
        <div className="mb-20 w-full space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm lg:!text-base">نرخ تعطیلات نوروز</p>
            <div className="relative w-1/2 lg:!w-[60%]">
              <input
                onChange={(event) => setNewYearPrice(event.target.value)}
                type="number"
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
                            onChange={(event) =>
                              changeInputHandler(event, data.id, "وسط هفته")
                            }
                            type="number"
                            dir="ltr"
                            className="w-full border-b border-solid border-black p-2 pl-14"
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
                            onChange={(event) =>
                              changeInputHandler(event, data.id, "آخر هفته")
                            }
                            type="number"
                            dir="ltr"
                            className="w-full border-b border-solid border-black p-2 pl-14"
                          />
                          <span className="absolute left-2 top-2 text-gray-500">
                            تومان
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
                        <p className="text-sm lg:!text-base">ایام پیک</p>
                        <div className="relative w-full lg:!w-[60%]">
                          <input
                            onChange={(event) =>
                              changeInputHandler(event, data.id, "تعطیلات")
                            }
                            type="number"
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
            disabelNextButton={disableNextButton}
            prevLink={"newRoom/step7"}
          />
        </div>
        <div className="max-w-[243px]">
          <StepperInfo
            title="تعیین اجاره بها"
            text="برای آسانتر شدن نرخ گذاری اقامتگاه در روزهای مختلف سال, پس از تعیین نرخهای زیر توسط شما, این نرخها با رعایت روزهای عادی و تعطیل هفته در فصول مختلف سال, بصورت خودکار در تقویم اقامتگاه شما اعمال خواهد گردید.وسط هفته: روزهای شنبه تا چهارشنبه هر هفته. آخر هفته: روزهای پنجشنبه و جمعه و تعطیلات عادی. ایام پیک: تعطیلات خاص و پر مسافر.توجه: شما همچنین می توانید با مراجعه به تقویم موجود در صفحه ویرایش اقامتگاه, اجاره بهای روزهای خاص را بصورت دستی تغییر دهید."
          />
        </div>
        {mutation.isPending && <Loader />} 
      </div>
    </StepLayout>
  );
};

export default page;
