import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaMapLocationDot, FaRegTrashCan } from "react-icons/fa6";
const Zone = () => {
  return (
    <Popover>
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
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:bottom-0 before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="font-vazir text-base font-normal sm:!text-lg">
            منطقه اقامتگاه
          </p>
          <div className="mt-4 grid grid-cols-[auto,auto] gap-3">
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">جنگلی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">بیابانی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">ساحلی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
              <p className="text-xs sm:!text-base">ییلاقی</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
            <div className="flex justify-between px-3 pb-2">
              <p className="text-xs sm:!text-base">شهری</p>
              <input
                className="rounded-md border-gray-300"
                type="checkbox"
                id=""
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              className="flex items-center gap-2 border-dashed"
              variant={"white"}
            >
              <FaRegTrashCan />
              پاک کردن
            </Button>
            <Button className="flex items-center gap-2" variant={"main"}>
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
