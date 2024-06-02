import React, { FC } from "react";

type BadgeProps = {
  bgColor: string;
  children: string;
};

const Badge: FC<BadgeProps> = ({ bgColor, children }) => {
  return (
    <p
      className={`flex min-h-[24px] items-center justify-center rounded-full px-2 text-xs text-[#333] ${bgColor}`}
    >
      {children}
    </p>
  );
};

export default Badge;
