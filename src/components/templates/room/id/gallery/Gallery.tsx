import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { userVillasObj } from "@/src/types/Auth.types";
const Gallery = (data: userVillasObj) => {
  return (
    <section>
      <div className="mb-4 hidden h-[300px] gap-x-3 md:!flex px-4 xl:!px-0">
        <div className="w-1/2">
          <Image
            width={1000}
            height={1000}
            className="h-full w-full rounded-xl"
            alt="cover"
            src={`https://jajiga-backend.liara.run/villa/covers/${data.cover[0]}`}
          />
        </div>
        <div className="grid w-1/2 grid-cols-2 gap-3">
          {data.cover.slice(1).map((cover) => (  
            <Image
              width={1000}
              height={1000}
              className="w-full rounded-lg object-cover h-36"
              alt="cover"
              src={`https://jajiga-backend.liara.run/villa/covers/${cover}`}
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
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            alt="slider-image"
            width={1000}
            height={1000}
            src="/images/home-header-bg-3@1920.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            alt="slider-image"
            width={1000}
            height={1000}
            src="/images/home-header-bg-3@1920.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
