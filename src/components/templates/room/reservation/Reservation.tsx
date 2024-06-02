import React from "react";
import Button from "@/src/components/modules/button";
import { useState } from "react";
import Select from "react-select";
import { userCountOptions } from "@/src/utils/selectOptions";
import { SlInfo } from "react-icons/sl";
import Link from "next/link";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ReservationModal from "./components/ReservationModal";
const Reservation = () => {
  const [countSelectedOption, setCountSelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);
  return (
    <>
      <div className="sticky top-[68px] hidden w-[33.33%] md:!block">
        <div className="flex items-center justify-between rounded-t-2xl bg-[#404040] px-4 py-[14px] text-white">
          <p className="text-sm lg:!text-base">نرخ هر شب از:</p>
          <div className="flex">
            <p className="text-sm lg:!text-base">1,450,000</p>
            <p className="mr-1 text-sm">تومان</p>
          </div>
        </div>
        <div className="rounded-b-2xl px-4 py-[14px] shadow-lg">
          <p className="font-vazir mb-2 text-sm font-light text-[#252a31]">
            تاریخ سفر
          </p>
          <div className="flex items-center justify-between rounded-lg border border-[#d6d6d6] px-5 py-2">
            <div className="text-sm text-[#bac7d5]">
              <p>تاریخ ورود</p>
            </div>
            <div className='mx-2 inline-block min-h-[30px] w-[1px] bg-[#d6d6d6] after:content-[""]'></div>
            <div className="text-sm text-[#bac7d5]">
              <p>تاریخ خروج</p>
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
