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
import usePostData from "@/src/hooks/usePostData";
import { ButtonLoader } from "@/src/components/modules/loader/Loader";
import ReservationStepper from "./components/ReservationStepper";

interface userSelectData {
  fridays: number;
  holyDays: number;
  holyDaysTotalPrice: number;
  midWeekTotalPrice: number;
  midWeeks: number;
  statusCode: number;
  thursdays: number;
  totalDays: number;
  totalPrice: number;

  firstMonthDays: number;
  firstMonthHoliDays: number;
  firstMonthHoliDaysPrice: number;
  firstMonthMidWeekDays: number;
  firstMonthMidWeekDaysPrice: number;
  secondMonthDays: number;
  secondMonthHoliDays: number;
  secondMonthHoliDaysPrice: number;
  secondMonthMidWeekDays: number;
  secondMonthMidWeekDaysPrice: number;
}
const Reservation = (data: userVillasObj) => {
  const [countSelectedOption, setCountSelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);

  const params = useParams();
  const { startDate, endtDate } = roomStore((state) => state);
  const [disable, setDisable] = useState(true);
  const [userSelectData, setUserSelectData] = useState<userSelectData | null>();
  const successFunc = (data: userSelectData) => {
    if (data.statusCode === 200) {
      setUserSelectData(data);
    }
  };

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

  const { mutate: mutation, isPending } = usePostData<any>(
    `/villa/book/price/${params.id}`,
    null,
    false,
    successFunc,
  );

  useEffect(() => {
    if (userSelectData) setDisable(false);
    console.log(userSelectData);
  }, [userSelectData]);

  useEffect(() => {
    if (!endtDate || !countSelectedOption) setUserSelectData(null);
    if (countSelectedOption && startDate && endtDate) {
      const data = {
        date: {
          from: startDate,
          to: endtDate,
        },
      };
      mutation(data);
    }
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

          {userSelectData && (
            <>
              {userSelectData.firstMonthDays ? (
                <div
                  className="mt-6 p-2 px-5 text-[.8rem] font-light text-gray-600"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                  }}
                >
                  <span>ماه اول</span>

                  {userSelectData.firstMonthMidWeekDays !== 0 && (
                    <div className="flex justify-between border-b border-solid border-gray-300 py-3 pb-3">
                      <p>
                        {" "}
                        {userSelectData.firstMonthMidWeekDays} شب *{" "}
                        {userSelectData.firstMonthMidWeekDaysPrice.toLocaleString()}{" "}
                        تومان{" "}
                      </p>
                      <p>
                        {(
                          userSelectData.firstMonthMidWeekDays *
                          userSelectData.firstMonthMidWeekDaysPrice
                        ).toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  )}
                  {userSelectData.firstMonthHoliDays !== 0 && (
                    <div className="flex justify-between border-b border-solid border-gray-300 py-3 pb-3">
                      <p>
                        {" "}
                        {userSelectData.firstMonthHoliDays} شب *{" "}
                        {userSelectData.firstMonthHoliDaysPrice.toLocaleString()}{" "}
                        تومان{" "}
                      </p>
                      <p>
                        {(
                          userSelectData.firstMonthHoliDays *
                          userSelectData.firstMonthHoliDaysPrice
                        ).toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  )}

                  <span className="mt-3 block">ماه دوم</span>

                  {userSelectData.secondMonthMidWeekDays !== 0 && (
                    <div className="flex justify-between border-b border-solid border-gray-300 py-3 pb-3">
                      <p>
                        {" "}
                        {userSelectData.secondMonthMidWeekDays} شب *{" "}
                        {userSelectData.secondMonthMidWeekDaysPrice.toLocaleString()}{" "}
                        تومان{" "}
                      </p>
                      <p>
                        {(
                          userSelectData.secondMonthMidWeekDays *
                          userSelectData.secondMonthMidWeekDaysPrice
                        ).toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  )}
                  {userSelectData.secondMonthHoliDays !== 0 && (
                    <div className="flex justify-between border-b border-solid border-gray-300 py-3 pb-3">
                      <p>
                        {" "}
                        {userSelectData.secondMonthHoliDays} شب *{" "}
                        {userSelectData.secondMonthHoliDaysPrice.toLocaleString()}{" "}
                        تومان{" "}
                      </p>
                      <p>
                        {(
                          userSelectData.secondMonthHoliDays *
                          userSelectData.secondMonthHoliDaysPrice
                        ).toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between border-b border-solid border-gray-300 py-3 pb-3">
                    <p> مجموع اجاره‌بها - {userSelectData.totalDays} شب</p>
                    <p>{userSelectData.totalPrice.toLocaleString()} تومان</p>
                  </div>
                  <div className="flex justify-between py-3 text-black">
                    <p> مبلغ قابل پرداخت</p>
                    <p>{userSelectData.totalPrice.toLocaleString()} تومان</p>
                  </div>
                </div>
              ) : (
                <div
                  className="mt-6 p-2 px-5 text-[.8rem] font-light text-gray-600"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                  }}
                >
                  {userSelectData.midWeeks !== 0 && (
                    <div className="flex justify-between border-b border-solid border-gray-300 py-3 pb-3">
                      <p>
                        {" "}
                        {userSelectData.midWeeks} شب *{" "}
                        {userSelectData.midWeekTotalPrice.toLocaleString()}{" "}
                        تومان{" "}
                      </p>
                      <p>
                        {(
                          userSelectData.midWeeks *
                          userSelectData.midWeekTotalPrice
                        ).toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  )}
                  {userSelectData.holyDays !== 0 && (
                    <div className="flex justify-between border-b border-solid border-gray-300 py-3 pb-3">
                      <p>
                        {" "}
                        {userSelectData.holyDays} شب *{" "}
                        {userSelectData.holyDaysTotalPrice.toLocaleString()}{" "}
                        تومان{" "}
                      </p>
                      <p>
                        {(
                          userSelectData.holyDays *
                          userSelectData.holyDaysTotalPrice
                        ).toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-solid border-gray-300 py-3 pb-3">
                    <p> مجموع اجاره‌بها - {userSelectData.totalDays} شب</p>
                    <p>{userSelectData.totalPrice.toLocaleString()} تومان</p>
                  </div>
                  <div className="flex justify-between py-3 text-black">
                    <p> مبلغ قابل پرداخت</p>
                    <p>{userSelectData.totalPrice.toLocaleString()} تومان</p>
                  </div>
                </div>
              )}
            </>
          )}

          {isPending ? (
            <Button
              variant="yellow"
              disabled={disable}
              className="mt-5 h-[36px] w-full rounded-full text-center"
            >
              <ButtonLoader />
            </Button>
          ) : (
            <ReservationStepper
              disable={disable}
              data={data}
              totalPrice={userSelectData?.totalPrice.toLocaleString() as string}
              usersCount={countSelectedOption?.value as string}
              totalDays={userSelectData?.totalDays}
            />
          )}
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
