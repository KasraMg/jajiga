import useGetData from "@/src/hooks/useGetData";
import { userVillasObj } from "@/src/types/Auth.types";
import { fetchStep6Items } from "@/src/utils/clientFetchs";
import { zoneOptions } from "@/src/utils/selectOptions";
import React, { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";

const Infoes = (data: userVillasObj) => {
  const [facibilityData, setFacilityData] = useState([]);
  const villaZone = zoneOptions.find(
    (zone) => zone.value === data.aboutVilla.villaZone,
  );
  const { data: facibility, status } = useGetData(
    ["server_step_6_items"],
    fetchStep6Items,
  );

  useEffect(() => {
    if (facibility && facibility.statusCode === 200) {
      const newFacilities = facibility?.facility?.map((item: any) => ({
        engtitle: item.engTitle,
        title: item.title,
        status: false,
        description: "",
      }));

      const facilityData = data.facility.facility;

      const prevFacility = Object.keys(facilityData).map((key) => ({
        title: key,
        ...facilityData[key],
      }));

      const updatedFacilities = newFacilities.map((item: any) => {
        const match = prevFacility.find((pf) => pf.title === item.engtitle);
        return match
          ? {
              ...item,
              status: match.status,
              description: match.description || item.description,
            }
          : item;
      });
     
      const checkFcibility = updatedFacilities.filter(
        (facibility: { status: boolean }) => facibility.status,
      );  
      setFacilityData(checkFcibility); 
    }
  }, [status, data]);

  return (
    <div>
      <h2 className="my-6 mb-4 text-lg text-[#252a31]">درباره اقامتگاه</h2>
      <p className="text-[#404040]">اجاره اقامتگاه در {data.address.city}</p>
      <div className="font-vazir text-sm font-light leading-6 text-[#404040]">
        {data.aboutVilla.aboutVilla}
      </div>
      <hr className="mt-4" />
      <div>
        <h2 className="my-6 mb-4 text-lg text-[#252a31]">درباره اقامتگاه</h2>
        <div className="grid grid-cols-[auto,auto] gap-3 text-sm text-gray-800">
          <p>
            {" "}
            <strong>ظرفیت استاندارد: </strong> {data.capacity.normalCapacity}{" "}
            نفر
          </p>
          <p>
            <strong className="ml-2 text-black">حداکثر ظرفیت: </strong>{" "}
            {data.capacity.maxCapacity} نفر
          </p>
          <p>
            <strong className="ml-2 text-black">متراژ زیربنا:</strong>{" "}
            {data.capacity.fuundationSize} متر{" "}
          </p>
          <p>
            <strong className="ml-2 text-black">متراژ محوطه:</strong>{" "}
            {data.capacity.buildingSize} متر{" "}
          </p>
          <p>
            <strong className="ml-2 text-black">نوع اقامتگاه:</strong>
            {data.aboutVilla.villaType.title === "ویلایی"
              ? "ویلا"
              : data.aboutVilla.villaType.title}
          </p>
          <p>
            <strong className="ml-2 text-black">منطقه:</strong>
            {villaZone?.label}
          </p>
          <p>
            <strong className="ml-2 text-black">تعداد اتاق:</strong>
            {data.capacity.bedRoom}
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="border-gray-300 pb-4">
        <h2 className="my-6 mb-4 text-lg text-[#252a31]">امکانات</h2>
        <div className="grid grid-cols-[auto,auto] gap-3 text-sm text-gray-800">
          {facibilityData &&
            facibilityData.map((option:{title:string,description:string}) => (
              <div key={option.title} className="flex items-center gap-2">
                <FaRegSnowflake />
                <p>{option.title}</p>
                <div
                  className="relative cursor-pointer text-[#6378f1]"
                  id="tooltip"
                >
                  <BsInfoCircleFill />
                  <div className="invisible absolute -left-[2.5rem] -top-[2.5rem] whitespace-nowrap rounded-lg bg-black px-4 py-2 text-xs text-white">
                    <span>{option.description}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Infoes;
