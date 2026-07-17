"use client";

import { GoDotFill } from "react-icons/go";
import { categoryFilterOptions } from "@/src/utils/options";
import { VillaDetails } from "@/src/types/villa.types";
import Card from "../../../../modules/card/card";
import Select from "react-select";
import Notfound from "./Notfound";
import useRooms from "./hook";
import { useQueryFilters } from "../../../../../hooks/useQueryFilters";

const Posts = () => {
  const { isFilter, data, spaceSelectedOption } = useRooms();

  const { set } = useQueryFilters();

  return (
    <div className="px-4 pb-5 sm:!px-8">
      <div className="mt-5 hidden items-center gap-1 sm:!flex">
        <GoDotFill className="text-customYellow" />
        <p className="text-xs font-light">
          برای مشاهده نتایج دقیق‌تر، <strong>تاریخ سفر</strong> و{" "}
          <strong>تعداد نفرات</strong> را انتخاب نمایید
        </p>
      </div>

      <div className="pt-6 sm:!pt-12">
        <div className="flex flex-row items-center justify-between gap-3">
          <p className="text-sm">
            <strong className="whitespace-nowrap">
              {data?.villas?.length} اقامتگاه{" "}
            </strong>
          </p>
          <Select
            value={spaceSelectedOption}
            onChange={(option) => {
              if (option) {
                set("order", option.value);
              }
            }}
            isClearable={false}
            className=" w-[160px] text-sm font-light sm:!mt-0"
            isRtl
            isSearchable={false}
            options={categoryFilterOptions}
          />
        </div>
        <main className="mt-6 grid grid-cols-1 justify-evenly gap-3 sm:!grid-cols-[1fr,1fr] lg:!grid-cols-[1fr,1fr,1fr] xl:!grid-cols-[1fr,1fr,1fr,1fr]">
          {data &&
            data?.villas?.map((villa: VillaDetails) => <Card data={villa} />)}
        </main>
        {data && data.statusCode === 404 && <Notfound isFilter={isFilter} />}
      </div>
    </div>
  );
};

export default Posts;
