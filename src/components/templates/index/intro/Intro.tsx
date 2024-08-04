"use client"
import { CiSearch } from "react-icons/ci";
import { useContext, useRef } from "react";
import { ScrollContext } from "@/src/providers/scrollObserver";
import { IoIosArrowDown } from "react-icons/io";

const Intro = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const scrollHandler = () => {
    document.documentElement.scrollTo({
      top: 335,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      style={{ transform: `translateY(-${progress * 20}vh)` }}
      ref={refContainer}
      dir="ltr"
      className={` ${window.pageYOffset > 800 && "invisible"} sticky left-0 top-0 z-0 h-[60vh] w-full bg-[url(https://wallpaperaccess.com/full/1320095.jpg)] bg-cover bg-fixed bg-no-repeat lg:!h-[90vh]`}
    >
      <div className="relative z-30 pt-36 text-center text-white lg:!pr-4 lg:!pt-64">
        <p className="text-[1.125rem] lg:!text-[1.7rem]">
          اجاره ویلا در شمال و سراسر ایران زیبا
        </p>
        <div className="relative mx-auto mt-5 w-max">
          <i className="absolute left-1 top-[4.5px] cursor-pointer rounded-full bg-customYellow px-2 py-2 text-[1.1rem] text-black transition-colors hover:bg-yellow-400">
            <CiSearch />
          </i>
          <input
            dir="rtl"
            type="text"
            className="h-[44px] w-[290px] rounded-full pl-10 pr-3 text-black placeholder:text-gray-300 focus:!border-[#6B7280] sm:!w-[400px] lg:!w-[450px]"
            style={{ boxShadow: "none" }}
            placeholder="میخوای کجا بری؟"
          />
        </div>
      </div>

      <div className="bottom-0 mx-auto mb-8 mt-8 w-full text-center text-white lg:!absolute lg:!mt-0">
        <p
          style={{
            fontVariationSettings: "wght 600",
            textShadow: "rgb(0, 0, 0) 0px 1px 12px",
          }}
          className="pb-1 text-xl lg:!text-[2rem]"
        >
          جاجیــــــگا
        </p>
        <span className="text-sm lg:!text-[16px]" dir="rtl">
          مثل خونه خودته :)
        </span>
      </div>

      <div
        className="mx-auto block h-10 w-max lg:!hidden"
        onClick={scrollHandler}
      >
        <IoIosArrowDown
          className="text-2xl text-white"
          style={{
            animation: "2s ease 3s infinite normal none running arrowMove",
          }}
        />
      </div>
    </div>
  );
};

export default Intro;
