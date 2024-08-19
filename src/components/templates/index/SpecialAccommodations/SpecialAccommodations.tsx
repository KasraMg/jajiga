"use client"
import React from "react";
import Slider from "@/src/components/modules/slider/Slider";
import Card from "../../../modules/card/Card";
import { baseUrl } from "@/src/utils/utils"; 
import useGetData from "@/src/hooks/useGetData";

const SpecialAccommodations = () => {

  async function getAllVillas(){    
    const res = await fetch(`${baseUrl}/villa/getAllActivated`, { 
    });
    return res.json();
  }
  const { data, status, isLoading } = useGetData<any>(["villa"], getAllVillas); 
  console.log(data);
  
  return (
    <div>
      <p className="text-xl">اقامتگاه های خاص</p>
      <span className="mb-1 text-sm text-[#666]">
        اﻗﺎﻣﺘﮕﺎه‌ﻫﺎی متفاوت و جذاب ﺑﺮای اﻓﺮاد ﺧﺎص
      </span>
      {/* <Slider
        Card={Card}
        navigation={true}
        className="mb-12 mt-4 sm:!pl-6"
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
      /> */}
    </div>
  );
};

export default SpecialAccommodations;
