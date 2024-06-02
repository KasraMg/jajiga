import React from "react";
import { IoHomeOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TbArrowAutofitHeight } from "react-icons/tb";
const Summery = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-[#f3f3f3] px-4 py-[14px]">
      <div className="flex w-1/4 flex-col items-center justify-center">
        <IoHomeOutline className="text-3xl" />
        <p className="mt-2 text-xs">دربست</p>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center">
        <IoPeopleOutline className="text-3xl" />
        <p className="mt-2 text-xs">تا 6 مهمان</p>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center">
        <MdOutlineBedroomParent className="text-3xl" />
        <p className="mt-2 text-xs">2 اتاق خواب</p>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center">
        <TbArrowAutofitHeight className="text-3xl" />
        <p className="mt-2 text-xs">150 متر</p>
      </div>
    </div>
  );
};

export default Summery;
