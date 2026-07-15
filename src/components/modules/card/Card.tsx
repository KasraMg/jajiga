import React, { FC } from "react";
import { CiStar } from "react-icons/ci";
import { Button } from "@/src/components/shadcn/ui/button";
import { VillaDetails } from "@/src/types/villa.types";
import Image from "next/image";
import { formatNumber } from "@/src/utils/utils";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { ButtonLoader } from "../loader/loader";
import { useToggleWish } from "@/src/api/wishes";
import { toast } from "../../shadcn/ui/use-toast";

interface CardProps {
  className?: string;
  data: VillaDetails;
  wishes?: boolean;
}
const Card: FC<CardProps> = ({ data, className, wishes }) => {
  const { mutate: toggleWish, isPending } = useToggleWish();

  const deleteFromWishesHandler = () => {
    toggleWish(
      { villaId: data._id, flag: false },
      {
        onSuccess: () => {
          toast({
            variant: "success",
            title: "اقامتگاه با موفقیت از علاقه‌مندی‌های شما حذف شد",
          });
        },
      },
    );
  };
  return (
    data && (
      <div className={`mx-auto w-full xl:!w-full ${className} `}>
        <Link href={`/room/${data._id}`} className="relative w-full">
          <Image
            className="h-52 w-full rounded-xl object-cover"
            alt="avatar"
            width={1000}
            height={1000}
            src={`${process.env.NEXT_PUBLIC_API_URL}/villa/covers/${data.cover[0]}`}
          />
          {data.costly && (
            <div className="absolute right-[2px] top-[2px] flex flex-col p-2">
              <Button
                size={"sm"}
                variant={"yellow"}
                className="w-[78px] font-light"
              >
                <CiStar className="ml-1" />
                مـمـتــــــاز
              </Button>
            </div>
          )}

          <div
            style={{
              background:
                "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%) 0% 0% / cover",
            }}
            className="absolute bottom-0 right-0 w-full rounded-xl pb-3 pr-3 text-sm text-white"
          >
            <p>از {formatNumber(String(data.price.autumn.midWeek))} تومان</p>
          </div>
        </Link>
        <div className="mt-3 flex items-center gap-2">
          <Link href={`/room/${data._id}`} className="text-sm">
            اجاره{" "}
            {data.aboutVilla.villaType?.title === "ویلایی"
              ? "منزل ویلایی"
              : data.aboutVilla.villaType?.title}{" "}
            در {data.address.city}
          </Link>
          {data.booked && data.booked !== 0 ? (
            <p className="text-xs font-light text-[#939cae]">
              +{data.booked as any} رزرو موفق
            </p>
          ):''}
        </div>

        <div className="mt-1 flex items-center gap-1 text-xs font-light text-[#939cae]">
          <p>{data.capacity.bedRoom} خوابه . </p>
          <p> {data.capacity.fuundationSize} متر . </p>
          <p>تا {data.capacity.maxCapacity} مهمان</p>
          {data.comments ? <p className="pt-1">({data.comments} نظر)</p> : ""}
        </div>
        {wishes && (
          <Button
            variant={"danger"}
            className="mt-2 h-9 w-full justify-center font-light"
            onClick={deleteFromWishesHandler}
          >
            {isPending ? (
              <ButtonLoader />
            ) : (
              <>
                <FaTrash className="ml-1" /> حذف{" "}
              </>
            )}
          </Button>
        )}
      </div>
    )
  );
};

export default Card;
