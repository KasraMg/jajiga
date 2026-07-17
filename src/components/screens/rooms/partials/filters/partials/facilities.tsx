"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbHomeStar } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useQueryFilters } from "../../../../../../hooks/useQueryFilters";

const facilitiesOptions = [
  {
    label: "استخر",
    value: "pool",
  },
  {
    label: "بیلیارد",
    value: "eightball",
  },
  {
    label: "wifi اینترنت",
    value: "wifi",
  },
  {
    label: "پارکینگ",
    value: "parking",
  },
  {
    label: "سیستم سرمایشی",
    value: "coolingSystem",
  },
  {
    label: "سیستم گرمایشی",
    value: "heatingSystem",
  },
];

const Facilities = () => {
  const { getArray, set, remove } = useQueryFilters();

  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    if (isPopoverOpen) {
      setSelectedFacilities(getArray("feature"));
    }
  }, [isPopoverOpen]);

  const inputChangeHandler = (checked: boolean, value: string) => {
    if (checked) {
      setSelectedFacilities((prev) => [...prev, value]);
    } else {
      setSelectedFacilities((prev) => prev.filter((item) => item !== value));
    }
  };

  const submitHandler = () => {
    set("feature", selectedFacilities);
    setIsPopoverOpen(false);
  };

  const deleteFilterHandler = () => {
    remove("feature");
    setSelectedFacilities([]);
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="white"
          className="flex items-center gap-1 rounded-full !border-0 bg-white p-2 text-sm md:relative"
        >
          <TbHomeStar />
          <p className="!font-light">امکانات اقامتگاه</p>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[96%] sm:!w-96">
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="text-base font-normal sm:text-lg">
            امکانات اقامتگاه
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {facilitiesOptions.map((option) => {
              const checked = selectedFacilities.includes(option.value);

              return (
                <div
                  key={option.value}
                  className="flex justify-between border-b border-gray-200 px-3 pb-2"
                >
                  <label
                    htmlFor={option.value}
                    className="text-xs sm:text-base"
                  >
                    {option.label}
                  </label>

                  <input
                    id={option.value}
                    type="checkbox"
                    checked={checked}
                    className="rounded-md border-gray-300"
                    onChange={(e) =>
                      inputChangeHandler(e.target.checked, option.value)
                    }
                  />
                </div>
              );
            })}
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

export default Facilities;
