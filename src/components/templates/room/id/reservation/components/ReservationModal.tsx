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
import Select from "react-select";
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
          <DialogTitle className="py-3 text-center">
            تماس با پشتیبانی
          </DialogTitle>
        </DialogHeader>
        <div className="rounded-b-2xl px-4 py-[14px]">
          <p className="font-vazir mb-2 text-sm font-light text-[#252a31]">
            تاریخ سفر
          </p>
          <div className="flex items-center justify-between rounded-lg border border-[#d6d6d6] px-5 py-2">
            <div className="text-sm text-[#bac7d5]">
              <p>تاریخ ورود</p>
            </div>
            <div className='mx-2 inline-block min-h-[30px] w-[1px] bg-[#d6d6d6] after:content-[""]'></div>
            <div className="text-sm text-[#bac7d5]">
              <p>تاریخ خروج</p>
            </div>
          </div>
          <p className="font-vazir mb-2 mt-8 text-sm font-light text-[#252a31]">
            تعداد نفرات
          </p>
          <Select
            defaultValue={countSelectedOption}
            onChange={setCountSelectedOption as any}
            isClearable={true}
            className="w-full md:w-[200px] lg:!w-full"
            isRtl={true}
            isSearchable={true}
            options={userCountOptions as any}
            placeholder={"تعداد نفرات را مشخص کنید"}
          />
          <Button
            variant="yellow"
            className="!relative !bottom-0 !left-0 !right-0 !top-0 mt-5 w-full rounded-full text-center"
          >
            <div className="text-textGray mx-auto flex items-baseline justify-center">
              <span>ثبت درخواست رزرو</span>
              <span className="text-[10px]">(رایگان)</span>
            </div>
          </Button>
          <Link href={"/faq"}>
            <Button
              className="!relative !bottom-0 !left-0 !right-0 !top-0 mt-5 w-full justify-center border-[#00000028]"
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
