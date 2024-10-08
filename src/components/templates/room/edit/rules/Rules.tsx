"use client";

import Loader from "@/src/components/modules/loader/Loader";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { Button } from "@/src/components/shadcn/ui/button";
import useEditVilla from "@/src/hooks/useEditVilla";
import { authStore } from "@/src/stores/auth";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface userObjData {
  rules: {};
  step: 9;
  finished: true;
}

const Rules = () => {
  const [disableNextButton, setDisableNextButton] = useState<boolean>(true);

  const [rules, setRules] = useState<string>("");
  const [pet, setPet] = useState<null | boolean>(null);
  const [party, setParty] = useState<null | boolean>(null);
  const [smoke, setSmoke] = useState<null | boolean>(null);

  const { userData } = authStore((state) => state);
  const params = useParams();

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  useEffect(() => {
    if (villa) { 
      setPet(villa.rules.pet);
      setParty(villa.rules.music);
      setSmoke(villa.rules.smoke);
      setRules(villa.rules.more as string);
    }
  }, [villa]);

  const { mutate: mutation, isPending } = useEditVilla<userObjData>(
    null,
    "اطلاعات با موفقیت بروزرسانی شد",
    params.id as any,
  );

  const submitHandler = () => {
    const data: userObjData = {
      rules: {
        pet: pet === null ? false : pet,
        music: party === null ? false : party,
        smoke: smoke === null ? false : smoke,
        more: rules,
      },
      step: 9,
      finished: true,
    }; 
    mutation(data);
    setDisableNextButton(true);
  };
  return (
    <section className="flex w-full max-w-[1120px] justify-between md:gap-16">
      <div className="font-thin text-gray-700">
        <strong className="text-sm font-extrabold">مقررات اقامتگاه :</strong>
        {villa && (
          <>
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
                        checked={pet as boolean}
                        className="peer hidden"
                        onClick={() => {
                          setDisableNextButton(false);
                          setPet(true);
                        }}
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
                        onClick={() => {
                          setDisableNextButton(false);
                          setPet(false);
                        }}
                        id="8"
                        checked={!pet as boolean}
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
                  ورود حیوان خانگی (سگ، گربه، ...) به شرط رعایت کامل نظافت مجاز
                  است. در داخل ساختمان حیوان باید در باکس مخصوص نگهداری شود.
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
                        onClick={() => {
                          setDisableNextButton(false);
                          setParty(true);
                        }}
                        checked={party as boolean}
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
                        checked={!party as boolean}
                        onClick={() => {
                          setDisableNextButton(false);
                          setParty(false);
                        }}
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
                        checked={smoke as boolean}
                        onClick={() => {
                          setDisableNextButton(false);
                          setSmoke(true);
                        }}
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
                        onClick={() => {
                          setDisableNextButton(false);
                          setSmoke(false);
                        }}
                        value="2"
                        checked={!smoke as boolean}
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
            <div className="mt-6 flex flex-col justify-between pb-20 lg:!flex-row">
              <p className="mb-3">افزودن مقررات بیشتر</p>
              <div className="w-full lg:!w-[60%]">
                <Textarea
                  buttonDisableFun={() => setDisableNextButton(false)}
                  maxLength={250}
                  setValue={setRules}
                  value={rules}
                />
              </div>
            </div>
          </>
        )}

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

      <div>
        <StepperInfo
          className="!relative !top-0 w-full max-w-[380px]"
          title="مقررات لغو رزرو اقامتگاه"
          text="در این قسمت میزبان تعیین می‌کند درصورتی که میهمان، رزرو قطعی‌شده خود را لغو کند، چه عواقبی برای او (میهمان) به همراه خواهد داشت.
        
        «سیاست لغو رزرو» هر اقامتگاه در «نمایه» آن اقامتگاه و همچنین اسناد رزرو ثبت گردیده و قابل مشاهده خواهد بود؛ لذا میهمان پیش از رزرو اقامتگاه و یا لغو رزرو خود از عواقب مالی آن آگاه خواهد بود.
        در صورت لغو رزرو قطعی، هرگونه بازگشت وجوه مطابق مقررات لغو رزرو همان اقامتگاه انجام خواهد شد."
        />
        <StepperInfo
          className="!relative !top-0 mt-4 w-full max-w-[380px]"
          title="تعادل در تعیین مقررات"
          text="توجه: تنها میهمانانی که تمامی مقررات اقامتگاه شما را می‌پذیرند قادر به رزرو اقامتگاه خواهند بود، لذا با رعایت تعادل در تعیین مقررات ‏تعداد کمتری از میهمانان را از دست خواهید داد."
        />
      </div>

      {isPending && <Loader />}
    </section>
  );
};

export default Rules;
