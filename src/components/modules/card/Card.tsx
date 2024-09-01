import React, { FC } from "react";
import { SlEnergy } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { Button } from "@/src/components/shadcn/ui/button";
import { VillaDetails } from "@/src/types/Villa.types";
import Image from "next/image";
import { typeOptions } from "@/src/utils/options";
import { formatNumber } from "@/src/utils/utils";
import Link from "next/link";

interface CardProps {
  className?: string; 
  data: VillaDetails;
}
const Card: FC<CardProps> = ({ data, className }) => {
  return (
    data && (
      <Link
        href={`/room/${data._id}`}
        className={`mx-auto w-full xl:!w-full ${className} `}
      >
        <div className="relative w-full">
          <Image
            className="h-52 w-full rounded-xl object-cover"
            alt="avatar"
            width={1000}
            height={1000}
            src={`https://jajiga-backend.liara.run/villa/covers/${data.cover[0]}`}
          />
          {data.costly && (
            <div className="absolute right-[2px] top-[2px] flex flex-col p-2">
              <Button
                size={"sm"}
                variant={"yellow"}
                className="font-vazir w-[78px] font-light"
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
        </div>
        <p className="mt-3 text-sm">
          اجاره{" "}
          {data.aboutVilla.villaType.title === "ویلایی"
            ? "منزل ویلایی"
            : data.aboutVilla.villaType.title}{" "}
          در {data.address.city}
        </p>
        <div className="font-vazir mt-1 flex items-center gap-1 text-xs font-light text-[#939cae]">
          <p>{data.capacity.bedRoom} خوابه . </p>
          <p> {data.capacity.fuundationSize} متر . </p>
          <p>تا {data.capacity.maxCapacity} مهمان</p>
          {/* <div className="flex items-center gap-1">
          <IoIosStar className="text-sm text-yellow-400" />
          <p className="pt-1"> 4.9</p>
        </div> */}
          <p className="pt-1">(0 نظر)</p>
        </div>
      </Link>
    )
  );
};

export default Card;
