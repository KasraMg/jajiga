import { footerOptions } from "@/src/utils/options";
import Link from "next/link";
import React from "react";

const CitiesList = () => {
  return (
    <div className="mt-8 grid grid-cols-[auto,auto] gap-2 sm:!grid-cols-5">
      {footerOptions.map((option) => (
        <Link
        key={option.href}
          href={option.href}
          style={{
            boxShadow:
              " rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
          }}
          className="rounded-full bg-white py-1 pr-4 text-xs"
        >
          {option.lable}
        </Link>
      ))}
    </div>
  );
};

export default CitiesList;
