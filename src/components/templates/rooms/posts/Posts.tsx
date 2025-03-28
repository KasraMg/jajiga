"use client";
import Select from "react-select";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { categoryFilterOptions } from "@/src/utils/options";
import Card from "../../../modules/card/Card";
import useGetData from "@/src/hooks/useGetData"; 
import Loader from "@/src/components/modules/loader/Loader";
import { categoryStore } from "@/src/stores/category";
import { useSearchParams } from "next/navigation";
import { VillaDetails } from "@/src/types/Villa.types";
import Notfound from "./components/Notfound";

const Posts = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const [isFilter, setIsFilter] = useState(false);
  const {
    order,
    maximumSpace,
    minPrice,
    maxPrice,
    facilities,
    villaType,
    villaZone,
    setOrder,
  } = categoryStore((state) => state);

  const accessToken = Cookies.get("AccessToken");
  
  const getVilla = async () => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/villa/s`;
    city ? (url += `?city=${city}`) : (url += `?city=all`);
    if (
      maximumSpace ||
      minPrice ||
      maxPrice ||
      villaZone.length ||
      facilities.length ||
      villaType.length
    ) {
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
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
      url += `&type=${type}`;
    }
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = res.json();
    return data;
  };

  const { data, isFetching, refetch } = useGetData(["category"], getVilla, {
    refetchOnWindowFocus: false,
  }); 
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
    spaceSelectedOption,
    searchParams,
  ]);

  useEffect(() => {
    setOrder(spaceSelectedOption?.value as string);
  }, [spaceSelectedOption]);

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
            <strong>{data?.villas.length} اقامتگاه </strong>
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
        <main className="mt-6 grid justify-evenly gap-3 sm:!grid-cols-[1fr,1fr] lg:!grid-cols-[1fr,1fr,1fr] xl:!grid-cols-[1fr,1fr,1fr,1fr]">
          {data &&
            data.villas.map((villa: VillaDetails) => <Card data={villa} />)}
        </main>
        {data && data.statusCode === 404 && <Notfound isFilter={isFilter} />}
      </div>
      {isFetching && <Loader />}
    </div>
  );
};

export default Posts;
