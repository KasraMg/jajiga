import React, { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { TbHomePlus, TbInfoCircle, TbMessage2Question } from "react-icons/tb";
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
import { authStore } from "@/src/stores/auth";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import { useLogoutHandler } from "@/src/utils/auth";
import Image from "next/image";
import { baseUrl } from "@/src/utils/utils";
import { usePathname } from "next/navigation";
import { RiAdminLine } from "react-icons/ri";
function Menu({ isSticky }: any) {
  const { userData, login } = authStore((state) => state);
  const logoutHandler = useLogoutHandler();
  const [smallAvatarLoading, setSmallAvatarLoading] = useState(true);
  const [largeAvatarLoading, setLargeAvatarLoading] = useState(true);

  const pathname = usePathname();

  const navLinks = [
    { name: "صفحه اصلی", path: "/", icon: <GoHome className="text-xl" /> },
    {
      name: "میزبان شو",
      path: "/newRoom",
      icon: <TbHomePlus className="text-xl" />,
    },
    {
      name: "پشتیبانی",
      path: "/support",
      icon: <BiSupport className="text-xl" />,
    },
    {
      name: "سوالات متداول",
      path: "/faq",
      icon: <TbMessage2Question className="text-xl" />,
    },
    {
      name: "قوانین وبسایت",
      path: "/rules",
      icon: <GrNotes className="text-xl" />,
    },
    {
      name: "درباره ما",
      path: "/about",
      icon: <TbInfoCircle className="text-xl" />,
    },
  ];

  if (userData?.user.role === "admin") {
    navLinks.splice(1, 0, {
      name: "داشبورد ادمین",
      path: "/adminPanel/dashboard",
      icon: <RiAdminLine className="text-xl" />,
    });
  }
  if (login) {
    navLinks.splice(1, 0, {
      name: "علاقه مندی ها",
      path: "/wishes",
      icon: <FaRegHeart className="text-xl" />,
    });
    navLinks.splice(2, 0, {
      name: "حساب کاربری",
      path: "/dashboard",
      icon: <FaRegUser className="text-xl" />,
    });
  }
  if (userData?.booked.length) {
    navLinks.splice(4, 0, {
      name: "رزرو ها",
      path: "/reserves",
      icon: <TbHomePlus className="text-xl" />,
    });
  }

  if (userData?.villas.length) {
    navLinks.splice(5, 0, {
      name: "اقامتگاه ها",
      path: "/all",
      icon: <TbHomePlus className="text-xl" />,
    });
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <div
            className={` ${
              isSticky && "border border-solid"
            } flex items-center gap-2 rounded-full border-[#0000005c] bg-[#ffffff54] p-1 pl-2 pr-3 text-3xl outline-none focus-visible:border-0`}
          >
            {userData?.user.avatar ? (
              <>
                {smallAvatarLoading && (
                  <div className="h-8 w-8 animate-pulse rounded-full bg-shimmer"></div>
                )}
                <Image
                  alt="avatar"
                  width={1000}
                  height={1000}
                  onLoadingComplete={() => setSmallAvatarLoading(false)}
                  className="h-8 w-8 rounded-full"
                  src={`${baseUrl}/user/avatars/${userData?.user.avatar}`}
                />
              </>
            ) : (
              <FaRegCircleUser className="text-gray-500" />
            )}
            <RxHamburgerMenu className="cursor-pointer text-xl text-black" />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent
        dir="ltr"
        className={`fixed right-0 top-0 z-[9999] h-screen w-72 overflow-y-auto rounded-l-2xl border-r bg-white py-7 transition-transform dark:bg-gray-800`}
      >
        <SheetHeader>
          <div
            className={`flex items-center ${!login ? "" : ""} justify-end gap-5 px-4`}
          >
            {!userData && !login ? (
              <Link href={"/login"}>
                <Button variant={"outlineMain"} size={"sm"}>
                  ورود / ثبت نام
                </Button>
              </Link>
            ) : (
              <div className="flex flex-col gap-[5px] text-right text-sm font-thin">
                <p>
                  {userData?.user.firstName} {userData?.user.lastName}
                </p>
                <Link className="text-[10px]" href={"/profile"}>
                  ویرایش حساب کاربری
                </Link>
              </div>
            )}
            {userData?.user.avatar ? (
              <>
                {largeAvatarLoading && (
                  <div className="h-14 w-14 animate-pulse rounded-full bg-shimmer"></div>
                )}
                <Image
                  alt="avatar"
                  width={1000}
                  height={1000}
                  onLoadingComplete={() => setLargeAvatarLoading(false)}
                  className="h-14 w-14 rounded-full"
                  src={`${baseUrl}/user/avatars/${userData?.user.avatar}`}
                />
              </>
            ) : (
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
            )}
          </div>
          <hr className="mt-5" />
        </SheetHeader>
        <div className="mr-4 mt-4">
          <ul>
            {navLinks.map((link) => (
              <Link
                href={link.path}
                className={`${pathname === link.path ? "bg-[#f5f5f5]" : null} font-vazir flex flex-row-reverse items-center gap-2 rounded-r-3xl py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]`}
              >
                {link.icon}
                <span className="mt-1 text-sm">{link.name}</span>
              </Link>
            ))}
            {login && (
              <li
                onClick={logoutHandler}
                className="font-vazir flex cursor-pointer flex-row-reverse items-center gap-2 rounded-r-3xl py-2 pb-3 pl-6 pr-2 font-light text-[#666666] hover:bg-[#f5f5f5]"
              >
                <AiOutlineLogout className="text-xl" />
                <span className="mt-1 text-sm">خروج</span>
              </li>
            )}
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
