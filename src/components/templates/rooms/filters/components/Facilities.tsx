import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbHomeStar } from "react-icons/tb";
import { categoryStore } from "@/src/stores/category";
import { useEffect, useState } from "react";

const Facilities = () => {
  const { facilities, setFacilities } = categoryStore((state) => state);
  const [defaultFacilities, setDefaulFacilities] = useState([]);

  const facilitiesOptions: {
    label: string;
    value: string;
  }[] = [
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

  const submitHandler = () => {
    setFacilities(defaultFacilities);
  };
  const deleteFilterHandler = () => {
    setDefaulFacilities([]);
    setFacilities([]);
  };
  const inputChangeHandler = (status: boolean, value: string) => {
    if (status) {
      setDefaulFacilities((prev) => [...prev, value] as any);
    } else {
      const newType = defaultFacilities.filter((type) => type !== value);
      setDefaulFacilities(newType);
    }
  };
  useEffect(() => {
    console.log(defaultFacilities, facilities);
  }, [defaultFacilities, facilities]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="flex items-center gap-1 rounded-full !border-0 bg-white p-2 text-sm md:relative"
          variant="white"
        >
          <TbHomeStar />
          <p className="!font-light">امکانات اقامتگاه </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:bottom-0 before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="font-vazir text-base font-normal sm:!text-lg">
            امکانات اقامتگاه
          </p>
          <div className="mt-4 grid grid-cols-[auto,auto] gap-3">
            {facilitiesOptions.map((option) => {
              const isCheck = defaultFacilities.some(
                (facilities) => facilities === option.value,
              );

              return (
                <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
                  <p className="text-xs sm:!text-base">{option.label}</p>
                  <input
                    className="rounded-md border-gray-300"
                    type="checkbox"
                    id=""
                    onChange={(event) =>
                      inputChangeHandler(event.target.checked, option.value)
                    }
                    checked={isCheck}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              className="flex items-center gap-2 border-dashed"
              variant={"white"}
              onClick={deleteFilterHandler}
            >
              <FaRegTrashCan />
              پاک کردن
            </Button>
            <Button
              onClick={submitHandler}
              className="flex items-center gap-2"
              variant={"main"}
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
