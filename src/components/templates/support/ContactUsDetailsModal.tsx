import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";

import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const ContactUsDetailsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
          }}
          className="w-1/2 cursor-pointer rounded-md p-2 pb-2 text-center"
        >
          <svg
            width={28}
            className="sc-679cb2a8-0 jespqW mx-auto mb-1"
            fill="none"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M19.56 7.119a8.998 8.998 0 01.001 9.763M15.548 8.452a5.017 5.017 0 11-7.096 7.095 5.017 5.017 0 017.096-7.095"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.321 7.55l2.584-3.138a1.003 1.003 0 011.483-.072l1.273 1.273a1.002 1.002 0 01-.072 1.483L16.45 9.68"
              fill="#F0C807"
            ></path>
            <path
              d="M14.321 7.55l2.584-3.138a1.003 1.003 0 011.483-.072l1.273 1.273a1.002 1.002 0 01-.072 1.483L16.45 9.68"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.679 16.45l-2.584 3.138a1.003 1.003 0 01-1.483.072l-1.273-1.273a1.002 1.002 0 01.072-1.483L7.55 14.32"
              fill="#F0C807"
            ></path>
            <path
              d="M9.679 16.45l-2.584 3.138a1.003 1.003 0 01-1.483.072l-1.273-1.273a1.002 1.002 0 01.072-1.483L7.55 14.32"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.551 9.68l-3.14-2.585a1.003 1.003 0 01-.072-1.483L5.612 4.34a1.002 1.002 0 011.483.072l2.584 3.14"
              fill="#F0C807"
            ></path>
            <path
              d="M7.551 9.68l-3.14-2.585a1.003 1.003 0 01-.072-1.483L5.612 4.34a1.002 1.002 0 011.483.072l2.584 3.14"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.449 14.321l3.139 2.584c.457.376.49 1.064.072 1.483l-1.273 1.273a1.002 1.002 0 01-1.483-.072L14.32 16.45"
              fill="#F0C807"
            ></path>
            <path
              d="M16.449 14.321l3.139 2.584c.457.376.49 1.064.072 1.483l-1.273 1.273a1.002 1.002 0 01-1.483-.072L14.32 16.45M16.882 19.561a8.998 8.998 0 01-9.763 0M4.439 7.118a8.998 8.998 0 00.001 9.763M16.881 4.44a8.998 8.998 0 00-9.763-.001"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="text-xs">سایر راه های ارتباطی</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="py-3 text-center">
            سایر راه های ارتباطی
          </DialogTitle>
        </DialogHeader>
        <p className="font-vazir text-center text-sm font-light leading-7 text-[#404040]">
          ساعات کار پشتیبانی تلفنی از<strong> 8 صبح</strong> الی{" "}
          <strong>12 شب</strong> می‌باشد. شماره تماس:{" "}
        </p>
        <section className="space-y-4 pt-4">
          <div className="flex flex-row-reverse justify-center gap-3">
            <FaInstagram className="text-2xl text-yellow-300" />
            <p dir="ltr">@_ka.s.ra_</p>
          </div>
          <div className="flex flex-row-reverse justify-center gap-3">
            <MdOutlineEmail className="text-2xl text-yellow-300" />
            <p>kasrakasra924@gmail.com</p>
          </div>
          <div className="flex flex-row-reverse justify-center gap-3">
            <FaTelegram className="text-2xl text-yellow-300" />
            <p dir="ltr">@shahiinnnnn</p>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsDetailsModal;
