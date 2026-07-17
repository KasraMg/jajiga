"use client";
import ContentNavigator from "@/src/components/modules/content-navigator/content-navigator";
import StepLayout from "@/src/components/modules/new-Room-stepper/step-layout";
import Stepper from "@/src/components/modules/stepper/stepper";
import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import Alert from "@/src/components/modules/alert/alert";
import dynamic from "next/dynamic";
import useStep2 from "./hook";
const Map = dynamic(
  () => import("@/src/components/modules/map/map").then((mod) => mod.Map),
  {
    ssr: false,
  },
);

const Step2Screen = () => {
  const { mapChangeHandler, submitHandler, disableNextButton, isPending } =
    useStep2();

  return (
    <StepLayout stepperActive={2}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={2} />
        </div>
        <div className="flex w-full flex-col gap-3">
          <p>انتخاب موقعیت در نقشه</p>
          <p className=" text-sm font-light leading-6">
            مکان نما در وسط صفحه ثابت است. نقشه را به گونه ای حرکت دهیه تا مکان
            نما بر روی مکان اقامتگاه شما قرار گیرد. با استفاده از کلید + بر روی
            نقشه زوم کنید.
          </p>
          <Alert title="موقعیت مکانی (لوکیشن) را به دقت مشخص کنید.">
            <p className=" my-2 font-light leading-6">
              لوکیشن ثبت شده برای مسیریابی به مهمانان ارسال می‌شود. طبق ضمانت
              تحویل جاجیگا، هرگونه مغایرت می‌تواند باعث لغو رزرو و عودت وجه به
              مهمان شود.
            </p>
          </Alert>
          <Map
            className="z-10 mb-20"
            mapChangeHandler={mapChangeHandler}
            position={[35.551066, 51.297588]}
          />
          <ContentNavigator
            clickHandler={submitHandler}
            disablelPrevButton={false}
            disableNextButton={disableNextButton}
            prevLink={"new-room/step1"}
            isPending={isPending}
          />
        </div>
        <div className="max-w-[243px]">
          <StepperInfo
            title="مکان اقامتگاه"
            text="با حرکت مکان نما و جابجا شدن بر روی نقشه, مکان نما را بر روی محل اقامتگاه خود, قرار دهید.
                     همچنین می توانید با استفاده از کلیدهای + و – بزرگنمایی نقشه را تغییر دهید و یا برای دقت بیشتر, نقشه را به حالت Satellite درآورید."
          />
        </div>
      </div>
    </StepLayout>
  );
};

export default Step2Screen;
