"use client";
import Space from "./partials/space";
import Price from "./partials/price";
import Type from "./partials/type";
import Zone from "./partials/zone";
import Facilities from "./partials/facilities";

const Filters = () => {
  return (
    <div
      className="flex flex-wrap justify-center gap-2 bg-[#f3f3f3] px-8 py-2 sm:!justify-start"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Space />
      <Price />
      <Type />
      <Zone />
      <Facilities />
    </div>
  );
};

export default Filters;
