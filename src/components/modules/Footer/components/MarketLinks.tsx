import { FC } from "react";

interface ImageSrc {
  src: string;
}

const MarketLinks: FC<ImageSrc> = ({ src }) => {
  return (
    <>
      <div className="h-full w-full rounded-lg bg-black px-2 py-1 sm:!w-[150px] md:!w-[147px] lg:!w-full">
        <img src={src} alt="" className="w-full" />
      </div>
    </>
  );
};

export default MarketLinks;
