"use client";
import React from "react";
import Slider from "@/src/components/modules/slider/slider";
import Card from "../../../../modules/card/card";
import { usePrivilegedVillas } from "@/src/api/public";
import VillasSkeleton from "../villas/villas-skeleton";

const SpecialAccommodations = () => {
  const { data, isPending } = usePrivilegedVillas();

  return !isPending ? (
    data && data?.villas?.length > 0 ? (
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
    ) : (
      ""
    )
  ) : (
    <VillasSkeleton />
  );
};

export default SpecialAccommodations;
