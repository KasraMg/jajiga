import React from "react";
import Slider from "@/src/components/modules/slider/Slider";
import Card from "./components/Card";

const FastSearch = () => {
  return (
    <section className="pb-5 text-right">
      <p className="mb-5 text-xl text-black">جستجوی سریع</p>
      <Slider
        Card={Card}
        navigation={true}
        className="sm:!pl-6"
        breakPoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
      />
    </section>
  );
};

export default FastSearch;
