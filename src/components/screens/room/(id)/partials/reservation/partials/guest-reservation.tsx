import Link from "next/link";
import ReservationStepper from "./reservation-stepper";
import Select from "react-select";
import { ButtonLoader } from "@/src/components/modules/loader/loader";
import { SlInfo } from "react-icons/sl";
import { useReservation } from "../hook";
import { VillaResponse } from "@/src/types/villa.types";
import { Button } from "@/src/components/shadcn/ui/button";

const GuestReservation = ({ data }: { data: VillaResponse }) => {
  const {
    startDate,
    endDate,
    login,
    reserveData,
    countSelectedOption,
    setCountSelectedOption,
    userSelectData,
    disable,
    isPending,
  } = useReservation();

  const userCountOptions: {
    label: string;
    value: string;
  }[] = [];

  for (let index = 0; index < data.villa.capacity.maxCapacity; index++) {
    userCountOptions.push({
      label: `${index + 1} نفر`,
      value: `${index + 1} نفر`,
    });
  }

  return data.villa.isAccepted === "true" ? (
    <div className="rounded-b-2xl px-4 py-[14px] shadow-lg">
      <p className="font-vazir mb-2 text-sm font-light text-[#252a31]">
        {reserveData ? "تاریخ رزرو شما" : " تاریخ سفر"}
      </p>
      <div className="flex items-center justify-evenly rounded-lg border border-[#d6d6d6] px-5 py-2">
        <div className="text-sm text-[#bac7d5]">
          <Link href="#calender">
            {" "}
            {reserveData ? (
              <p className="text-black">{reserveData.date.from}</p>
            ) : startDate ? (
              <p className="text-black">{startDate}</p>
            ) : (
              "تاریخ ورود"
            )}
          </Link>
        </div>
        <div className='mx-2 inline-block min-h-[30px] w-[1px] bg-[#d6d6d6] after:content-[""]'></div>
        <div className="text-sm text-[#bac7d5]">
          <Link href="#calender">
            {reserveData ? (
              <p className="text-black">{reserveData.date.to}</p>
            ) : endDate ? (
              <p className="text-black">{endDate}</p>
            ) : (
              "تاریخ خروج"
            )}
          </Link>
        </div>
      </div>
      <p className="font-vazir mb-2 mt-8 text-sm font-light text-[#252a31]">
        تعداد نفرات
      </p>
      <Select
        defaultValue={countSelectedOption}
        onChange={setCountSelectedOption as any}
        isClearable={true}
        className="w-full"
        isRtl={true}
        isDisabled={!login || reserveData ? true : false}
        isSearchable={true}
        options={userCountOptions as any}
        placeholder={
          reserveData ? reserveData.guestNumber : "تعداد نفرات را مشخص کنید"
        }
      />
      {reserveData ? (
        <div className="mt-2 flex gap-1 text-xs text-blue-600">
          <p>مبلغ پرداخت شده:</p>
          <p>{Number(reserveData.price).toLocaleString()} تومان</p>
        </div>
      ) : null}
      {userSelectData && (
        <>
          {userSelectData.firstMonthDays ? (
            <div
              className="mt-6 p-2 text-[.8rem] font-light text-gray-600 sm:!px-5"
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
              className="mt-6 p-2 text-[.8rem] font-light text-gray-600 sm:px-5"
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
                    {userSelectData.midWeekTotalPrice.toLocaleString()} تومان{" "}
                  </p>
                  <p>
                    {(
                      userSelectData.midWeeks * userSelectData.midWeekTotalPrice
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
                    {userSelectData.holyDaysTotalPrice.toLocaleString()} تومان{" "}
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
      ) : !login ? (
        <Link href="/login">
          <Button
            variant={"yellow"}
            className="mt-5 w-full rounded-full text-center"
          >
            <div className="text-textGray mx-auto flex items-baseline justify-center">
              <span> ابتدا ثبت نام یا لاگین کنید</span>
            </div>
          </Button>
        </Link>
      ) : reserveData ? (
        <>
          <div className="px- mt-5 h-[36px] w-full cursor-not-allowed rounded-full bg-red-600 py-2 text-center text-white">
            <div className="text-textGray mx-auto flex items-baseline justify-center">
              <span className="text-sm"> این ویلا توسط شما رزرو شده است </span>
            </div>
          </div>
          <Link
            href={"/reserves"}
            className="mt-2 block w-full text-left text-[10px] text-red-600"
          >
            (مشاهده تمامی رزرو ها )
          </Link>
        </>
      ) : (
        <ReservationStepper
          disable={disable}
          data={data.villa}
          totalPrice={userSelectData?.totalPrice.toLocaleString() as string}
          usersCount={countSelectedOption?.value as any}
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
  ) : (
    <div className="space-y-3 rounded-b-2xl p-3 text-sm shadow-lg">
      {data.villa.isAccepted === "rejected" ? (
        <p className="text-center">
          این اقامتگاه توسط ادمین <span className="text-red-600">رد</span> شده
          است
        </p>
      ) : (
        <>
          <p>
            ادمین محترم این اقامتگاه هنوز توسط شما{" "}
            <span className="text-red-600">تایید نشده</span> است
          </p>
          <p>
            به{" "}
            <Link className="text-blue-600" href={"/adminPanel/rooms"}>
              داشبورد
            </Link>{" "}
            مراجعه کرده و این اقامتگاه را رد یا تایید کنید.
          </p>
        </>
      )}
    </div>
  );
};

export default GuestReservation;
