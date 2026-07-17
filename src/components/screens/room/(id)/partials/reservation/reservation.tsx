import React from "react";
import Link from "next/link";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ReservationModal from "./partials/reservation-modal";
import { Button } from "@/src/components/shadcn/ui/button";
import { VillaResponse } from "@/src/types/villa.types";
import Loader from "@/src/components/modules/loader/loader";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { useReservation } from "./hook";
import { todayVillaPrice } from "@/src/utils/utils";
import OwnerReservation from "./partials/owner-reservation";
import GuestReservation from "./partials/guest-reservation";

const Reservation = (data: VillaResponse) => {
  const { userData, deletePending, removeVilla } = useReservation();
  const price = todayVillaPrice(data.villa.price);

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
          <OwnerReservation removeVilla={removeVilla} data={data} />
        ) : (
          <GuestReservation data={data} />
        )}
      </div>
      <div className="fixed bottom-16 z-[500] block w-full px-5 md:!hidden">
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
              {data.villa.isOwner ? (
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
                      .writeText("jajigaAdmin2026")
                      .then(() => {
                        toast({
                          variant: "success",
                          title: "رمز با موفقیت کپی شد",
                        });
                      });
                  }}
                  className="cursor-pointer text-customYellow"
                >
                  jajigaAdmin2026
                </span>{" "}
                است و سپس اقامتگاه خودتان را تایید کنید.
              </p>
            </div>
          )}

          {deletePending && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Reservation;
