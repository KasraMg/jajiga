import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { useState } from "react";
import { formatNumber } from "@/src/utils/utils";
import { categoryStore } from "@/src/stores/category";

const Price = () => {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } = categoryStore(
    (state) => state,
  );
  const [defaultMaxPrice, setDefaultMaxPrice] = useState<string>("");
  const [defaultMinPrice, setDefaultMinPrice] = useState<string>("");

  const submitHandler = () => {
    setMaxPrice(defaultMaxPrice as any)
    setMinPrice(defaultMinPrice as any) 
   };
  const deleteFilterHandler = () => {
    setMaxPrice(null)
    setMinPrice(null)
    setDefaultMaxPrice("")
    setDefaultMinPrice("")
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="flex items-center gap-1 rounded-full !border-0 bg-white p-2 text-sm md:relative"
          variant="white"
        >
          <TbMoneybag />
          <p className="!font-light">محدوده اجاره بها</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:bottom-0 before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="font-vazir text-base font-normal sm:!text-lg">
            محدوده اجاره‌بها
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center">
              <label className="mb-1 mt-2 block w-20">نرخ هر شب از</label>
              <div className="relative w-full gap-3">
                <input
                  dir="ltr"
                  value={formatNumber(defaultMinPrice as string)}
                  onChange={(event) => {
                    /^[0-9,]*$/.test(event.target.value as string)
                      ? setDefaultMinPrice(event.target.value)
                      : null;
                  }}
                  type="text"
                  className="border-1 w-full rounded-lg border-b border-solid border-gray-300 pb-1 pl-14"
                />
                <span className="absolute -top-1 left-3">تومان</span>
              </div>
            </div>
            <div className="flex items-center">
              <label className="mb-1 mt-2 block w-20">تا</label>
              <div className="relative w-full gap-3">
                <input
                  dir="ltr"
                  type="text"
                  onChange={(event) => {
                    /^[0-9,]*$/.test(event.target.value)
                      ? setDefaultMaxPrice(event.target.value as string)
                      : null;
                  }}
                  value={formatNumber(defaultMaxPrice as string)}
                  className="border-1 w-full rounded-lg border-b border-solid border-gray-300 pb-1 pl-14"
                />
                <span className="absolute -top-1 left-3">تومان</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Button
              onClick={deleteFilterHandler}
              className="flex items-center gap-2 border-dashed"
              variant={"white"}
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

export default Price;
