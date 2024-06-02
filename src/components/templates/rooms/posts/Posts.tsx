"use client";
import Select from "react-select";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { categoryFilterOptions } from "@/src/utils/selectOptions";
import Card from "../../index/SpecialAccommodations/components/Card";
const Posts = () => {
  const [spaceSelectedOption, setSpaceSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>({ label: "جدید ترین", value: "جدید ترین" });

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
    </div>
  );
};

export default Posts;
