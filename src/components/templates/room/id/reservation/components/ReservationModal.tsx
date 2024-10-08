import { Button } from "@/src/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent, 
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { useEffect, useState } from "react";
import Select from "react-select";
import Link from "next/link";
import { SlInfo } from "react-icons/sl";
import { roomStore } from "@/src/stores/room";
import { authStore } from "@/src/stores/auth";
import usePostData from "@/src/hooks/usePostData";
import { VillaDetails, UserDateSelectData } from "@/src/types/Villa.types";
import { useParams } from "next/navigation";
import ReservationStepper from "./ReservationStepper";
import { ButtonLoader } from "@/src/components/modules/loader/Loader";

const customStyles = {
  menu: (provided: any) => ({
    ...provided,
    maxHeight: 120,
    overflowY: "auto",
  }),
  menuList: (provided: any) => ({
    ...provided,
    maxHeight: 120,
    overflowY: "auto",
  }),
};

const ReservationModal = ({
  count,
  data,
}: {
  count: number;
  data: VillaDetails;
}) => {
  const [countSelectedOption, setCountSelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);
  const { startDate, endDate } = roomStore((state) => state);
  const [openReserveModal, setOpenReserveModal] = useState(false);
  const { login } = authStore((state) => state);
  const [disable, setDisable] = useState(true);
  const [userSelectData, setUserSelectData] =
    useState<UserDateSelectData | null>();
  const params = useParams();

  const successFunc = (data: UserDateSelectData) => {
    if (data.statusCode === 200) {
      setUserSelectData(data);
    }
  };

  const { mutate: mutation, isPending } = usePostData<any>(
    `/villa/Book/price/${params.id}`,
    null,
    false,
    successFunc,
  );

  const userCountOptions: {
    label: string;
    value: string;
  }[] = [];

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
    if (userSelectData) setDisable(false);
  }, [userSelectData]);

  for (let index = 0; index < count; index++) {
    userCountOptions.push({
      label: `${index + 1} نفر`,
      value: `${index + 1} نفر`,
    });
  }

  return (
    <Dialog open={openReserveModal} onOpenChange={setOpenReserveModal}>
      <DialogTrigger asChild>
        <Button variant={"yellow"} className="rounded-full">
          <span>درخواست رزرو</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[440px] w-full max-w-full overflow-y-scroll sm:!max-w-[425px]">
        <div className="rounded-b-2xl py-[14px] sm:px-4">
          <p className="font-vazir mb-2 text-sm font-light text-[#252a31]">
            تاریخ سفر
          </p>
          <Link
            href="#calender"
            onClick={() => setOpenReserveModal(false)}
            className="flex items-center justify-evenly rounded-lg border border-[#d6d6d6] px-5 py-2"
          >
            <div className="text-sm text-[#bac7d5]">
              {startDate ? (
                <p className="text-black">{startDate}</p>
              ) : (
                "تاریخ ورود"
              )}{" "}
            </div>
            <div className='mx-2 inline-block min-h-[30px] w-[1px] bg-[#d6d6d6] after:content-[""]'></div>
            <div className="text-sm text-[#bac7d5]">
              {endDate ? <p className="text-black">{endDate}</p> : "تاریخ خروج"}{" "}
            </div>
          </Link>
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
            styles={customStyles}
            options={userCountOptions as any}
            placeholder={"تعداد نفرات را مشخص کنید"}
          />

          {userSelectData && (
            <>
              {userSelectData.firstMonthDays ? (
                <div
                  className="mt-6 p-2 text-[.8rem] font-light text-gray-600 sm:px-5"
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
          ) : (
            <ReservationStepper
              disable={disable}
              data={data}
              totalPrice={userSelectData?.totalPrice.toLocaleString() as string}
              usersCount={countSelectedOption?.value as any}
              totalDays={userSelectData?.totalDays}
            />
          )}
          <Link href={"/faq"}>
            <Button
              className="!relative !bottom-0 !left-0 !right-0 !top-0 mt-5 w-full justify-center border-[#00000028]"
              variant={"white"}
            >
              <SlInfo className="!h-5 !w-5 !text-black" />
              راهنمای رزرو
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
