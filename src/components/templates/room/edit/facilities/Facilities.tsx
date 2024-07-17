"use client";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { Button } from "@/src/components/shadcn/ui/button";
import useCustomQuery from "@/src/hooks/useCustomQuery";
import { fetchStep6Items } from "@/src/utils/fetch";
import { useState } from "react";
const Facilities = () => {
  const { data, status } = useCustomQuery(["step_6_items"], fetchStep6Items);
  const [facilitySelected, setFacilitySelected] = useState<any[]>([]);
  const [moreFacility, setMoreFacility] = useState("");
  const [disabelNextButton, setDisabelNextButton] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean[]>(
    new Array(data?.facility.length).fill(false),
  );
  const inputChangeHandler = (value: string, itemTitle: string) => {
    const updatedFacilitySelected = facilitySelected.map((item) => {
      if (item.title === itemTitle) {
        return { ...item, description: value };
      }
      return item;
    });

    setFacilitySelected(updatedFacilitySelected);
  };
  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <div className="w-full space-y-4">
          <p className="text-sm font-thin lg:!text-base">
            در این بخش امکانات موجود در اقامتگاه خود را ویرایش کنید. همچنین
            می‌توانید برای هر یک در کادر مربوطه توضیحات تکمیلی بنویسید. امکاناتی
            که در لیست نیست را در کادر فراهم شده در انتهای لیست درج کنید.
          </p>
          {status === "success" &&
            data?.facility.map(
              (
                data: {
                  engTitle: string;
                  title: string;
                  id: string;
                  placeHolder: string;
                },
                index: number,
              ) => (
                <div className="flex justify-between" key={index}>
                  <div className="flex items-center gap-3">
                    <input
                      onClick={(event) => {
                        const newShowInput = [...showInput];
                        newShowInput[index] = !newShowInput[index];
                        setShowInput(newShowInput);

                        const updatedFacilitySelected = facilitySelected.map(
                          (item) => {
                            if (item.title === data.engTitle) {
                              return { ...item, status: event.target.checked };
                            }
                            return item;
                          },
                        );

                        setFacilitySelected(updatedFacilitySelected);
                      }}
                      style={{ boxShadow: "none" }}
                      className="cursor-pointer rounded checked:bg-black"
                      type="checkbox"
                    />
                    <label className="text-xs lg:!text-sm">{data.title}</label>
                  </div>
                  {showInput[index] && (
                    <input
                      placeholder={data.placeHolder}
                      onChange={(event) =>
                        inputChangeHandler(event.target.value, data.engTitle)
                      }
                      className="w-[65%] rounded-md border border-solid p-2 text-sm font-thin placeholder:text-xs placeholder:text-gray-500"
                      type="text"
                    />
                  )}
                </div>
              ),
            )}
          <div className="flex items-center justify-between">
            <label className="text-sm">سایر امکانات</label>
            <input
              placeholder={"سایر امکانات"}
              value={moreFacility}
              onChange={(event) => setMoreFacility(event.target.value)}
              className="w-[65%] rounded-md border border-solid border-gray-400 p-2 text-sm placeholder:text-gray-500"
              type="text"
            />
          </div>
        </div>
      </div>
      <StepperInfo
        className="w-full max-w-[380px]"
        title="امکانات اقامتگاه"
        text={`در این قسمت امکانات موجود در اقامتگاه را مشخص کنید. همچنین می‌توانید توضیحات تکمیلی هر گزینه را در کادر روبری آن ‏وارد کنید.
          بعنوان مثال بعد از افزودن «سیستم سرمایش»، وارد کنید: "دو عدد اسپیلت 18 هزار یکی در سالن و دیگری در اتاق خواب".
          ‎در صورتی که بعضی از امکانات اقامتگاه خود را در لیست نیافتید، آن موارد را ‏در کادر انتهای صفحه وارد کنید.`}
      />
    </section>
  );
};

export default Facilities;
