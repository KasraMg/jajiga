import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { FaShareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import { toast } from "@/src/components/shadcn/ui/use-toast";
const ShareModal = () => { 
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer items-center rounded-full bg-customYellow p-2 text-black">
          <IoShareSocialOutline />
        </div>
      </DialogTrigger>

      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <p>برای ارسال این صفحه به دوستانت، کلیک کن</p>

        <Link
        target="_blank"
          href={`https://api.whatsapp.com/send?text=${window.location}`}
          className="flex h-[38px] items-center rounded-lg bg-[#1bab94] text-white"
        >
          <div className="w-[38px] text-2xl">
            <FaWhatsapp className="mx-auto" />
          </div>
          <p className="h-full w-full rounded-lg bg-[#1ebea5] pt-[6px] text-center text-white">
            واتساپ
          </p>
        </Link>

        <div className="flex h-[38px] items-center cursor-pointer rounded-lg bg-[#5b5b5b] text-white">
          <div className="w-[38px] text-2xl">
            <IoIosLink className="mx-auto" />
          </div>
          <p
            onClick={() => {
              navigator.clipboard.writeText(window.location as any);
              toast({
                variant: "success",
                title: "لینک با موفقیت کپی شد",
              });
            }}
            className="h-full w-full rounded-lg bg-[#666] pt-[6px] text-center text-white"
          >
            کپی لینک
          </p>
        </div>

        <Link
        target="_blank"
          href={`https://t.me/share/url?url=${window.location}`} className="flex h-[38px] items-center rounded-lg bg-[#2499d5] text-white">
          <div className="w-[38px] text-2xl">
            <PiTelegramLogoDuotone className="mx-auto" />
          </div>
          <p className="h-full w-full rounded-lg bg-[#29aaed] pt-[6px] text-center text-white">
            تلگرام
          </p>
        </Link>

        <Link
        target="_blank"
          href={`sms:?&body=${window.location}`} className="flex h-[38px] items-center rounded-lg bg-[#f28900] text-white">
          <div className="w-[38px] text-2xl">
            <MdOutlineEmail className="mx-auto" />
          </div>
          <p className="h-full w-full rounded-lg bg-[#f28900] pt-[6px] text-center text-white">
            پیامک
          </p>
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
