"use client";

import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import Loader from "@/src/components/modules/loader/loader";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  Accordion as AccordionParent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/shadcn/ui/accordion";
import { usePrice } from "./hook";

const Price = () => {
  const {
    season,
    seasonDatas,
    newYearPrice,
    disableNextButton,
    isPending,
    submitHandler,
    changeInputHandler,
    newYearInputChangeHandler,
    formatNumber,
  } = usePrice();

  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <p className="text-sm">
          <strong>نرخ اجاره بهای </strong>
          اقامتگاه را ابتدا به تفکیک روزهای مختلف هفته و فصول مختلف سال وارد
          کنید تا بصورت خودکار در تقویم سالیانه اقامتگاه اعمال شود.
        </p>

        <p className="my-4 text-xs text-red-600">
          وارد کردن همه فیلدها اجباری نیست
        </p>

        <div className="flex items-center justify-between">
          <p className="text-sm lg:text-base">نرخ تعطیلات نوروز</p>

          <div className="relative w-1/2 lg:w-[60%]">
            <input
              value={formatNumber(String(newYearPrice))}
              onChange={newYearInputChangeHandler}
              type="text"
              dir="ltr"
              className="w-full rounded-md border border-gray-400 p-2 pl-14"
            />

            <span className="absolute left-2 top-2 text-gray-500">تومان</span>
          </div>
        </div>

        {season.map((item) => (
          <div key={item.id} className="py-2 pb-3">
            <AccordionParent type="single" collapsible>
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger className="font-vazir text-sm !font-normal hover:no-underline">
                  <div>
                    <div className="flex items-center gap-3">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={item.avatar}
                        alt={item.title}
                      />

                      <p className="font-vazir font-extrabold">{item.title}</p>
                    </div>

                    <p className="mb-3 mt-2 text-sm">
                      تکمیل قیمت‌های این فصل اجباری است
                    </p>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="font-vazir text-sm font-light leading-6 text-[#404040]">
                  {seasonDatas[item.id - 1].Data.map((price, index) => (
                    <div
                      key={price.title}
                      className={`flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center ${
                        index !== 2 ? "my-4" : ""
                      }`}
                    >
                      <p className="text-sm lg:text-base">
                        {price.title === "آخر هفته"
                          ? "آخر هفته و تعطیلات عادی"
                          : price.title}
                      </p>

                      <div className="relative w-full lg:w-[60%]">
                        <input
                          value={formatNumber(price.amount)}
                          onChange={(event) =>
                            changeInputHandler(event, item.id, price.title)
                          }
                          type="text"
                          dir="ltr"
                          placeholder="نرخ جدید را وارد کنید"
                          className="w-full border-b border-black p-2 pl-14 placeholder:text-right placeholder:text-xs placeholder:text-gray-600"
                        />

                        <span className="absolute left-2 top-2 text-gray-500">
                          تومان
                        </span>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </AccordionParent>
          </div>
        ))}

        {!disableNextButton && (
          <Button
            onClick={submitHandler}
            variant="yellow"
            className="mx-auto mt-4 block w-max justify-center rounded-md px-4 py-2 transition-colors hover:opacity-75"
          >
            ذخیره تغییرات
          </Button>
        )}
      </div>

      <StepperInfo
        className="w-full max-w-[380px]"
        title="تعیین اجاره‌بها"
        text={`برای آسان‌تر شدن نرخ‌گذاری اقامتگاه در روزهای مختلف سال، پس از تعیین نرخ‌های زیر توسط شما، این نرخ‌ها با رعایت روزهای عادی و تعطیل هفته در فصول مختلف سال، بصورت خودکار در تقویم اقامتگاه شما اعمال خواهد گردید.

وسط هفته: روزهای شنبه تا چهارشنبه هر هفته.
آخر هفته: روزهای پنج شنبه و جمعه و تعطیلات عادی.
ایام پیک: تعطیلات خاص و پر مسافر.

توجه: شما همچنین می‌توانید با مراجعه به بخش تقویم (موجود در صفحه ویرایش اقامتگاه)، اجاره‌بهای روزهای خاص را بصورت دستی تغییر دهید.`}
      />

      {isPending && <Loader />}
    </section>
  );
};

export default Price;
