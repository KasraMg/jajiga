"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbHomeQuestion } from "react-icons/tb";
import { typeOptions } from "@/src/utils/options";
import { useEffect, useState } from "react";
import { useQueryFilters } from "../../../../../../hooks/useQueryFilters";

const Type = () => {
  const { getArray, set, remove } = useQueryFilters();

  const [defaultVillaType, setDefaultVillaType] = useState<string[]>([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const submitHandler = () => {
    set("type", defaultVillaType);
    setIsPopoverOpen(false);
  };

  const deleteFilterHandler = () => {
    remove("type");
    setDefaultVillaType([]);
    setIsPopoverOpen(false);
  };

  const inputChangeHandler = (status: boolean, href: string) => {
    if (status) {
      setDefaultVillaType((prev) => [...prev, href]);
    } else {
      setDefaultVillaType((prev) => prev.filter((item) => item !== href));
    }
  };

  useEffect(() => {
    if (!isPopoverOpen) return;

    setDefaultVillaType(getArray("type"));
  }, [isPopoverOpen]);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          className="flex items-center gap-1 rounded-full !border-0 bg-white p-2 text-sm md:relative"
          variant="white"
        >
          <TbHomeQuestion />
          <p className="font-light">نوع اقامتگاه</p>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-96">
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:bottom-0 before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="font-vazir text-base font-normal sm:text-lg">
            نوع اقامتگاه
          </p>

          <div className="mt-4 grid grid-cols-[auto,auto] gap-3">
            {typeOptions.map((type) => {
              const isCheck = defaultVillaType.includes(type.href);

              return (
                <div
                  key={type.href}
                  className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2"
                >
                  <p className="text-xs sm:text-base">{type.label}</p>

                  <input
                    className="rounded-md border-gray-300"
                    type="checkbox"
                    checked={isCheck}
                    onChange={(event) =>
                      inputChangeHandler(event.target.checked, type.href)
                    }
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Button
              onClick={deleteFilterHandler}
              className="flex items-center gap-2 border-dashed"
              variant="white"
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

export default Type;