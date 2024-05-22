import { Button } from "@/src/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { useState } from "react";
import { userCountOptions } from "@/src/utils/selectOptions"; 
import Select from 'react-select';
import Link from "next/link";
import { SlInfo } from "react-icons/sl";
const ReservationModal = () => {
  const [countSelectedOption, setCountSelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"yellow"} className="rounded-full">
          <span>درخواست رزرو</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center py-3">
            تماس با پشتیبانی
          </DialogTitle>
        </DialogHeader>
        <div className="rounded-b-2xl py-[14px] px-4">
          <p className="text-sm text-[#252a31] mb-2 font-vazir font-light ">
            تاریخ سفر
          </p>
          <div className="flex items-center rounded-lg border-[#d6d6d6] border justify-between py-2 px-5">
            <div className="text-[#bac7d5] text-sm">
              <p>تاریخ ورود</p>
            </div>
            <div className='bg-[#d6d6d6] w-[1px] min-h-[30px] after:content-[""] mx-2 inline-block'></div>
            <div className="text-[#bac7d5] text-sm">
              <p>تاریخ خروج</p>
            </div>
          </div>
          <p className="text-sm text-[#252a31] mt-8 mb-2 font-vazir font-light ">
            تعداد نفرات
          </p>
          <Select
            defaultValue={countSelectedOption}
            onChange={setCountSelectedOption as any}
            isClearable={true}
            className="lg:!w-full md:w-[200px] w-full  "
            isRtl={true}
            isSearchable={true}
            options={userCountOptions as any}
            placeholder={"تعداد نفرات را مشخص کنید"}
          />
          <Button
            variant="yellow"
            className=" !top-0 !left-0 !right-0 !bottom-0 !relative rounded-full w-full text-center mt-5"
          >
            <div className="flex items-baseline justify-center text-textGray mx-auto">
              <span>ثبت درخواست رزرو</span>
              <span className="text-[10px]">(رایگان)</span>
            </div>
          </Button>
          <Link href={"/faq"}>
            <Button
              className="w-full justify-center  !top-0 !left-0 !right-0 !bottom-0 !relative mt-5 border-[#00000028]"
              variant={"white"}
            >
              <SlInfo className="!h-5 !w-5 !text-black" />
              راهنمای رزرو
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
