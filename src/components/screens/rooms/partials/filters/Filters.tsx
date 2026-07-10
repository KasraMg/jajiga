"use client";
import Space from "./components/Space";
import Price from "./components/Price";
import Type from "./components/Type";
import Zone from "./components/Zone";
import Facilities from "./components/Facilities";
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

 
