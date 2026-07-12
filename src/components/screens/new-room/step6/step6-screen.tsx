"use client";

import ContentNavigator from "@/src/components/modules/content-navigator/content-navigator";
import StepLayout from "@/src/components/modules/new-Room-stepper/step-layout";
import Stepper from "@/src/components/modules/stepper/stepper";
import StepperInfo from "@/src/components/modules/stepper-info/stepper-info"; 
import { useStep6 } from "./hook";

const Step6Screen = () => {
  const {
    data,
    status,
    isLoading,
    showInput,
    moreFacility,
    moreSanitary,
    setMoreFacility,
    setMoreSanitary,
    disableNextButton,
    toggleFacility,
    toggleSanitary,
    inputChangeHandler,
    submitHandler,
    isPending,
  } = useStep6();

  return (
    <StepLayout stepperActive={6}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={6} />
        </div>

        <div className="w-full space-y-4">
          <p className="text-sm lg:text-base">
            امکانات و تجهیزات موجود در اقامتگاه خود را مشخص کنید
          </p>

          {status === "success" &&
            data.facility.map(
              (
                item: {
                  engTitle: string;
                  title: string;
                  placeHolder: string;
                },
                index: number,
              ) => (
                <div className="flex justify-between" key={item.engTitle}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="cursor-pointer rounded checked:bg-black"
                      style={{ boxShadow: "none" }}
                      onChange={(e) =>
                        toggleFacility(index, e.target.checked, item.engTitle)
                      }
                    />

                    <label className="text-xs lg:text-sm">{item.title}</label>
                  </div>

                  {showInput[index] && (
                    <input
                      placeholder={item.placeHolder}
                      onChange={(e) =>
                        inputChangeHandler(e.target.value, item.engTitle)
                      }
                      className="w-[65%] rounded-md border p-2 text-sm"
                      type="text"
                    />
                  )}
                </div>
              ),
            )}

          {isLoading && "..."}

          <div className="flex items-center justify-between">
            <label className="text-sm">سایر امکانات</label>

            <input
              value={moreFacility}
              onChange={(e) => setMoreFacility(e.target.value)}
              placeholder="سایر امکانات"
              className="w-[65%] rounded-md border border-gray-400 p-2 text-sm"
            />
          </div>

          <p className="!mt-8 border-t border-gray-200 pt-5">اقلام بهداشتی</p>

          {status === "success" &&
            data.sanitaryFacilities.map(
              (item: { engTitle: string; title: string }) => (
                <div key={item.engTitle} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="cursor-pointer rounded checked:bg-black"
                    style={{ boxShadow: "none" }}
                    onChange={(e) =>
                      toggleSanitary(e.target.checked, item.engTitle)
                    }
                  />

                  <label className="text-xs lg:text-sm">{item.title}</label>
                </div>
              ),
            )}

          <div className="!mb-16 flex items-center justify-between">
            <label className="text-sm">سایر موارد</label>

            <input
              value={moreSanitary}
              onChange={(e) => setMoreSanitary(e.target.value)}
              placeholder="سایر موارد"
              className="w-[65%] rounded-md border border-gray-400 p-2 text-sm"
            />
          </div>

          <ContentNavigator
            disablelPrevButton={false}
            disableNextButton={disableNextButton}
            clickHandler={submitHandler}
            isPending={isPending}
            prevLink="new-room/step5"
          />
        </div>

        <div className="sticky top-[68px] hidden h-max max-w-[243px] md:block">
          <StepperInfo
            className="!relative !top-0"
            title="امکانات اقامتگاه"
            text="در این قسمت امکانات موجود در اقامتگاه را مشخص کنید."
          />

          <StepperInfo
            className="!relative !top-0 mt-5"
            title="اقلام بهداشتی"
            text="اقلام بهداشتی موجود در اقامتگاه را مشخص کنید."
          />
        </div> 
      </div>
    </StepLayout>
  );
};

export default Step6Screen;
