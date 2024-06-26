"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

import Card from "./components/Card/Card";
const PopularDestinations = () => {
  return (
    <section className="py-5 text-right">
      <p className="mb-5 text-xl text-black">مقاصد پر طرفدار</p>
      <Swiper
        dir="rtl"
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        rewind={true}
        spaceBetween={0}
        navigation={true}
        modules={[Grid, Navigation]}
        className="PopularSwiper mx-auto !h-[230px] w-full sm:!h-[260px] sm:!pl-[9px] lg:!h-[365px]"
      >
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="!mx-auto !h-[110px] sm:!h-[123px] lg:!h-[178px]">
          <Card />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PopularDestinations;
