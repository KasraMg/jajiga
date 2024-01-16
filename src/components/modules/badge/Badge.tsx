import React, { FC } from 'react';

type BadgeProps = {
    bgColor: string;
    children: string;
};

const Badge: FC<BadgeProps> = ({ bgColor, children }) => {
    return <p className={`text-xs text-[#333] flex items-center justify-center min-h-[24px] px-2 rounded-full ${bgColor}`}>{children}</p>;
};

export default Badge;
