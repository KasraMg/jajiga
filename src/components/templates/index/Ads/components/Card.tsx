import React, { FC } from "react";

interface CardProps {
  title: string;
  text: string;
  svg: any;
}
const Card: FC<CardProps> = (data:CardProps) => {
  console.log(data);
  
  return (
    <section className="border border-solid flex gap-3 items-center border-[#00000026] rounded-xl w-full px-5 py-3">
      {data.svg}
      <div>
        <p>{data.title}</p>
        <span className="font-vazir font-light  text-xs">{data.text}</span>
      </div>
    </section>
  );
};

export default Card;
