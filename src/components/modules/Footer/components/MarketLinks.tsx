import Link from "next/link";
import { FC } from "react";

interface ImageSrc {
  src: string;
  href: string
}

const MarketLinks: FC<ImageSrc> = ({ src,href }) => {
  return (
    <>
      <Link href={href} className="h-full w-full rounded-lg bg-black px-2 py-1 sm:!w-[150px] md:!w-[147px] lg:!w-full">
        <img src={src} alt="" className="w-full" />
      </Link>
    </>
  );
};

export default MarketLinks;
