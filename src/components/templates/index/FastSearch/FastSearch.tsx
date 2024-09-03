"use client"
import React from "react";
import Slider from "@/src/components/modules/slider/Slider";
import Card from "./components/Card";
import useGetData from "@/src/hooks/useGetData";
import { getFastSearchOptions } from "@/src/utils/fetchs";

const FastSearch = () => {

  const { data, status, isLoading } = useGetData<any>(
    ["FastSearch"],
    getFastSearchOptions,
  );
  
  return (
    <section className="pb-5 text-right">
      <p className="mb-5 text-xl text-black">جستجوی سریع</p>
      <Slider
        Card={Card}
        navigation={true}
        className="sm:!pl-6"
        data={data.orderedVillas}
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
