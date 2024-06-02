import React, { FC } from "react";
interface CardProps {}
const Card: FC<CardProps> = () => {
  return (
    <div className="relative cursor-pointer text-white">
      <img
        className="!h-[247px] w-full rounded-xl object-cover sm:!h-[274px]"
        src="https://www.jajiga.com/static/img/home/special-filters/cottageForest.jpg?v=3"
        alt=""
      />
      <div
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
        }}
        className="absolute bottom-0 w-full rounded-xl pb-4 text-center"
      >
        <p className="mb-2">کلبه چوبی</p>
        <div className="flex items-center justify-center gap-2">
          <span className="font-vazir text-[12px] font-light">
            558 اقامتگاه
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
