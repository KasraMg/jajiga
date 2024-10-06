"use client";
import { BiSupport } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { TbHome, TbHomePlus } from "react-icons/tb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const route = usePathname();
  const [scroll, setScroll] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(
    typeof window !== "undefined" ? window.scrollY : null,
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (prevScrollPos && currentScrollPos > prevScrollPos) {
          setScroll(true);
        } else {
          setScroll(false);
        }
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <div
      style={{
        transition: "all 0.35s ease-in 0s",
      }}
      className={`${scroll ? "-bottom-[60px]" : "bottom-0"} fixed left-0 z-[400] grid w-full grid-cols-[auto,auto,auto,auto] border-t border-solid border-gray-200 bg-white py-2 transition-transform md:!hidden`}
    >
      <Link
        href={"/support"}
        className={`relative text-center ${route == "/support" && "text-red-600 before:absolute before:-bottom-3 before:right-0 before:block before:h-2 before:w-full before:rounded-xl before:bg-red-600"}`}
      >
        <BiSupport className="mx-auto mb-1 text-2xl" />
        <p className="text-xs">پشتیبانی</p>
      </Link>
      <Link
        href={"/host"}
        className={`relative text-center ${route == "/host" && "text-red-600 before:absolute before:-bottom-3 before:right-0 before:block before:h-2 before:w-full before:rounded-xl before:bg-red-600"}`}
      >
        <TbHomePlus className="mx-auto mb-1 text-2xl" />
        <p className="text-xs">میزبان شوید</p>
      </Link>
      <Link
        href={"/wishes"}
        className={`relative text-center ${route == "/wishes" && "text-red-600 before:absolute before:-bottom-3 before:right-0 before:block before:h-2 before:w-full before:rounded-xl before:bg-red-600"}`}
      >
        <FaRegHeart className="mx-auto mb-1 text-2xl" />
        <p className="text-xs">علاقه‌مندی‌ها</p>
      </Link>
      <Link
        href={"/"}
        className={`relative text-center ${route.length == 1 && "text-red-600 before:absolute before:-bottom-3 before:right-0 before:block before:h-2 before:w-full before:rounded-xl before:bg-red-600"}`}
      >
        <TbHome className="mx-auto mb-1 text-2xl" />
        <p className="text-xs">صفحه اصلی</p>
      </Link>
    </div>
  );
};

export default MobileMenu;
