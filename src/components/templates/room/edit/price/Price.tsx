import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  Accordion as AccordionParent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/shadcn/ui/accordion";
const Price = () => {
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
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <p className="text-sm">
          <strong>نرخ اجاره بهای </strong>اقامتگاه را ابتدا به تفکیک روزهای
          مختلف هفته و فصول مختلف سال وارد کنید تا بصورت خودکار در تقویم سالیانه
          اقامتگاه اعمال شود .
        </p>

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
                      وسط هفته 33 | آخر هفته 33 |  پیک 33
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-vazir text-sm font-light leading-6 text-[#404040]">
                    <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
                      <p className="text-sm lg:!text-base">وسط هفته</p>
                      <div className="relative w-full lg:!w-[60%]">
                        <input
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
    </section>
  );
};

export default Price;
