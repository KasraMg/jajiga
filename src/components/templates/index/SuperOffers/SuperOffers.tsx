"use client"
import React from "react";
import CitiesSelector from "./components/CitiesSelector";
import Slider from "@/src/components/modules/slider/Slider";
import Card from "../../../modules/card/Card";
const SuperOffers = () => {
  return (
    <div className="superOfferBg relative z-20 overflow-hidden rounded-t-xl py-6">
      <div className="Container mx-auto px-3 sm:!px-4 xl:!px-0">
        <div className="mb-6 flex flex-col items-baseline justify-center lg:flex-row lg:justify-between">
          <p className="w-full text-2xl font-thin text-white">
            تخفیف های سفر انگیز
          </p>
          <CitiesSelector />
        </div>
        <Slider
          Card={Card}
          navigation={true}
          className="mySwiper mx-auto w-full text-white sm:!pl-6"
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
    </div>
  );
};

export default SuperOffers;
