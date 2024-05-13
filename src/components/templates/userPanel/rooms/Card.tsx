import Button from "@/src/components/modules/button";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";
const Card = () => {
  return (
    <div
    className="xl:!w-[330px] w-full"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div className="w-full relative">
        <img
          className="h-[210px] w-full rounded-t-lg"
          src="https://www.jajiga.com/static/img/rooms/blankHome.png"
          alt=""
        />
        <div className="px-3 py-2 bg-[#00000080] rounded-t-lg absolute bottom-0 left-0 w-full flex items-center justify-between">
          <p className="text-white">بدون عنوان</p>
          <p className="bg-white text-black rounded-full p-1 px-2 font-thin text-sm">
            کد: 3243434
          </p>
        </div>
        <div className="flex items-center gap-2 pl-2 bg-customYellow p-1 rounded-l-full absolute right-0 top-3">
          <SlReload />
          <p className="text-sm text-gray-700">در حال تکمیل</p>
        </div>
      </div>
      <div className="py-3 px-2">
        <div className="flex items-center gap-3 mb-2">
          <div className=" bg-[#f5f5f5] w-full rounded-full">
            <div className="text-center rounded-full bg-customYellow  w-[25%] h-3"></div> 
          </div>
          <p className="text-sm font-thin">25%</p>
        </div>

        <div className="flex gap-2">
          <Link className="w-full" href={"/profile"}>
            <Button
              className="text-xs border-0 rounded-none w-full px-4 xl:!px-8 flex justify-center gap-2"
              variant={"white"}
            >
              <FaRegTrashCan />
              حذف
            </Button>
          </Link>
          <Link className="w-full" href={"/profile"}>
            <Button
              className="text-xs w-full px-4 xl:!px-8 flex justify-center gap-2"
              variant={"main"}
            >
              ادامه ثبت
              <FaChevronLeft />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
