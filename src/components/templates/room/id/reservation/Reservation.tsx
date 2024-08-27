import React, { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { SlInfo } from "react-icons/sl";
import Link from "next/link";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ReservationModal from "./components/ReservationModal";
import { Button } from "@/src/components/shadcn/ui/button";
import { userVillasObj } from "@/src/types/Auth.types";
import { roomStore } from "@/src/stores/room";
import { useParams } from "next/navigation";
import { baseUrl, todayVillaPrice } from "@/src/utils/utils";
const Reservation = (data: userVillasObj) => {
  const [countSelectedOption, setCountSelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);

  const params = useParams();
  const { startDate, endtDate } = roomStore((state) => state);
  const [disable, setDisable] = useState(true);

  const price = todayVillaPrice(data.price);

  const userCountOptions: {
    label: string;
    value: string;
  }[] = [];

  for (let index = 0; index < data.capacity.maxCapacity; index++) {
    userCountOptions.push({
      label: `${index + 1} نفر`,
      value: `${index + 1} نفر`,
    });
  }

  useEffect(() => {
    if (countSelectedOption && startDate && endtDate) {
      console.log(startDate);
      console.log(endtDate);

      setDisable(false);
      const data = {
        date: {
          from: "1403/06/22",
          to: "1403/06/25",
        },
      };
      fetch(`${baseUrl}/villa/book/price/${params.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((datas) => console.log(datas));
    } else setDisable(true);
  }, [countSelectedOption, startDate, endtDate]);

  return (
    <>
      <div className="sticky top-[68px] hidden w-[33.33%] md:!block">
        <div className="flex items-center justify-between rounded-t-2xl bg-[#404040] px-4 py-[14px] text-white">
          <p className="text-sm lg:!text-base">نرخ هر شب از:</p>
          <div className="flex">
            <p className="text-sm lg:!text-base">{price}</p>
            <p className="mr-1 text-sm">تومان</p>
          </div>
        </div>
        <div className="rounded-b-2xl px-4 py-[14px] shadow-lg">
          <p className="font-vazir mb-2 text-sm font-light text-[#252a31]">
            تاریخ سفر
          </p>
          <div className="flex items-center justify-evenly rounded-lg border border-[#d6d6d6] px-5 py-2">
            <div className="text-sm text-[#bac7d5]">
              <a href="#calender">
                {" "}
                {startDate ? (
                  <p className="text-black">{startDate}</p>
                ) : (
                  "تاریخ ورود"
                )}{" "}
              </a>
            </div>
            <div className='mx-2 inline-block min-h-[30px] w-[1px] bg-[#d6d6d6] after:content-[""]'></div>
            <div className="text-sm text-[#bac7d5]">
              <a href="#calender">
                {" "}
                {endtDate ? (
                  <p className="text-black">{endtDate}</p>
                ) : (
                  "تاریخ خروج"
                )}{" "}
              </a>
            </div>
          </div>
          <p className="font-vazir mb-2 mt-8 text-sm font-light text-[#252a31]">
            تعداد نفرات
          </p>
          <Select
            defaultValue={countSelectedOption}
            onChange={setCountSelectedOption as any}
            isClearable={true}
            className="w-full md:w-[200px] lg:!w-full"
            isRtl={true}
            isSearchable={true}
            options={userCountOptions as any}
            placeholder={"تعداد نفرات را مشخص کنید"}
          />
          <Button
            variant="yellow"
            disabled={disable}
            className="mt-5 w-full rounded-full text-center"
          >
            <div className="text-textGray mx-auto flex items-baseline justify-center">
              <span>ثبت درخواست رزرو</span>
              <span className="text-[10px]">(رایگان)</span>
            </div>
          </Button>
          <Link href={"/faq"}>
            <Button
              className="mt-5 w-full justify-center border-[#00000028]"
              variant={"white"}
            >
              <SlInfo />
              راهنمای رزرو
            </Button>
          </Link>
        </div>
      </div>
      <div className="fixed bottom-16 block w-full px-5 md:!hidden">
        <div className="flex w-full items-center justify-between rounded-lg bg-[#00000099] px-2 py-3 text-white">
          <div>
            <p className="text-xs">
              هر شب از <span className="text-sm">2,000,000</span> تومان{" "}
            </p>
            <Link
              className="flex flex-row-reverse items-center justify-end gap-2 text-sm"
              href={"/faq"}
            >
              راهنمای رزرو <BsFillInfoCircleFill />{" "}
            </Link>
          </div>
          <ReservationModal />
        </div>
      </div>
    </>
  );
};

export default Reservation;
