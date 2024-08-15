import React from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FaTrashAlt } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import useDateHandler from "@/src/hooks/useDateHandler"; 
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/src/components/shadcn/ui/sheet";
import { userVillasObj } from "@/src/types/Auth.types";

const Calendars = (data: userVillasObj) => {
  const [value, setValue] = useState<any>();  
  const date = useDateHandler();
   

  function handleChange(value: DateObject | DateObject[] | null) {
    setValue(value);
    console.log(value);
    
  }

  const handleDelete = () => { 
    if (value?.length > 0) { 
      setValue([]);
    }
  };

  const getSeason = (monthIndex: number) => {
    if (monthIndex >= 0 && monthIndex <= 2) return "spring";
    if (monthIndex >= 3 && monthIndex <= 5) return "summer";
    if (monthIndex >= 6 && monthIndex <= 8) return "autumn";
    return "winter";
  };

  return (
    <div className="w-full">
      <h2 className="my-6 mb-4 text-lg text-[#252a31]">تقویم / نرخ</h2>
      <Calendar
        value={value}
        calendar={persian}
        locale={persian_fa}
        className="!w-full"
        numberOfMonths={window.innerWidth >= 1023 ? 2 : 1}
        shadow={false}
        minDate={new Date()}
        onChange={handleChange}
        range
        mapDays={({ date, today }) => {
          const isWeekend =
            date.weekDay.index === 5 || date.weekDay.index === 6;
          const todayDate = new Date(today.year, today.month.index, today.day);
          const currentDate = new Date(date.year, date.month.index, date.day);
          const isPast = currentDate.getTime() < todayDate.getTime();
          const color = isWeekend && !isPast ? "#ff0000" : "";

          const season = getSeason(date.month.index);
          const priceType = isWeekend ? "holidays" : "midWeek";
          const dayPrice = data.price[season][priceType];
          return {
            children: (
              <div style={{ textAlign: "center" }}>
                <p style={{ marginTop: "7px", marginLeft: "6px" }}>
                  {date.day}
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#555",
                    letterSpacing: "-1px",
                    marginLeft: "9px",
                  }}
                >
                  {dayPrice.toLocaleString("fa-IR")}
                </p>
              </div>
            ),
            style: {
              color,
            },
          };
        }}
      />
      <div className="mt-4 flex justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <div 
              className="flex cursor-pointer items-center gap-3 rounded-lg border-0 bg-[#8080801a] p-2 text-sm"
            >
              <BsInfoCircle />
              راهنمای تقویم
            </div>
          </SheetTrigger>
          <SheetContent
            dir="ltr"
            className={`fixed right-0 top-0 z-[9999] h-screen w-72 overflow-y-auto rounded-l-2xl border-r bg-white py-7 !outline-none transition-transform dark:bg-gray-800 sm:!w-[400px]`}
          >
            <SheetHeader>
              <p className="border-b border-solid border-[#0000000f] pb-4 text-right text-lg">
                راهنمای تقویم
              </p>
            </SheetHeader>
            <div className="mt-8 flex flex-row-reverse gap-3">
              <div className="rounded-lg border-2 border-solid border-[#f0c807] p-[3px] px-2 text-center">
                <p className="mb-0 mt-1 text-sm">{date?.slice(0, 2)}</p>
                <span className="text-[10px]">200,000</span>
              </div>
              <div className="text-right">
                <p className="">امروز</p>
                <p className="font-vazir text-xs font-light sm:!text-sm">
                  نشان دهنده تاریخ امروز در تقویم
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-row-reverse gap-3">
              <div className="rounded-lg border border-solid border-[#00000018] bg-[#0074d9] p-[3px] px-2 text-center text-white">
                <p className="mb-0 mt-1 text-sm">{date?.slice(0, 2)}</p>
                <span className="text-[10px]">200,000</span>
              </div>
              <div className="text-right">
                <p className="">تاریخ های رزرو</p>
                <p className="font-vazir text-xs font-light sm:!text-sm">
                  نشان دهنده تاریخ شروع و خاتمه رزرو
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-row-reverse gap-3">
              <div className="rounded-lg border border-solid border-[#00000018] p-[3px] px-2 text-center text-red-600">
                <p className="mb-0 mt-1 text-sm">{date?.slice(0, 2)}</p>
                <span className="text-[10px]">200,000</span>
              </div>

              <div className="text-right">
                <p className="">تعطیلات</p>
                <p className="font-vazir text-xs font-light sm:!text-sm">
                  {" "}
                  روزهای آخر هفته و تعطیلات
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-row-reverse gap-3">
              <div
                style={{
                  background:
                    " repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgba(215, 215, 215, 0.8) 0px, rgba(215, 215, 215, 0.8) 6px)",
                }}
                className="rounded-lg border border-solid border-[#00000018] p-[3px] px-2 text-center"
              >
                <p className="mb-0 mt-1 text-sm">{date?.slice(0, 2)}</p>
                <span className="text-[10px]">200,000</span>
              </div>

              <div className="text-right">
                <p className="">روزهای پر شده</p>
                <p className="font-vazir text-xs font-light sm:!text-sm">
                  روزهایی که قبلا رزرو شده اند
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-row-reverse gap-3">
              <div className="rounded-lg border border-solid border-[#00000018] p-[3px] px-2 text-center text-gray-400">
                <p className="mb-0 mt-1 text-sm">{date.slice(0, 2)}</p>
                <span className="text-[10px]">200,000</span>
              </div>

              <div className="text-right">
                <p className=""> روزهای گذشته</p>
                <p className="font-vazir text-xs font-light sm:!text-sm">
                  روزهایی سپری شده در تقویم
                </p>
              </div>
            </div>
            <p className="mt-48 text-center text-sm">
              همه قیمت ها به تومان هستند
            </p>
          </SheetContent>
        </Sheet>

        <div
          onClick={handleDelete}
          className="transition-color justify-right flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-dashed border-black bg-white px-3 text-sm font-medium text-black"
        >
          <FaTrashAlt />
          پاک کردن
        </div>
      </div>
    </div>
  );
};

export default Calendars;
