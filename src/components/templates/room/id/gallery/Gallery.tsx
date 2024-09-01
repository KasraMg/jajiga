import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { VillaDetails } from "@/src/types/Villa.types";

const Gallery = (data: VillaDetails) => {
  const imageLoadedRef = useRef<boolean[]>(
    Array(data?.cover?.length).fill(false),
  );
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    imageLoadedRef.current,
  ); 

  const handleImageLoad = (index: number) => {
    if (!imageLoadedRef.current[index]) {
      imageLoadedRef.current[index] = true;
      setImageLoaded([...imageLoadedRef.current]);
    }
  }; 
  return (
    <section>
      <div className="mb-4 hidden h-[300px] gap-x-3 px-4 md:!flex xl:!px-0">
        <div className="relative w-1/2">
          {!imageLoaded[0] && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-full animate-pulse rounded-xl bg-shimmer"></div>
            </div>
          )}
          <Image
            width={1000}
            height={1000}
            className="h-full w-full rounded-xl"
            alt="cover"
            onLoadingComplete={() => handleImageLoad(0)}
            src={`https://jajiga-backend.liara.run/villa/covers/${data.cover[0]}`}
          />
        </div>
        <div className="grid w-1/2 grid-cols-2 gap-3">
          {data.cover.slice(1,5).map((cover, index) => (
            <div key={crypto.randomUUID()} className="relative">
              {!imageLoaded[index + 1] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full animate-pulse rounded-lg bg-shimmer"></div>
                </div>
              )}
              <Image
                width={1000}
                height={1000}
                className="h-36 w-full rounded-lg object-cover"
                alt="cover"
                onLoadingComplete={() => handleImageLoad(index + 1)}
                src={`https://jajiga-backend.liara.run/villa/covers/${cover}`}
              />
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
            {!imageLoaded[index + 1] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-full animate-pulse rounded-xl bg-shimmer"></div>
              </div>
            )}
            <Image
              width={1000}
              height={1000}
              className="h-full object-cover"
              alt="cover"
              onLoadingComplete={() => handleImageLoad(index + 1)}
              src={`https://jajiga-backend.liara.run/villa/covers/${cover}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
