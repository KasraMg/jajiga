import Button from "@/src/components/modules/button";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";
const Card = () => {
  return (
    <div
      className="w-full xl:!w-[330px]"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div className="relative w-full">
        <img
          className="h-[210px] w-full rounded-t-lg"
          src="https://www.jajiga.com/static/img/rooms/blankHome.png"
          alt=""
        />
        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between rounded-t-lg bg-[#00000080] px-3 py-2">
          <p className="text-white">بدون عنوان</p>
          <p className="rounded-full bg-white p-1 px-2 text-sm font-thin text-black">
            کد: 3243434
          </p>
        </div>
        <div className="absolute right-0 top-3 flex items-center gap-2 rounded-l-full bg-customYellow p-1 pl-2">
          <SlReload />
          <p className="text-sm text-gray-700">در حال تکمیل</p>
        </div>
      </div>
      <div className="px-2 py-3">
        <div className="mb-2 flex items-center gap-3">
          <div className="w-full rounded-full bg-[#f5f5f5]">
            <div className="h-3 w-[25%] rounded-full bg-customYellow text-center"></div>
          </div>
          <p className="text-sm font-thin">25%</p>
        </div>

        <div className="flex gap-2">
          <Link className="w-full" href={"/profile"}>
            <Button
              className="flex w-full justify-center gap-2 rounded-none border-0 px-4 text-xs xl:!px-8"
              variant={"white"}
            >
              <FaRegTrashCan />
              حذف
            </Button>
          </Link>
          <Link className="w-full" href={"/profile"}>
            <Button
              className="flex w-full justify-center gap-2 px-4 text-xs xl:!px-8"
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
