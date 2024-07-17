import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { Button } from "@/src/components/shadcn/ui/button";
const Rules = () => {
  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <strong className="text-sm font-extrabold">مقررات اقامتگاه :</strong>
        <div className="w-full space-y-5">
          <div>
            <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
              <p className="text-sm">همراه داشتن حیوان خانگی</p>

              <div className="mb-4 grid w-full grid-cols-2 gap-2 rounded-[32px] bg-gray-200 p-1 lg:!mb-0 lg:!max-w-[8rem]">
                <div>
                  <input
                    type="radio"
                    name="animall"
                    id="7"
                    value="7"
                    className="peer hidden" 
                  />
                  <label
                    htmlFor={"7"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    مجاز
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="animall"
                    id="8"
                    value="8"
                    className="peer hidden" 
                  />
                  <label
                    htmlFor={"8"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    ممنوع
                  </label>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400">توضیحات:</p>
            <p className="text-xs text-gray-400">
              ورود حیوان خانگی (سگ، گربه، ...) به شرط رعایت کامل نظافت مجاز است.
              در داخل ساختمان حیوان باید در باکس مخصوص نگهداری شود.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
              <p className="text-sm">برگزاری جشن و پخش موزیک</p>

              <div className="mb-4 grid w-full grid-cols-2 gap-2 rounded-[32px] bg-gray-200 p-1 lg:!mb-0 lg:!max-w-[8rem]">
                <div>
                  <input
                    type="radio"
                    name="music"
                    id="3"
                    value="1"
                    className="peer hidden" 
                  />
                  <label
                    htmlFor={"3"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    مجاز
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="music"
                    id="4"
                    value="2"
                    className="peer hidden" 
                  />
                  <label
                    htmlFor={"4"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    ممنوع
                  </label>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400">توضیحات:</p>
            <p className="text-xs text-gray-400">
              {" "}
              برگزاری جشن کوچک با هماهنگی میزبان امکانپذیر است.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-start justify-between gap-2 lg:!flex-row lg:!items-center lg:!gap-0">
              <p className="text-sm">
                استعمال دخانیات (سیگار، قلیان و ...) در فضای داخلی ساختمان
              </p>

              <div className="mb-4 grid w-full grid-cols-2 gap-2 rounded-[32px] bg-gray-200 p-1 lg:!mb-0 lg:!max-w-[8rem]">
                <div>
                  <input
                    type="radio"
                    name="smoke"
                    id="5"
                    value="1"
                    className="peer hidden" 
                  />
                  <label
                    htmlFor={"5"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    مجاز
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="smoke"
                    id="6"
                    value="2"
                    className="peer hidden" 
                  />
                  <label
                    htmlFor={"6"}
                    className="block cursor-pointer select-none rounded-[50px] px-2 py-[6px] text-center peer-checked:bg-customYellow peer-checked:text-black"
                  >
                    ممنوع
                  </label>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div>

      <StepperInfo
        className="w-full max-w-[380px] !relative !top-0"
        title="مقررات لغو رزرو اقامتگاه"
        text="در این قسمت میزبان تعیین می‌کند درصورتی که میهمان، رزرو قطعی‌شده خود را لغو کند، چه عواقبی برای او (میهمان) به همراه خواهد داشت.
        
        «سیاست لغو رزرو» هر اقامتگاه در «نمایه» آن اقامتگاه و همچنین اسناد رزرو ثبت گردیده و قابل مشاهده خواهد بود؛ لذا میهمان پیش از رزرو اقامتگاه و یا لغو رزرو خود از عواقب مالی آن آگاه خواهد بود.
        در صورت لغو رزرو قطعی، هرگونه بازگشت وجوه مطابق مقررات لغو رزرو همان اقامتگاه انجام خواهد شد."
        />
          <StepperInfo
        className="w-full max-w-[380px] !relative !top-0 mt-4"
        title="تعادل در تعیین مقررات"
        text="توجه: تنها میهمانانی که تمامی مقررات اقامتگاه شما را می‌پذیرند قادر به رزرو اقامتگاه خواهند بود، لذا با رعایت تعادل در تعیین مقررات ‏تعداد کمتری از میهمانان را از دست خواهید داد."
      />
        </div>
    </section>
  );
};

export default Rules;
