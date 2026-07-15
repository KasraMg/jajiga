import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { VillaDetails } from "@/src/types/villa.types";
import { IoImageOutline } from "react-icons/io5";
import FullScreenGallery from "./full-screen-gallery";

const Gallery = (data: VillaDetails) => {
  const [showFullScreenGallery, setShowFullScreenGallery] = useState(false);
  return (
    <section>
      <div className="mb-4 hidden h-[300px] gap-x-3 px-4 md:!flex xl:!px-0">
        <div className="relative w-1/2">
          <Image
            width={1000}
            height={1000}
            className="h-full w-full rounded-xl"
            alt="cover"
            src={`${process.env.NEXT_PUBLIC_API_URL}/villa/covers/${data.cover[0]}`}
          />
        </div>
        <div className="grid w-1/2 grid-cols-2 gap-3">
          {data.cover.slice(1, 5).map((cover, index) => (
            <div key={crypto.randomUUID()} className="relative">
              {index + 1 === 4 && data.cover.slice(1).length > 4 ? (
                <>
                  <Image
                    width={1000}
                    height={1000}
                    className="h-36 w-full rounded-lg object-cover opacity-50"
                    alt="cover"
                    src={`${process.env.NEXT_PUBLIC_API_URL}/villa/covers/${cover}`}
                  />
                  <div
                    onClick={() => setShowFullScreenGallery(true)}
                    className="absolute left-1/2 top-1/2 flex w-max -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm transition-colors hover:opacity-70"
                  >
                    <IoImageOutline className="text-2xl" />
                    <p>مشاهده بیشتر</p>
                  </div>
                </>
              ) : (
                <Image
                  width={1000}
                  height={1000}
                  className="h-36 w-full rounded-lg object-cover"
                  alt="cover"
                  src={`${process.env.NEXT_PUBLIC_API_URL}/villa/covers/${cover}`}
                />
              )}
            </div>
          ))}

          {data.cover.slice(1).length < 4 &&
            Array(4 - data.cover.slice(1).length)
              .fill(0)
              .map((_, index) => (
                <Image
                  width={1000}
                  height={1000}
                  key={index}
                  className="h-36 w-full rounded-lg object-cover"
                  alt="cover"
                  src="/images/img.jpg"
                />
              ))}
        </div>
      </div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="mySwiper room-gallery-slider block h-[270px] w-full md:!hidden"
        rewind
        modules={[Pagination]}
      >
        {data.cover.slice(1).map((cover, index) => (
          <SwiperSlide key={crypto.randomUUID()} className="relative">
            <Image
              width={1000}
              height={1000}
              className="h-full object-cover"
              alt="cover"
              src={`${process.env.NEXT_PUBLIC_API_URL}/villa/covers/${cover}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {showFullScreenGallery && (
        <FullScreenGallery
          images={data.cover}
          setShowFullScreenGallery={setShowFullScreenGallery}
        />
      )}
    </section>
  );
};

export default Gallery;
