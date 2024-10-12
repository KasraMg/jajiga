import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Card = (data: {
  cover: string;
  persianTitle: string;
  title: string;
  count: number;
}) => {
  const [isCoverLoading, setIsCoverLoading] = useState(true);

  return (
    <Link
      href={`/rooms?city=${data.persianTitle}`}
      className="flex cursor-pointer items-center justify-center gap-2 sm:!justify-start"
    >
      {isCoverLoading && (
        <div className="h-[70px] w-[70px] animate-pulse rounded-lg bg-shimmer sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36"></div>
      )}
      <Image
        className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36"
        alt="img"
        width={1000}
        onLoad={() => setIsCoverLoading(false)}
        height={1000}
        crossOrigin="anonymous"
        src={`https://jajiga-backend.liara.run/static/city/${data.cover}`}
      />
      <div>
        <p className="font-vazir text-[12px] font-light">اجاره ویلا در</p>
        <span>{data.persianTitle}</span>
        <p className="font-vazir text-[12px] font-light">{data.count} ویلا</p>
      </div>
    </Link>
  );
};

export default Card;
