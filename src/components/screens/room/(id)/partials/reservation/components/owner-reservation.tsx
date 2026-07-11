import { Button } from "@/src/components/shadcn/ui/button";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { VillaResponse } from "@/src/types/villa.types";
import Link from "next/link";
import React from "react";

const OwnerReservation = ({
  data,
  removeVilla,
}: {
  data: VillaResponse;
  removeVilla: () => void;
}) => {
  return data.villa.isAccepted === "true" ? (
    <div className="rounded-b-2xl px-4 py-[14px] shadow-lg">
      <Link
        href={"/user-rooms"}
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
        onClick={() => removeVilla()}
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
        برای ورود به پنل ادمین شماره 09046417084 رو وارد و سپس ورود با رمز عبور
        رو انتخاب کنید
      </p>
      <p>
        رمز ورود{" "}
        <span
          onClick={() => {
            navigator.clipboard.writeText("jajigaAdmin2024").then(() => {
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
  );
};

export default OwnerReservation;
