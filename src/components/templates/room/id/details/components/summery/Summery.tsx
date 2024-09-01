import { VillaDetails } from "@/src/types/Villa.types";
import { spaceOptions } from "@/src/utils/options";
import React from "react";
import { IoHomeOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TbArrowAutofitHeight } from "react-icons/tb";
const Summery = (data:VillaDetails) => {
  const space = spaceOptions.find(option => option.value === data.aboutVilla.villaSpace)
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-[#f3f3f3] px-4 py-[14px]">
      <div className="flex w-1/4 flex-col items-center justify-center">
        <IoHomeOutline className="text-3xl" />
        <p className="mt-2 text-xs">{space?.label}</p>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center">
        <IoPeopleOutline className="text-3xl" />
        <p className="mt-2 text-xs">تا {data.capacity.maxCapacity} مهمان</p>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center">
        <MdOutlineBedroomParent className="text-3xl" />
        <p className="mt-2 text-xs">{data.capacity.bedRoom} اتاق خواب</p>
      </div>
      <div className="flex w-1/4 flex-col items-center justify-center">
        <TbArrowAutofitHeight className="text-3xl" />
        <p className="mt-2 text-xs">{data.capacity.buildingSize} متر</p>
      </div>
    </div>
  );
};

export default Summery;
