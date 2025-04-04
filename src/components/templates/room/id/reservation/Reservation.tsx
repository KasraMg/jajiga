import React, { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import { SlInfo } from "react-icons/sl";
import Link from "next/link";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ReservationModal from "./components/ReservationModal";
import { Button } from "@/src/components/shadcn/ui/button";
import { VillaResponse, UserDateSelectData } from "@/src/types/Villa.types";
import { roomStore } from "@/src/stores/room";
import { useParams } from "next/navigation";
import { todayVillaPrice } from "@/src/utils/utils";
import usePostData from "@/src/hooks/usePostData";
import Loader, { ButtonLoader } from "@/src/components/modules/loader/Loader";
import ReservationStepper from "./components/ReservationStepper";
import { authStore } from "@/src/stores/auth";
import { Book } from "@/src/types/Auth.types";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import useDeleteData from "@/src/hooks/useDeleteData";

const Reservation = (data: VillaResponse) => {
  const [reserveData, setReserveData] = useState<null | Book>(null);
  const [countSelectedOption, setCountSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const params = useParams();
  const { startDate, endDate, setStartDate, setEndDate } = roomStore(
    (state) => state,
  );
  const { login, userData } = authStore((state) => state);
  const [disable, setDisable] = useState(true);
  const [userSelectData, setUserSelectData] =
    useState<UserDateSelectData | null>();
  const successFunc = (data: UserDateSelectData) => {
    if (data.statusCode === 200) {
      setUserSelectData(data);
    }
  };
  const price = todayVillaPrice(data.villa.price);
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

  const { mutate: mutation, isPending } = usePostData<any>(
    `/villa/Book/price/${params.id}`,
    null,
    false,
    successFunc,
  );
  const { mutate: deleteMutation, isPending: deleteMutationPending } =
    useDeleteData(
      `/villa/delete/${data.villa._id}`,
      "ویلا با موفقیت حذف شد",
      "villa",
    );

  useEffect(() => {
    if (userSelectData) setDisable(false);
  }, [userSelectData]);

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

  useEffect(() => {
    if (!endDate || !countSelectedOption) setUserSelectData(null);
    if (countSelectedOption && startDate && endDate && login) {
      const data = {
        date: {
          from: startDate,
          to: endDate,
        },
      };
      mutation(data);
    }
  }, [countSelectedOption, startDate, endDate, login]);

  useEffect(() => {
    setStartDate(null);
    setEndDate(null);
  }, []);

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
        {data.villa.isOwner ? (
          data.villa.isAccepted === "true" ? (
            <div className="rounded-b-2xl px-4 py-[14px] shadow-lg">
              <Link
                href={"/all"}
                className="block text-center text-xs text-red-600"
              >
                برای مشاهده رزرو ها کلیک کنید
              </Link>
              <Link href={`/room/edit/${data.villa._id}`}>
                <Button
                  variant={"yellow"}
                  className="mt-5 w-full justify-center rounded-full text-center"
                >
                  <span>ویرایش اقامتگاه </span>
                </Button>
              </Link>
            </div>
          ) : data.villa.isAccepted === "rejected" ? (
            <div className="space-y-3 rounded-b-2xl p-3 text-center text-sm shadow-lg">
              <p className="text-red-600">
                این اقامتگاه به دلایلی توسط ادمین سایت رد شده است
              </p>
              <p>
                در صورت اعتراض یا هرگونه انتقاد با{" "}
                <Link className="text-blue-600" href={"/support"}>
                  پشتیبان سایت
                </Link>{" "}
                در ارتباط باشید
              </p>
              <Button
                variant={"danger"}
                onClick={() => deleteMutation()}
                className="mt-5 w-full justify-center rounded-full text-center"
              >
                <span>حذف اقامتگاه</span>
              </Button>
            </div>
          ) : (
            <div className="space-y-3 rounded-b-2xl p-3 text-sm shadow-lg">
              <p>
                اقامتگاه شما هنوز توسط ادمین سایت{" "}
                <span className="text-red-600"> تایید نشده </span> است
              </p>
              <p>
                برای ورود به پنل ادمین شماره 09046417084 رو وارد و سپس ورود با
                رمز عبور رو انتخاب کنید
              </p>
              <p>
                رمز ورود{" "}
                <span
                  onClick={() => {
                    navigator.clipboard
                      .writeText("jajigaAdmin2024")
                      .then(() => {
                        toast({
                          variant: "success",
                          title: "رمز با موفقیت کپی شد",
                        });
                      });
                  }}
                  className="cursor-pointer text-red-600"
                >
                  jajigaAdmin2024
                </span>{" "}
                است و سپس اقامتگاه خودتان را تایید کنید.
              </p>
            </div>
          )
        ) : data.villa.isAccepted === "true" ? (
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
                reserveData
                  ? reserveData.guestNumber
                  : "تعداد نفرات را مشخص کنید"
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
                    <span className="text-sm">
                      {" "}
                      این ویلا توسط شما رزرو شده است{" "}
                    </span>
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
                totalPrice={
                  userSelectData?.totalPrice.toLocaleString() as string
                }
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
                این اقامتگاه توسط ادمین <span className="text-red-600">رد</span>{" "}
                شده است
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
        )}
      </div>
      <div className="fixed bottom-16 block w-full px-5 md:!hidden">
        <div className="z-[999] flex w-full items-center justify-between rounded-lg bg-[#000000ba] px-2 py-3 text-white">
          {data.villa.isAccepted === "rejected" ? (
            <div className="text-xs">
              <p className="text-customYellow">
                این اقامتگاه به دلایلی توسط ادمین سایت رد شده است
              </p>
              <p className="mt-2">
                در صورت اعتراض یا هرگونه انتقاد با{" "}
                <Link className="text-blue-600" href={"/support"}>
                  پشتیبان سایت
                </Link>{" "}
                در ارتباط باشید
              </p>
            </div>
          ) : data.villa.isAccepted === "true" ? (
            <>
              <div>
                <p className="text-xs">
                  هر شب از <span className="text-sm">{price}</span> تومان{" "}
                </p>
                <Link
                  className="flex flex-row-reverse items-center justify-end gap-2 text-sm"
                  href={"/faq"}
                >
                  راهنمای رزرو <BsFillInfoCircleFill />{" "}
                </Link>
              </div>
              {data.villa.user._id === userData?.user._id ? (
                <Link href={`/room/edit/${data.villa._id}`}>
                  <Button
                    variant={"yellow"}
                    className="w-full justify-center rounded-full text-center"
                  >
                    <span>ویرایش اقامتگاه </span>
                  </Button>
                </Link>
              ) : (
                <ReservationModal
                  data={data.villa}
                  count={data.villa.capacity.maxCapacity as number}
                />
              )}
            </>
          ) : (
            <div className="space-y-2 text-xs">
              <p>
                اقامتگاه شما هنوز توسط ادمین سایت{" "}
                <span className="text-customYellow"> تایید نشده </span> است
              </p>
              <p>
                برای ورود به پنل ادمین شماره{" "}
                <span
                  onClick={() => {
                    navigator.clipboard.writeText("09046417084").then(() => {
                      toast({
                        variant: "success",
                        title: "شماره تلفن با موفقیت کپی شد",
                      });
                    });
                  }}
                  className="cursor-pointer text-customYellow"
                >
                  09046417084
                </span>{" "}
                رو وارد و سپس ورود با رمز عبور رو انتخاب کنید.
              </p>
              <p>
                رمز ورود{" "}
                <span
                  onClick={() => {
                    navigator.clipboard
                      .writeText("jajigaAdmin2024")
                      .then(() => {
                        toast({
                          variant: "success",
                          title: "رمز با موفقیت کپی شد",
                        });
                      });
                  }}
                  className="cursor-pointer text-customYellow"
                >
                  jajigaAdmin2024
                </span>{" "}
                است و سپس اقامتگاه خودتان را تایید کنید.
              </p>
            </div>
          )}

          {deleteMutationPending && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Reservation;
