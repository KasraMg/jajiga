"use client";

import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import Loader from "@/src/components/modules/loader/loader";
import { Button } from "@/src/components/shadcn/ui/button";
import { useFacilities } from "./hook";

const Facilities = () => {
  const {
    facility,
    moreFacility,
    setMoreFacility,
    disableNextButton,
    handleInputChange,
    submitHandler,
    isPending,
  } = useFacilities();

  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <div className="w-full space-y-4">
          <p className="text-sm font-thin lg:text-base">
            در این بخش امکانات موجود در اقامتگاه خود را ویرایش کنید. همچنین
            می‌توانید برای هر یک در کادر مربوطه توضیحات تکمیلی بنویسید.
          </p>

          {facility.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.status}
                  style={{ boxShadow: "none" }}
                  className="cursor-pointer rounded checked:bg-black"
                  onChange={(e) =>
                    handleInputChange(e.target.checked, item.title)
                  }
                />

                <label className="text-xs lg:text-sm">{item.title}</label>
              </div>

              {item.status && (
                <input
                  type="text"
                  placeholder={item.placeholder}
                  defaultValue={item.description}
                  className="w-[65%] rounded-md border p-2 text-sm placeholder:text-xs placeholder:text-gray-500"
                  onChange={(e) =>
                    handleInputChange(e.target.value, item.title)
                  }
                />
              )}
            </div>
          ))}

          <div className="flex items-center justify-between">
            <label className="text-sm">سایر امکانات</label>

            <input
              type="text"
              value={moreFacility}
              placeholder="سایر امکانات"
              className="w-[65%] rounded-md border border-gray-400 p-2 text-sm"
              onChange={(e) => setMoreFacility(e.target.value)}
            />
          </div>

          {!disableNextButton && (
            <Button
              variant="yellow"
              onClick={submitHandler}
              className="mx-auto mt-10 block rounded-md px-4 py-2"
            >
              ذخیره تغییرات
            </Button>
          )}
        </div>
      </div>

      <StepperInfo
        className="w-full max-w-[380px]"
        title="امکانات اقامتگاه"
        text="در این قسمت امکانات موجود در اقامتگاه را مشخص کنید."
      />

      {isPending && <Loader />}
    </section>
  );
};

export default Facilities;
