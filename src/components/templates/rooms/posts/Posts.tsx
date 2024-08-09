"use client";
import Select from "react-select";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { categoryFilterOptions } from "@/src/utils/selectOptions";
import Card from "../../index/SpecialAccommodations/components/Card";
import useGetData from "@/src/hooks/useGetData";
import { baseUrl } from "@/src/utils/utils";
import Loader from "@/src/components/modules/loader/Loader";
import { categoryStore } from "@/src/stores/category";
import { useSearchParams } from "next/navigation";

const Posts = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const { 
    order,
    maximumSpace,
    minPrice,
    maxPrice,
    facilities,
    villaType,
    villaZone,
  } = categoryStore((state) => state);
  const accessToken = Cookies.get("AccessToken");
  const getVilla = async () => {
    let url = `${baseUrl}/villa/s`; 
    city ? (url += `?city=${city}`) : (url += `?city=all`);

    if (order) {
      url += `&order=${order}`;
    }
    if (maximumSpace) {
      url += `&gstnum=${maximumSpace}`;
    }
    if (minPrice) {
      url += `&minp=${minPrice}`;
    }
    if (maxPrice) {
      url += `&maxp=${maxPrice}`;
    }
    if (villaZone.length) {
      const zone = villaZone?.map((item) => item).join("-");
      url += `&zone=${zone}`;
    }
    if (facilities.length) {
      const prevFacilities = facilities?.map((item) => item).join("-");
      url += `&feature=${prevFacilities}`;
    }
    if (villaType.length) {
      const type = villaType?.map((item) => item).join("-");
      console.log("type", type);

      url += `&type=${type}`;
    }
    console.log(url);

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = res.json();
    return data;
  };

  const { data, status, isPending, refetch } = useGetData(
    ["category"],
    getVilla,
  );
console.log(data);

  const [spaceSelectedOption, setSpaceSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>({ label: "جدید ترین", value: "newest" });
 
  useEffect(() => {
    refetch();
  }, [
    order,
    maximumSpace,
    minPrice,
    maxPrice,
    facilities,
    villaType,
    villaZone,
  ]);

  return (
    <div className="px-4 pb-5 sm:!px-8">
      <div className="mt-5 flex items-center gap-1">
        <GoDotFill className="text-customYellow" />
        <p className="text-xs font-light">
          برای مشاهده نتایج دقیق‌تر، <strong>تاریخ سفر</strong> و{" "}
          <strong>تعداد نفرات</strong> را انتخاب نمایید
        </p>
      </div>

      <div className="mt-12">
        <div className="flex flex-col items-center justify-between sm:!flex-row">
          <p className="text-sm">
            <strong>1466 اقامتگاه </strong> از <strong>300٬000</strong>{" "}
            <span className="text-xs">تومان</span>
          </p>
          <Select
            defaultValue={spaceSelectedOption}
            onChange={setSpaceSelectedOption as any}
            isClearable={false}
            className="font-vazir mt-3 w-full text-sm font-light sm:!mt-0 sm:!w-[160px]"
            isRtl={true}
            options={categoryFilterOptions}
          />
        </div>
        <main className="mt-6 grid justify-evenly gap-3 sm:!grid-cols-[auto,auto] lg:!grid-cols-[auto,auto,auto] xl:!grid-cols-[auto,auto,auto,auto]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </div>
      {isPending && <Loader />}
    </div>
  );
};

export default Posts;
