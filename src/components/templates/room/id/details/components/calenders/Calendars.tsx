import React, { useEffect } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FaTrashAlt } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import useDateHandler from "@/src/hooks/useDateHandler";
import jalaali from "jalaali-js";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/src/components/shadcn/ui/sheet";
import { VillaResponse } from "@/src/types/Villa.types";
import { roomStore } from "@/src/stores/room";
import { convertNumbers } from "@/src/utils/utils";
import { authStore } from "@/src/stores/auth";
import { Book } from "@/src/types/Auth.types";
import { useParams } from "next/navigation";

const Calendars = (data: VillaResponse) => {
  const date = useDateHandler();
  const params = useParams();

  const [numberOfMonths, setNumberOfMonths] = useState(
    window.innerWidth >= 1023 ? 2 : 1,
  );

  useEffect(() => {
    const handleResize = () => {
      setNumberOfMonths(
        window.innerWidth >= 1023 ? 2 : 1,
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { setStartDate, setEndDate, startDate } = roomStore((state) => state);
  const { userData } = authStore((state) => state);
  const [defaultValue, setDefultValue] = useState([]);
  const [reserveData, setReserveData] = useState<null | Book>(null);

  function handleChange(value: DateObject | DateObject[] | null) {
    setDefultValue(value as any);
    if (Array.isArray(value)) {
      value.forEach((date, index) => {
        if (index + 1 === 1) setStartDate(convertNumbers(date.format(), true));
        if (index + 1 === 2) {
          setEndDate(convertNumbers(date.format(), true));
        } else {
          setEndDate(null);
        }
      });
    }
  }

  const handleDelete = () => {
    if (startDate) {
      setDefultValue([]);
      setStartDate(null);
      setEndDate(null);
    }
  };

  const getSeason = (monthIndex: number) => {
    if (monthIndex >= 0 && monthIndex <= 2) return "spring";
    if (monthIndex >= 3 && monthIndex <= 5) return "summer";
    if (monthIndex >= 6 && monthIndex <= 8) return "autumn";
    return "winter";
  };
  useEffect(() => {
    if (userData) {
      const reserve = userData.booked.find(
        (book) => book.villa._id === params.id,
      );
      if (reserve) {
        setReserveData(reserve);
      } else setReserveData(null);
    }
  }, [userData]);

  const isDateInRange = (today: any, from: string, to: string) => {
    // const todayDate = jalaali.toGregorian(
    //   ...convertNumbers(`${today}`, true).split("/").map(Number),
    // );

    const dateArray: [number, number, number] = convertNumbers(`${today}`, true)
      .split("/")
      .map(Number) as [number, number, number];
    const todayDate = jalaali.toGregorian(...dateArray);

    // const startDate = jalaali.toGregorian(...from.split("/").map(Number));
    // const endDate = jalaali.toGregorian(...to.split("/").map(Number));

    const [fromYear, fromMonth, fromDay] = from.split("/").map(Number);
    const [toYear, toMonth, toDay] = to.split("/").map(Number);

    const startDate = jalaali.toGregorian(fromYear, fromMonth, fromDay);
    const endDate = jalaali.toGregorian(toYear, toMonth, toDay);

    const todayObj = new Date(todayDate.gy, todayDate.gm - 1, todayDate.gd);
    const startObj = new Date(startDate.gy, startDate.gm - 1, startDate.gd);
    const endObj = new Date(endDate.gy, endDate.gm - 1, endDate.gd);

    return todayObj >= startObj && todayObj <= endObj;
  };

  return (
    <div id="calender" className="w-full">
      <h2 className="my-6 mb-4 text-lg text-[#252a31]">تقویم / نرخ</h2>
      <Calendar
        value={defaultValue}
        calendar={persian}
        locale={persian_fa}
        className="!w-full"
        numberOfMonths={numberOfMonths}
        shadow={false}
        minDate={new Date()}
        onChange={handleChange}
        range
        mapDays={({ date, today }) => {
          let isInRange = false;
          let isYourRange = false;

          if (reserveData) {
            isDateInRange(date, reserveData.date.from, reserveData.date.to)
              ? (isYourRange = true)
              : (isYourRange = false);
          }
          data.bookDate.forEach((range) => {
            if (isDateInRange(date, range.date.from, range.date.to)) {
              isInRange = true;
            }
          });

          const isWeekend =
            date.weekDay.index === 5 || date.weekDay.index === 6;
          const todayDate = new Date(today.year, today.month.index, today.day);
          const currentDate = new Date(date.year, date.month.index, date.day);
          const isPast = currentDate.getTime() < todayDate.getTime();
          const color = isInRange
            ? "#c1c1c1"
            : isWeekend && !isPast
              ? "#ff0000"
              : "";

          const season = getSeason(date.month.index);
          const priceType = isWeekend ? "holidays" : "midWeek";
          const dayPrice = data.villa.price[season][priceType];
          return {
            children: isYourRange ? (
              <span
                style={{
                  color: "#0074d9",
                  background:
                    " repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgba(215, 215, 215, 0.8) 0px, rgba(215, 215, 215, 0.8) 6px)",
                }}
              >
                <p style={{ marginTop: "3px" }}>{date.day}</p>

                <p
                  style={{
                    fontSize: "9px",
                    color: "#0074d9",
                  }}
                >
                  رزرو شما
                </p>
              </span>
            ) : (
              <span
                style={
                  isInRange
                    ? {
                        background:
                          " repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgba(215, 215, 215, 0.8) 0px, rgba(215, 215, 215, 0.8) 6px)",
                      }
                    : { textAlign: "center" }
                }
              >
                <p style={{ marginTop: "3px" }}>{date.day}</p>
                {!isInRange && (
                  <p
                    style={{
                      fontSize: "9px",
                      color: isWeekend
                        ? isPast
                          ? "cccbcb"
                          : "#ff0000"
                        : isPast
                          ? "cccbcb"
                          : "#555",
                      letterSpacing: "-1px",
                    }}
                  >
                    {new Intl.NumberFormat("fa-IR").format(dayPrice as any)}
                  </p>
                )}
              </span>
            ),
            style: {
              color,
            },
            disabled:
              data.villa.isOwner ||
              isInRange ||
              (reserveData as any) ||
              data.villa.isAccepted !== "true",
          };
        }}
      />
      <div className="mt-4 flex justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3 rounded-lg border-0 bg-[#8080801a] p-2 text-sm">
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

        {data.villa.user._id !== userData?.user._id && (
          <div
            onClick={handleDelete}
            className="transition-color justify-right flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-dashed border-black bg-white px-3 text-sm font-medium text-black"
          >
            <FaTrashAlt />
            پاک کردن
          </div>
        )}
      </div>
      {reserveData && (
        <p className="mt-2 text-xs text-red-600">
          بیش از 1 رزرو برای ویلا نمیتونید داشته باشید
        </p>
      )}
    </div>
  );
};

export default Calendars;
