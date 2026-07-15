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
            <strong>{data?.villas?.length} اقامتگاه </strong>
          </p>
          <Select
            value={spaceSelectedOption}
            onChange={(option) => {
              if (option) {
                set("order", option.value);
              }
            }}
            isClearable={false}
            className="font-vazir mt-3 w-full text-sm font-light sm:!mt-0 sm:!w-[160px]"
            isRtl
            options={categoryFilterOptions}
          />
        </div>
        <main className="mt-6 grid justify-evenly gap-3 sm:!grid-cols-[1fr,1fr] lg:!grid-cols-[1fr,1fr,1fr] xl:!grid-cols-[1fr,1fr,1fr,1fr]">
          {data &&
            data?.villas?.map((villa: VillaDetails) => <Card data={villa} />)}
        </main>
        {data && data.statusCode === 404 && <Notfound isFilter={isFilter} />}
      </div>
    </div>
  );
};

export default Posts;
