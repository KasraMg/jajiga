"use client";
import Link from "next/link";
import React, { useState } from "react";

const ContextMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();

    // عرض و ارتفاع منو
    const menuWidth = 250; // عرض فرضی منو (می‌توانید این مقدار را تغییر دهید)
    const menuHeight = 220; // ارتفاع فرضی منو (می‌توانید این مقدار را تغییر دهید)
 
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
          className="absolute  [&>*]:block [&>*]:text-sm [&>*]:font-thin [&>*]:border-b [&>*]:py-3 [&>*]:border-white [&>*]:cursor-pointer   z-[9999] bg-[#2e2d2d] p-3 text-white shadow-xl rounded-lg"
          style={{ top: position.y, left: position.x, minWidth: "250px" }} // اضافه کردن عرض منو
        >
          <Link href={'/'} className="!pt-0">صفحه اصلی</Link>
          <Link href={'/host'}>میزبان شو</Link>
          <Link href={'/faq'}>سوالات متداول</Link>
          <Link href={'/rules'}>قوانین</Link>
          <Link href={'/about'}>درباره ما</Link>
          <Link href={'/support'} className="!border-0">پشتیبانی</Link>
        </ul>
      )}
      {children}
    </div>
  );
};

export default ContextMenu;
