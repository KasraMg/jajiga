import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const Gallery = () => {
  return (
    <section>
      <div className="mb-4 hidden gap-x-3 md:!flex">
        <div className="w-1/2">
          <img
            src="https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg"
            alt=""
            className="h-full w-full rounded-xl !object-contain"
          />
        </div>
        <div className="grid w-1/2 grid-cols-2 gap-3">
          <div>
            <img
              src="https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
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
