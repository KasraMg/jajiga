import React, { useEffect, useState } from "react";
import { MdOutlinePeople } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { categoryStore } from "@/src/stores/category";

const Space = () => {
  const { setMaximumSpace, maximumSpace } = categoryStore((state) => state);
  const [defaultMaximumSpace, setDefaultMaximumSpace] = useState(1);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const incrementMaximumHandler = () => {
    setDefaultMaximumSpace((prev) => prev + 1);
  };
  const decrementMaximumHandler = () => {
    if (defaultMaximumSpace !== 1) {
      setDefaultMaximumSpace((prev) => prev - 1);
    }
  };

  const submitHandler = () => {
    setMaximumSpace(defaultMaximumSpace);
    setIsPopoverOpen(false);
  };
  const deleteFilterHandler = () => {
    setMaximumSpace(null);
    setDefaultMaximumSpace(1);
  };

  useEffect(() => {
    maximumSpace
      ? setDefaultMaximumSpace(maximumSpace as any)
      : setDefaultMaximumSpace(1);
  }, [isPopoverOpen]);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          className="flex items-center gap-1 rounded-full !border-0 bg-white p-2 text-sm md:relative"
          variant="white"
        >
          <MdOutlinePeople />
          <p className="!font-light">تعداد نفرات</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="relative z-50 bg-white p-3">
          <div className="flex items-center justify-between text-sm">
            <p className="font-vazir font-extrabold">تعداد نفرات</p>
            <div className="flex items-center justify-between pl-1">
              <div>
                <div className="flex w-[130px] items-center justify-between">
                  <p
                    onClick={incrementMaximumHandler}
                    className="cursor-pointer text-2xl hover:text-gray-500"
                  >
                    +
                  </p>
                  <p className="text-sm">{defaultMaximumSpace} نفر</p>
                  <p
                    onClick={decrementMaximumHandler}
                    className={`${defaultMaximumSpace == 1 && "!cursor-not-allowed text-gray-300"} mb-4 cursor-pointer text-2xl hover:text-gray-500`}
                  >
                    _
                  </p>
                </div>
                <p className="text-center text-sm text-gray-500">(حداقل)</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-1 text-gray-500">
            <IoInformationCircleOutline />
            <p className="text-xs">
              {" "}
              با انتخاب تعداد نفرات، نتایج دقیق تری را مشاهده می‌کنید.
            </p>
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

export default Space;
