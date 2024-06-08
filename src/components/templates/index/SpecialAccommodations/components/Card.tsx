 
import React, { FC } from "react";
import { SlEnergy } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { Button } from "@/src/components/shadcn/ui/button";

interface CardProps {
  className?: string;
}
const Card: FC<CardProps> = ({ className }) => {
  return (
    <section className={`mx-auto xl:!w-full ${className} `}>
      <div className="relative w-full">
        <img
          className="h-52 w-full rounded-xl object-cover"
          src="https://storage.jajiga.com/public/pictures/medium/3181811230115103439.jpg"
          alt=""
        />
        <div className="absolute right-[2px] top-[2px] flex flex-col p-2">
          <Button
            size={"sm"}
            variant={"white"}
            className="font-vazir w-[78px] font-light"
          >
            <CiStar className="ml-1" />
            مـمـتــــــاز
          </Button>
          <Button
            size={"sm"}
            variant={"yellow"}
            className="font-vazir mt-2 w-[78px] font-light"
          >
            <SlEnergy className="ml-1" />
            رزرو فوری
          </Button>
        </div>
        <div
          style={{
            background:
              "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%) 0% 0% / cover",
          }}
          className="absolute bottom-0 right-0 w-full rounded-xl pb-3 pr-3 text-sm text-white"
        >
          <p>از 1,111,111 تومان</p>
        </div>
      </div>
      <p className="mt-3 text-sm">اجاره منزل ویلایی در بابلسر</p>
      <div className="font-vazir mt-1 flex items-center gap-1 text-xs font-light text-gray-500">
        <p>3 خوابه . </p>
        <p> 200 متر . </p>
        <p>تا 12 مهمان</p>
        <div className="flex items-center gap-1">
          <IoIosStar className="text-sm text-yellow-400" />
          <p className="pt-1"> 4.9</p>
        </div>
        <p className="pt-1">(13 نظر)</p>
      </div>
    </section>
  );
};

export default Card;
