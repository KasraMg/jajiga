"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { useEffect, useState } from "react";
import { formatNumber } from "@/src/utils/utils";
import { useQueryFilters } from "../../../../../../hooks/useQueryFilters";

const Price = () => {
  const { get, setMany, removeMany } = useQueryFilters();

  const [defaultMaxPrice, setDefaultMaxPrice] = useState("");
  const [defaultMinPrice, setDefaultMinPrice] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const submitHandler = () => {
    setMany({
      minp: defaultMinPrice.replace(/,/g, ""),
      maxp: defaultMaxPrice.replace(/,/g, ""),
    });
    setIsPopoverOpen(false);
  };

  const deleteFilterHandler = () => {
    removeMany(["minp", "maxp"]);

    setDefaultMinPrice("");
    setDefaultMaxPrice("");

    setIsPopoverOpen(false);
  };

  useEffect(() => {
    if (!isPopoverOpen) return;

    setDefaultMinPrice(get("minp") || "");
    setDefaultMaxPrice(get("maxp") || "");
  }, [isPopoverOpen]);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          className="flex items-center gap-1 rounded-full !border-0 bg-white p-2 text-sm md:relative"
          variant="white"
        >
          <TbMoneybag />
          <p className="font-light">محدوده اجاره بها</p>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="sm:!w-96 w-[96%]">
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="text-base font-normal sm:text-lg">
            محدوده اجاره‌بها
          </p>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center">
              <label className="mb-1 mt-2 block w-20">نرخ هر شب از</label>

              <div className="relative w-full">
                <input
                  dir="ltr"
                  value={formatNumber(defaultMinPrice)}
                  onChange={(e) => {
                    if (/^[0-9,]*$/.test(e.target.value)) {
                      setDefaultMinPrice(e.target.value);
                    }
                  }}
                  className="w-full rounded-lg border-b border-gray-300 pb-1 pl-14 outline-none"
                />

                <span className="absolute -top-1 left-3">تومان</span>
              </div>
            </div>

            <div className="flex items-center">
              <label className="mb-1 mt-2 block w-20">تا</label>

              <div className="relative w-full">
                <input
                  dir="ltr"
                  value={formatNumber(defaultMaxPrice)}
                  onChange={(e) => {
                    if (/^[0-9,]*$/.test(e.target.value)) {
                      setDefaultMaxPrice(e.target.value);
                    }
                  }}
                  className="w-full rounded-lg border-b border-gray-300 pb-1 pl-14 outline-none"
                />

                <span className="absolute -top-1 left-3">تومان</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Button
              variant="white"
              className="flex items-center gap-2 border-dashed"
              onClick={deleteFilterHandler}
            >
              <FaRegTrashCan />
              پاک کردن
            </Button>

            <Button
              variant="main"
              className="flex items-center gap-2"
              onClick={submitHandler}
            >
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Price;
