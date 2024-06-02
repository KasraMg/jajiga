"use client";
import React, { useState } from "react";
import { MdOutlinePeople } from "react-icons/md";
import { TbHomeQuestion, TbHomeStar, TbMoneybag } from "react-icons/tb";
import { FaMapLocationDot, FaRegTrashCan } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Filter from "./components/filter/Filter";
import Button from "@/src/components/modules/button";
const Filters = () => {
  const [maximumSpace, setMaximumSpace] = useState<number>(1);
  const incrementMaximumHandler = () => {
    setMaximumSpace((prev) => prev + 1);
  };
  const decrementMaximumHandler = () => {
    if (maximumSpace !== 1) {
      setMaximumSpace((prev) => prev - 1);
    }
  };
  return (
    <div
      className="flex flex-wrap justify-center gap-2 bg-[#f3f3f3] px-8 py-2 sm:!justify-start"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Filter title="تعداد نفرات " icon={<MdOutlinePeople />}>
        <div className="relative z-50 bg-white p-3">
          <div className="flex items-center justify-between text-sm">
            <p className="font-vazir font-extrabold">تعداد نفرات</p>
            <div className="flex items-center justify-between pl-1">
              <div>
                <div className="flex w-[130px] items-center justify-between">
                  <p
                    onClick={incrementMaximumHandler}
                    className="cursor-pointer text-2xl hover:text-gray-500"
                  >
                    +
                  </p>
                  <p className="text-sm">{maximumSpace} نفر</p>
                  <p
                    onClick={decrementMaximumHandler}
                    className={`${maximumSpace == 1 && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
                  >
                    _
                  </p>
                </div>
                <p className="text-center text-sm text-gray-500">(حداقل)</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-1 text-gray-500">
            <IoInformationCircleOutline />
            <p className="text-xs">
              {" "}
              با انتخاب تعداد نفرات، نتایج دقیق تری را مشاهده می‌کنید.
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              className="flex items-center gap-2 border-dashed"
              variant={"white"}
            >
              <FaRegTrashCan />
              پاک کردن
            </Button>
            <Button className="flex items-center gap-2" variant={"main"}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
      </Filter>
      <Filter smRight={true} title="محدوده اجاره بها" icon={<TbMoneybag />}>
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:bottom-0 before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="font-vazir text-base font-normal sm:!text-lg">
            محدوده اجاره‌بها
          </p>
          <div className="mt-4 flex flex-col gap-3 md:!flex-row">
            <div>
              <label className="mb-1 block">نرخ هر شب از</label>
              <div className="relative">
                <input
                  type="text"
                  className="border-1 w-full rounded-lg border-solid border-gray-300 pl-4"
                />
                <span className="absolute left-3 top-2">تومان</span>
              </div>
            </div>
            <div>
              <label className="mb-1 block">تا</label>
              <div className="relative">
                <input
                  type="text"
                  className="border-1 w-full rounded-lg border-solid border-gray-300 pl-4"
                />
                <span className="absolute left-3 top-2">تومان</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Button
              className="flex items-center gap-2 border-dashed"
              variant={"white"}
            >
              <FaRegTrashCan />
              پاک کردن
            </Button>
            <Button className="flex items-center gap-2" variant={"main"}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
      </Filter>
      <Filter title="نوع اقامتگاه" icon={<TbHomeQuestion />}>
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:bottom-0 before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="font-vazir text-base font-normal sm:!text-lg">
            نوع اقامتگاه
          </p>
          <div className="mt-4 grid grid-cols-[auto,auto] gap-3">
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">ویلایی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">آپارتمان</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">ویلایی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">آپارتمان</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between px-3 pb-2">
              <p className="text-xs sm:!text-base">ویلایی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between px-3 pb-2">
              <p className="text-xs sm:!text-base">آپارتمان</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              className="flex items-center gap-2 border-dashed"
              variant={"white"}
            >
              <FaRegTrashCan />
              پاک کردن
            </Button>
            <Button className="flex items-center gap-2" variant={"main"}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
      </Filter>

      <Filter smRight={true} title="منطقه اقامتگاه" icon={<FaMapLocationDot />}>
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:bottom-0 before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="font-vazir text-base font-normal sm:!text-lg">
            منطقه اقامتگاه
          </p>
          <div className="mt-4 grid grid-cols-[auto,auto] gap-3">
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">جنگلی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">بیابانی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">ساحلی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">ییلاقی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between px-3 pb-2">
              <p className="text-xs sm:!text-base">شهری</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              className="flex items-center gap-2 border-dashed"
              variant={"white"}
            >
              <FaRegTrashCan />
              پاک کردن
            </Button>
            <Button className="flex items-center gap-2" variant={"main"}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
      </Filter>
      <Filter title="امکانات اقامتگاه" icon={<TbHomeStar />}>
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:bottom-0 before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="font-vazir text-base font-normal sm:!text-lg">
            امکانات اقامتگاه
          </p>
          <div className="mt-4 grid grid-cols-[auto,auto] gap-3">
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">استخر</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">نگهبان</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">میز بیلیارد</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">پارکینگ</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between px-3 pb-2">
              <p className="text-xs sm:!text-base">یخچال و گاز</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between px-3 pb-2">
              <p className="text-xs sm:!text-base">wifi</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              className="flex items-center gap-2 border-dashed"
              variant={"white"}
            >
              <FaRegTrashCan />
              پاک کردن
            </Button>
            <Button className="flex items-center gap-2" variant={"main"}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
      </Filter>
    </div>
  );
};

export default Filters;

//[&>*]:flex [&>*]:bg-white  [&>*]:gap-2 bg-[#f3f3f3]
