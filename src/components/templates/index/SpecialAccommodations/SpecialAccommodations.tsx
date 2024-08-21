"use client";
import React from "react";
import Slider from "@/src/components/modules/slider/Slider";
import Card from "../../../modules/card/Card";
import { baseUrl } from "@/src/utils/utils";
import useGetData from "@/src/hooks/useGetData";
import { getPrivilegedVillas } from "@/src/utils/fetchs";

const SpecialAccommodations = () => {
  const { data, status, isLoading } = useGetData<any>(
    ["privilegedVillas"],
    getPrivilegedVillas,
  );
  console.log(data);

  return (
    <div>
      <p className="text-xl">اقامتگاه های ممتاز</p>
      <span className="mb-1 text-sm text-[#666]">
        اﻗﺎﻣﺘﮕﺎه‌ﻫﺎی متفاوت و جذاب ﺑﺮای اﻓﺮاد ﺧﺎص
      </span>
      {data && data.statusCode === 200 && (
        <Slider
          Card={Card}
          navigation={true}
          className="mb-12 mt-4 sm:!pl-6"
          data={data.villas}
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
      )}
    </div>
  );
};

export default SpecialAccommodations;
