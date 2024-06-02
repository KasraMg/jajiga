import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import {
  TbHomePlus,
  TbHome,
  TbInfoCircle,
  TbMessage2Question,
} from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import {
  PiGithubLogo,
  PiInstagramLogo,
  PiTelegramLogoLight,
} from "react-icons/pi";
import { GoHome } from "react-icons/go";

import { Button } from "@/src/components/shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/src/components/shadcn/ui/sheet";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

function Menu({ isSticky }: any) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <div
            className={` ${
              isSticky && "border border-solid"
            } flex items-center gap-2 rounded-full border-[#0000005c] bg-[#ffffff54] p-1 pl-2 pr-3 text-3xl`}
          >
            <FaRegCircleUser className="text-gray-500" />
            <RxHamburgerMenu className="cursor-pointer text-xl text-black" />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent
        dir="ltr"
        className={`fixed right-0 top-0 z-[9999] h-screen w-72 overflow-y-auto rounded-l-2xl border-r bg-white py-7 transition-transform dark:bg-gray-800`}
      >
        <SheetHeader>
          <div className="flex items-center justify-end gap-5 px-6">
            <Button variant={"outlineMain"} size={"sm"}>
              ورود / ثبت نام
            </Button>
            <svg
              width={56}
              className="sc-679cb2a8-0 iBzAsR sc-2fa8747d-1 eAKzKD"
              fill="#d6d6d6"
              viewBox="0 0 32 32"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="clip-path">
                  <polygon
                    points="0 0 32 0 32 1.23 32 32 0 32 0 0"
                    style={{ fill: "none" }}
                  ></polygon>
                </clipPath>
              </defs>
              <g style={{ clipPath: "url(&quot;#clip-path&quot)" }}>
                <path d="M16,32A16,16,0,1,1,32,16,16,16,0,0,1,16,32ZM16,1.52A14.48,14.48,0,0,0,1.52,16a14.82,14.82,0,0,0,.28,2.82,14.48,14.48,0,0,0,28.4,0A15,15,0,0,0,30.48,16,14.5,14.5,0,0,0,16,1.52Z"></path>
                <path
                  d="M20.5,13.5A4.5,4.5,0,1,1,16,9,4.49,4.49,0,0,1,20.5,13.5ZM19,18.71a6,6,0,1,0-5.94,0A9.76,9.76,0,0,0,6.25,28a.75.75,0,0,0,1.5,0,8.25,8.25,0,0,1,15.87-3.16h0A8.18,8.18,0,0,1,24.25,28a.75.75,0,0,0,1.5,0A9.76,9.76,0,0,0,19,18.71Z"
                  style={{ fillRule: "evenodd" }}
                ></path>
              </g>
            </svg>
          </div>
          <hr className="mt-5" />
        </SheetHeader>
        <div className="mr-4 mt-4">
          <ul>
            <li className="font-vazir flex flex-row-reverse items-center gap-2 rounded-r-3xl bg-[#f5f5f5] py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]">
              <GoHome className="text-xl" />
              <span className="mt-1 text-sm">صفحه اصلی</span>
            </li>
            <li className="font-vazir flex flex-row-reverse items-center gap-2 rounded-r-3xl py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]">
              <FaRegHeart className="text-xl" />
              <span className="mt-1 text-sm">علاقه مندی ها</span>
            </li>
            <li className="font-vazir flex flex-row-reverse items-center gap-2 rounded-r-3xl py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]">
              <TbHomePlus className="text-xl" />
              <span className="mt-1 text-sm"> میزبان شو</span>
            </li>
            <li className="font-vazir flex flex-row-reverse items-center gap-2 rounded-r-3xl py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]">
              <BiSupport className="text-xl" />
              <span className="mt-1 text-sm">پشتیبانی</span>
            </li>
            <li className="font-vazir flex flex-row-reverse items-center gap-2 rounded-r-3xl py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]">
              <TbMessage2Question className="text-xl" />
              <span className="mt-1 text-sm">سوالات متداول</span>
            </li>
            <li className="font-vazir flex flex-row-reverse items-center gap-2 rounded-r-3xl py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]">
              <IoShieldCheckmarkOutline className="text-xl" />
              <span className="mt-1 text-sm">ضمانت تحویل</span>
            </li>
            <li className="font-vazir flex flex-row-reverse items-center gap-2 rounded-r-3xl py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]">
              <GrNotes className="text-xl" />
              <span className="mt-1 text-sm">قوانین وبسایت</span>
            </li>
            <li className="font-vazir flex flex-row-reverse items-center gap-2 rounded-r-3xl py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]">
              <TbInfoCircle className="text-xl" />
              <span className="mt-1 text-sm">درباره ما</span>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 flex w-full flex-row-reverse justify-around rounded-t-3xl bg-[#c1c1c175] px-2 py-3 text-xl">
          <a href="https://t.me/shahiinnnnn">
            <PiTelegramLogoLight />
          </a>
          <a href="https://github.com/KasraMg">
            <PiInstagramLogo />
          </a>
          <a href="https://github.com/KasraMg">
            <PiGithubLogo />
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default Menu;
