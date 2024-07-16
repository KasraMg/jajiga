"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { IoCheckmark } from "react-icons/io5";
interface StepperProps {
  active: number;
  className?: string;
}
interface StepperData {
  title: string;
  id: number;
}
const Stepper: FC<StepperProps> = ({ active, className }) => {
  const [showSteps, setShowSteps] = useState(false);

  const [data, setData] = useState<StepperData[]>([
    { title: "آدرس", id: 1 },
    { title: "نقشه", id: 2 },
    { title: "تصاویر اقامتگاه", id: 3 },
    { title: "درباره اقامتگاه", id: 4 },
    { title: "ظرفیت اقامتگاه", id: 5 },
    { title: "امکانات", id: 6 }, 
    { title: "اجاره بها", id: 7 },
    { title: "مقررات اقامتگاه", id: 8 },
    { title: "مقررات جاجیگا", id:9 },
  ]);

  return (
    <>
      <ul
        id="stepper"
        style={{ boxShadow: "grey 0px 1px 3px 0px" }}
        className={`sticky top-[68px] hidden h-[450px] flex-col gap-6 overflow-y-auto rounded-xl p-4 md:!flex`}
      >
        {data &&
          data.map((stepper) => (
            <Link
              key={stepper.id}
              href={`${active >= stepper.id && `/newRoom/step` + stepper.id}`}
              id="stepper_item"
              className={`${active < stepper.id && "pointer-events-none"} relative flex cursor-pointer items-center gap-3`}
            >
              <div  className={`${active == stepper.id ? "bg-[#333333] text-white" : "bg-white text-[#33333]"} z-[9999] flex h-9 w-9 items-center justify-center rounded-[50%] border-2 border-solid border-black px-3 py-1`}
              >
                {active == stepper.id ? (
                  <GiSandsOfTime className="absolute text-2xl" />
                ) : (
                  <>
                    {active > stepper.id ? (
                      <IoCheckmark className="absolute text-2xl" />
                    ) : (
                      <span className="pt-[2.5px]">{stepper.id}</span>
                    )}
                  </>
                )}
              </div>
              <p className="font-vazir text-sm font-light text-[#444444]">
                {stepper.title}
              </p>
            </Link>
          ))}
      </ul>

      <div className="z-10 block md:!hidden" id={1 as any}>
        <div className="ml-4 border-0">
          <ul
            onClick={() => setShowSteps((prev) => !prev)}
            style={{ transition: ".1s all ease-in" }}
            id="stepper2"
            className={`${showSteps ? "!h-[420px] !overflow-y-scroll" : "h-16"} relative flex w-full flex-col gap-6 overflow-y-scroll p-4 px-0`}
          >
            {data &&
              data.map((stepper) => (
                <Link
                  key={stepper.id} 
                  href={`${active >= stepper.id && `/newRoom/step` + stepper.id}`}
                  id="stepper_item"
                  className={`${active < stepper.id && "pointer-events-none"} relative flex w-max cursor-pointer items-center gap-3`}
                >
                  <div
                    className={`${active == stepper.id ? "bg-[#333333] text-white" : "bg-white text-[#33333]"} z-10 flex h-9 w-9 items-center justify-center rounded-[50%] border-2 border-solid border-black px-3 py-1`}
                  >
                    {active == stepper.id ? (
                      <GiSandsOfTime className="absolute text-2xl" />
                    ) : (
                      <>
                        {active > stepper.id ? (
                          <IoCheckmark className="absolute text-2xl" />
                        ) : (
                          <span className="pt-[2.5px] text-sm">
                            {stepper.id}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <p className="font-vazir text-sm font-light text-[#000000]">
                    {stepper.title}
                  </p>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Stepper;
