"use client";
import Space from "./components/space";
import Price from "./components/price";
import Type from "./components/type";
import Zone from "./components/zone";
import Facilities from "./components/facilities";
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
      <Facilities/>
    </div>
  );
};

export default Filters;

 
