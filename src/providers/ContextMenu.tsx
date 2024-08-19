"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSupport } from "react-icons/bi";
import { TbMessage2Question } from "react-icons/tb";
import { authStore } from "../stores/auth";
import { FaRegUser } from "react-icons/fa";

const ContextMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { userData, isPending } = authStore((state) => state);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();

    const menuWidth = 250;
    const menuHeight = 240;
    let posX = event.pageX;
    let posY = event.pageY;

    if (posX + menuWidth > window.innerWidth) {
      posX -= menuWidth;
    }

    if (posY + menuHeight > window.innerHeight) {
      posY -= menuHeight;
    }

    setPosition({ x: posX, y: posY });
    setIsVisible(true);
  };

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick}>
      {isVisible && (
        <ul
          className="absolute z-[99999] rounded-lg bg-[#212121] p-3 text-white shadow-xl [&>*]:block [&>*]:cursor-pointer [&>*]:py-3 [&>*]:pr-[22px] [&>*]:text-sm [&>*]:font-thin"
          style={{ top: position.y, left: position.x, minWidth: "250px" }} // اضافه کردن عرض منو
        >
          <Link href={"/"} className="!pt-0">
            صفحه اصلی
          </Link>
          <Link href={"/host"}>میزبان شو</Link>
          {!isPending && userData && (
            <>
              <Link
                href={"/dashboard"}
                className="!flex border-t border-white flex-row-reverse items-center justify-end gap-2 !pr-0"
              >
                {" "}
                حساب کاربری
                <FaRegUser className="text-base" />
              </Link>

              <Link className="border-b border-white"  href={"/wishes"}> علاقه مندی </Link>
            </>
          )}
          <Link
            className="!flex flex-row-reverse items-center justify-end gap-2 !pr-0"
            href={"/faq"}
          >
            سوالات متداول <TbMessage2Question className="text-base" />
          </Link>
          <Link href={"/rules"}>قوانین</Link>
          <Link className="border-t border-white" href={"/about"}>
            درباره ما
          </Link>
          <Link
            href={"/support"}
            className="!flex flex-row-reverse items-center justify-end gap-2 !border-0 !pb-0 !pr-0"
          >
            {" "}
            پشتیبانی <BiSupport className="text-base" />
          </Link>
        </ul>
      )}
      {children}
    </div>
  );
};

export default ContextMenu;
