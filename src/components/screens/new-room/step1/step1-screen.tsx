"use client";
import ContentNavigator from "@/src/components/modules/content-navigator/content-navigator";
import StepLayout from "@/src/components/modules/new-Room-stepper/step-layout";
import Stepper from "@/src/components/modules/stepper/stepper";
import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import Textarea from "@/src/components/modules/textarea/textarea";
import Select from "react-select";
import Loader from "@/src/components/modules/loader/loader";
import useStep1 from "@/src/components/screens/new-room/step1/hook";

const Step1Screen = () => {
  const {
    stateOptions,
    address,
    setAddress,
    stateSelectedOption,
    setStateSelectedOption,
    citySelectedOption,
    setCitySelectedOption,
    cityOption,
    citySelectorDisabel,
    disableNextButton,
    submitHandler,
    isPending,
  } = useStep1();

  return (
    <StepLayout stepperActive={1}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={1} />
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
            <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
              انتخاب استان:
            </p>
            <Select
              defaultValue={stateSelectedOption}
              onChange={setStateSelectedOption as any}
              isClearable={true}
              className="w-full md:w-[200px] lg:!w-full"
              isRtl={true}
              isSearchable={true}
              options={stateOptions}
              placeholder={"استان خود را انتخاب کنید"}
            />
          </div>

          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
            <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
              انتخاب شهر:
            </p>
            <Select
              defaultValue={citySelectedOption}
              onChange={setCitySelectedOption as any}
              isDisabled={citySelectorDisabel}
              isClearable={true}
              className="w-full md:w-[200px] lg:!w-full"
              isRtl={true}
              isSearchable={true}
              value={citySelectedOption}
              options={cityOption}
              placeholder={"شهر خود را انتخاب کنید"}
            />
          </div>

          <div className="mb-20 flex flex-col justify-between gap-2 md:!mb-4 md:flex-row">
            <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
              {" "}
              آدرس دقیق:
            </p>
            <div className="w-full">
              <Textarea
                className="h-[104px]"
                maxLength={250}
                setValue={setAddress}
                value={address}
              />
              <span className="mt-3 text-xs text-[#5f738c]">
                آدرس اقامتگاه را با جزییات کامل وارد کنید تا میهمان پس از رزرو
                به راحتی بتوانند اقامتگاه را پیدا کنند.
              </span>
            </div>
          </div>
          <ContentNavigator
            clickHandler={submitHandler}
            disablelPrevButton={true}
            disableNextButton={disableNextButton}
            prevLink={"/"}
            isPending={isPending}
          />
        </div>
        <StepperInfo
          title="آدرس اقامتگاه"
          text="آدرس دقیق اقامتگاه, تنها پس ازقطعی شدن رزروبرای میهمان ارسال می گردد."
        />
       
      </div>
    </StepLayout>
  );
};

export default Step1Screen;
