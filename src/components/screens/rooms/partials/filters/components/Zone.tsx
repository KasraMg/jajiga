import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaMapLocationDot, FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { categoryStore } from "@/src/stores/category";
import { zoneOptions } from "@/src/utils/options";
const Zone = () => {
  const { villaZone, setVillaZone } = categoryStore((state) => state);
  const [defaultVillaZone, setDefaultVillaZone] = useState([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const submitHandler = () => {
    setVillaZone(defaultVillaZone);
    setIsPopoverOpen(false);
  };
  const deleteFilterHandler = () => {
    if (villaZone.length) {
      setVillaZone([]);
      setDefaultVillaZone([]);
    }
    setIsPopoverOpen(false);
  };
  const inputChangeHandler = (status: boolean, value: string) => {
    if (status) {
      setDefaultVillaZone((prev) => [...prev, value] as any);
    } else {
      const newZone = defaultVillaZone.filter((zone) => zone !== value);
      setDefaultVillaZone(newZone);
    }
  };

  useEffect(() => {
    setDefaultVillaZone(villaZone as any);
  }, [isPopoverOpen]);
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
        <div className="relative z-50 bg-white p-3 py-5 before:absolute before:bottom-0 before:right-0 before:top-4 before:block before:h-8 before:w-2 before:rounded-l-lg before:bg-customYellow before:content-['']">
          <p className="font-vazir text-base font-normal sm:!text-lg">
            منطقه اقامتگاه
          </p>
          <div className="mt-4 grid grid-cols-[auto,auto] gap-3">
            {zoneOptions.map((zone) => {
              const isCheck = defaultVillaZone.some(
                (villaZone) => villaZone === zone.value,
              );
              return (
                <div className="flex justify-between border-b border-solid border-gray-200 px-3 pb-2">
                  <p className="text-xs sm:!text-base">{zone.label}</p>
                  <input
                    className="rounded-md border-gray-300"
                    type="checkbox"
                    value={zone.value}
                    checked={isCheck}
                    onChange={(event) =>
                      inputChangeHandler(event.target.checked, zone.value)
                    }
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

export default Zone;
