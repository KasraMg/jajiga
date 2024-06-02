import React, { FC } from "react";
interface StepperInfoProps {
  title: string;
  text: string;
  className?: string;
}
const StepperInfo: FC<StepperInfoProps> = ({ title, text, className }) => {
  return (
    <div
      style={{ boxShadow: "grey 0px 1px 3px 0px" }}
      className={`${className && className} sticky top-[68px] hidden h-max rounded-xl p-4 md:!block`}
    >
      <p className="mb-3 text-right text-lg leading-7 text-[#252a31]">
        {title}
      </p>
      <span className="font-vazir text-justify text-sm font-light leading-6 text-[#404040]">
        {text}
      </span>
    </div>
  );
};

export default StepperInfo;
