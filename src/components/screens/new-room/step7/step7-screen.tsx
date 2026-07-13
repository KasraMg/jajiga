"use client";
import ContentNavigator from "@/src/components/modules/content-navigator/content-navigator";
import StepLayout from "@/src/components/modules/new-Room-stepper/step-layout";
import Stepper from "@/src/components/modules/stepper/stepper";
import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import {
  Accordion as AccordionParent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/shadcn/ui/accordion";
import { useStep7 } from "./hook";

const Step7Screen = () => {
  const {
    season,
    seasonDatas,
    newYearPrice,
    disableNextButton,
    formatNumber,
    newYearInputChangeHandler,
    changeInputHandler,
    submitHandler,
    isPending,
  } = useStep7();

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
            isPending={isPending}
            prevLink={"new-room/step6"}
          />
        </div>
        <div className="max-w-[243px]">
          <StepperInfo
            title="تعیین اجاره بها"
            text="برای آسانتر شدن نرخ گذاری اقامتگاه در روزهای مختلف سال, پس از تعیین نرخهای زیر توسط شما, این نرخها با رعایت روزهای عادی و تعطیل هفته در فصول مختلف سال, بصورت خودکار در تقویم اقامتگاه شما اعمال خواهد گردید.وسط هفته: روزهای شنبه تا چهارشنبه هر هفته. آخر هفته: روزهای پنجشنبه و جمعه و تعطیلات عادی. ایام پیک: تعطیلات خاص و پر مسافر.توجه: شما همچنین می توانید با مراجعه به تقویم موجود در صفحه ویرایش اقامتگاه, اجاره بهای روزهای خاص را بصورت دستی تغییر دهید."
          />
        </div>
      </div>
    </StepLayout>
  );
};

export default Step7Screen;
