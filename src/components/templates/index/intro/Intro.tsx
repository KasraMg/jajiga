"use client";
import { CiSearch } from "react-icons/ci";
import { useContext, useRef, useState } from "react";
import { ScrollContext } from "@/src/providers/scrollObserver";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Intro = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  let progress = 0;
  const router = useRouter();
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

  const inputChangeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13 && searchValue.length) {
      router.push(`/rooms?city=${searchValue}`);
      setIsShowSearchBox(false);
    }
  };
  const iconClickHandler = () => {
    if (searchValue.length) {
      router.push(`/rooms?city=${searchValue}`);
      setIsShowSearchBox(false);
    }
  };

  return (
    <div
      style={{ transform: `translateY(-${progress * 20}vh)` }}
      ref={refContainer}
      dir="ltr"
      className={`${typeof window !== "undefined" && window.pageYOffset > 800 && "invisible"} sticky left-0 top-0 z-0 h-[60vh] w-full bg-[url(https://wallpaperaccess.com/full/1320095.jpg)] bg-cover bg-fixed bg-no-repeat lg:!h-[90vh]`}
    >
      <div className="relative z-30 pt-36 text-center text-white lg:!pr-4 lg:!pt-64">
        <p className="text-[1.125rem] lg:!text-[1.7rem]">
          اجاره ویلا در شمال و سراسر ایران زیبا
        </p>
        <div className="relative mx-auto mt-5 w-max">
          <i
            className={`${isShowSearchBox ? "z-[9999]" : null} absolute left-1 top-[4.5px] cursor-pointer rounded-full bg-customYellow px-2 py-2 text-[1.1rem] text-black transition-colors hover:bg-yellow-400`}
          >
            <CiSearch onClick={iconClickHandler} />
          </i>
          <input
            dir="rtl"
            type="text"
            onFocus={() => setIsShowSearchBox(true)}
            onChange={(event) => setSearchValue(event.target.value)}
            onKeyUp={(event) => inputChangeHandler(event)}
            className={`${isShowSearchBox && "relative z-[8999]"} h-[44px] w-[290px] rounded-full pl-10 pr-3 text-black placeholder:text-gray-300 focus:!border-[#6B7280] sm:!w-[400px] lg:!w-[450px]`}
            style={{ boxShadow: "none" }}
            placeholder="میخوای کجا بری؟"
          />

          {isShowSearchBox && (
            <div
              className="fixed left-0 top-0 h-screen w-full"
              onClick={() => setIsShowSearchBox(false)}
            ></div>
          )}
          {isShowSearchBox && (
            <div
              style={{
                boxShadow:
                  "rgba(37, 42, 49, 0.16) 0px 4px 8px 0px, rgba(37, 42, 49, 0.24) 0px 8px 24px 0px",
              }}
              className="absolute top-[110%] z-[9999] flex w-full items-center justify-center gap-4 rounded-md bg-white py-5 transition-transform"
            >
              <div className="flex gap-2 [&>*]:rounded-full [&>*]:bg-customYellow [&>*]:p-1 [&>*]:px-2 [&>*]:text-xs [&>*]:font-light">
                <Link href={"/rooms?city=رامسر"}>رامسر</Link>
                <Link href={"/rooms?city=ماسال"}>ماسال</Link>
                <Link href={"/rooms?city=شیراز"}>شیراز</Link>
              </div>
              <p className="text-black" dir="rtl">
                مقاصد پر طرفدار:
              </p>
            </div>
          )}
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
