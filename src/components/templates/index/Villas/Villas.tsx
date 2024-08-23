"use client";
import React, { useEffect, useState } from "react";
import CitiesSelector from "./components/CitiesSelector";
import Slider from "@/src/components/modules/slider/Slider";
import Card from "../../../modules/card/Card";
import useGetData from "@/src/hooks/useGetData";
import { getAllActivatedVillas } from "@/src/utils/fetchs";
import { userVillasObj } from "@/src/types/Auth.types";
import Image from "next/image";
const Villas = () => {
  const { data, isLoading } = useGetData<any>(
    ["allActivatedVillas"],
    getAllActivatedVillas,
  );
  const [status, setStatus] = useState("همه شهرها");
  const [villaData, setVillaData] = useState(data.villas);
  console.log(data);
  useEffect(() => {
    if (status === "همه شهرها") {
      setVillaData(data.villas);
    } else {
      const filtredResult = data.villas.filter(
        (villa: userVillasObj) => villa.address.city === status,
      );
      setVillaData(filtredResult);
    }
  }, [status]);

  return (
    <div className="superOfferBg relative z-20 overflow-hidden rounded-t-xl py-6">
      <div className="Container mx-auto px-3 sm:!px-4 xl:!px-0">
        <div className="mb-6 flex flex-col items-baseline justify-center lg:flex-row lg:justify-between">
          <p className="w-full text-2xl font-thin text-white">
            اقامتگاه های ویلایی
          </p>
          <CitiesSelector status={status} setStatus={setStatus} />
        </div>
        {villaData.length ? (
          <Slider
            Card={Card}
            navigation={true}
            data={villaData}
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
        ) : (
          <div className="text-center h-[263px] flex flex-col items-center gap-5">
            <Image
              alt="notFound"
              width={1000}
              className="mx-auto mt-10 w-[100px]"
              height={1000}
              src={"/images/notFound.png"}
            />
            <p className="text-white">اقامتگاهی در این شهر یافت نشد</p> 
          </div>
        )}
      </div>
    </div>
  );
};

export default Villas;
