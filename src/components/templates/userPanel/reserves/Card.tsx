import { Button } from "@/src/components/shadcn/ui/button";
import { book } from "@/src/types/Auth.types";
import { formatNumber } from "@/src/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CiStar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
interface CardProps {
  className?: string;
  data: book;
}
const Card: FC<CardProps> = ({ className, data }) => {
  return (
    <div className={`mx-auto w-full xl:!w-full ${className} `}>
      <Link href={`/room/${data._id}`} className="relative w-full">
        <Image
          className="h-52 w-full rounded-xl object-cover"
          alt="avatar"
          width={1000}
          height={1000}
          src={`https://jajiga-backend.liara.run/villa/covers/${data.villa.cover[0]}`}
        />
        {data.villa.costly && (
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
          <p>
            از {formatNumber(String(data.villa.price.autumn.midWeek))} تومان
          </p>
        </div>
      </Link>
      <div className="mt-3 flex items-center gap-2">
        <Link href={`/room/${data.villa._id}`} className="text-sm">
          اجاره{" "}
          {data.villa.aboutVilla.villaType.title === "ویلایی"
            ? "منزل ویلایی"
            : data.villa.aboutVilla.villaType.title}{" "}
          در {data.villa.address.city}
        </Link>
      </div>

      <div className="mt-2 flex items-center justify-center gap-1 rounded-lg bg-customYellow p-2">
        <p>
          از {data.date.from} الی {data.date.to}
        </p>
        <span className="text-xs text-red-600">({data.days} شب)</span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-2">
          <FiUsers />
          <p>{data.guestNumber} نفر</p>
        </div>
        <div className="flex gap-1 text-xs text-blue-600">
          <p>مبلغ پرداخت شده:</p>
          <p>{Number(data.price).toLocaleString()} تومان</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
