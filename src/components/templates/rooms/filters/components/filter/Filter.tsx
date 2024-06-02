import React, { FC, useRef } from "react";
interface FilterProps {
  smRight?: boolean;
  // hideHandler: () => void,
  title: string;
  icon: any;
  children?: React.ReactElement;
}

const Filter: FC<FilterProps> = ({
  // show,
  smRight,
  title,
  icon,
  children,
}) => {
  const radio = useRef<any>();
  return (
    <div className="relative">
      <div className="flex items-center gap-1 rounded-full bg-white p-2 text-sm md:relative">
        {icon}
        <p className="font-vazir text-sm font-light">{title}</p>
        <input
          ref={radio}
          name={`radioBox`}
          id="filter-input"
          className="peer absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
          type="radio"
        />
        <section
          className={`absolute top-10 hidden bg-white transition-transform peer-checked:!block ${smRight ? "-right-[50%]" : "-right-[20%]"} w-[200px] rounded-lg shadow-sm md:!right-5 md:!w-full md:!min-w-[380px]`}
        >
          <div
            onClick={() => (radio.current.checked = false)}
            className="fixed left-0 top-[100px] h-full w-full"
          ></div>
          {children && children}
        </section>
      </div>
    </div>
  );
};

export default Filter;
