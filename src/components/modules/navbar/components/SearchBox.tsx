import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
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
    <div className="relative mx-auto w-full md:!w-max">
      <i
        onClick={iconClickHandler}
        className={`${isShowSearchBox ? "z-[9999] bg-customYellow" : ""} absolute left-[2px] top-[1.2px] cursor-pointer rounded-full px-2 py-2 text-[1.2rem] text-black transition-colors sm:!left-[.20rem] sm:!top-[3.3px]`}
      >
        <CiSearch />
      </i>
      <input
        style={{ boxShadow: "none" }}
        dir="rtl"
        type="text"
        value={searchValue}
        onFocus={() => setIsShowSearchBox(true)}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyUp={(event) => inputChangeHandler(event)}
        className={`${isShowSearchBox && "relative z-[8999]"} h-full w-full rounded-full border border-[#0000005c] py-2 pl-8 pr-3 text-sm placeholder:text-sm placeholder:text-gray-300 focus:!border-[#6B7280] sm:!w-full sm:!text-base sm:placeholder:!text-base md:!w-[170px] md:!py-0 lg:!w-[363px]`}
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
            <Link
              onClick={() => setIsShowSearchBox(false)}
              href={"/rooms?city=رامسر"}
            >
              رامسر
            </Link>
            <Link
              onClick={() => setIsShowSearchBox(false)}
              href={"/rooms?city=ماسال"}
            >
              ماسال
            </Link>
            <Link
              onClick={() => setIsShowSearchBox(false)}
              href={"/rooms?city=شیراز"}
            >
              شیراز
            </Link>
          </div>
          <p dir="rtl">مقاصد پر طرفدار:</p>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
