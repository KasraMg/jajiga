"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaMapLocationDot, FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { zoneOptions } from "@/src/utils/options";
import { useQueryFilters } from "../../../../../../hooks/useQueryFilters";

const Zone = () => {
  const { getArray, set, remove } = useQueryFilters();

  const [defaultVillaZone, setDefaultVillaZone] = useState<string[]>([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const submitHandler = () => {
    set("zone", defaultVillaZone);
    setIsPopoverOpen(false);
  };

  const deleteFilterHandler = () => {
    remove("zone");
    setDefaultVillaZone([]);
    setIsPopoverOpen(false);
  };

  const inputChangeHandler = (checked: boolean, value: string) => {
    if (checked) {
      setDefaultVillaZone((prev) => [...prev, value]);
    } else {
      setDefaultVillaZone((prev) => prev.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    if (isPopoverOpen) {
      setDefaultVillaZone(getArray("zone"));
    }
  }, [isPopoverOpen, getArray]);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          className="flex items-center gap-1 rounded-full !border-0 bg-white p-2 text-sm md:relative"
          variant="white"
        >
          <FaMapLocationDot />
          <p className="!font-light">منطقه اقامتگاه</p>
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow">
          <p className="text-base font-normal sm:!text-lg">
            منطقه اقامتگاه
          </p>

          <div className="mt-4 grid grid-cols-[auto,auto] gap-3">
            {zoneOptions.map((zone) => {
              const isCheck = defaultVillaZone.includes(zone.value);

              return (
                <div
                  key={zone.value}
                  className="flex justify-between border-b border-gray-200 px-3 pb-2"
                >
                  <label htmlFor={zone.value} className="text-xs sm:!text-base">
                    {zone.label}
                  </label>

                  <input
                    className="rounded-md border-gray-300"
                    type="checkbox"
                    id={zone.value}
                    checked={isCheck}
                    onChange={(e) =>
                      inputChangeHandler(e.target.checked, zone.value)
                    }
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Button
              className="flex items-center gap-2 border-dashed"
              variant="white"
              onClick={deleteFilterHandler}
            >
              <FaRegTrashCan />
              پاک کردن
            </Button>

            <Button
              onClick={submitHandler}
              className="flex items-center gap-2"
              variant="main"
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

export default Zone;
