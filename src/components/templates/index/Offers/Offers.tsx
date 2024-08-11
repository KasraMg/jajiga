"use client"
import React from "react";
import Slider from "@/src/components/modules/slider/Slider";
import Card from "../../../modules/card/Card";
const Offers = () => {
  return (
    <div className="mt-8">
      <p className="mb-1 text-lg text-[#252a31]">ویلاهای لوکس و مجلل</p>
      <p className="mb-1 text-sm text-[#666]">
        ویلاهای لوکس و لاکچری برای مشکل پسندها
      </p>
      <Slider
        Card={Card}
        navigation={true}
        className="mySwiper mx-auto mt-4 w-full sm:!pl-6"
        breakPoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
      />
    </div>
  );
};

export default Offers;
