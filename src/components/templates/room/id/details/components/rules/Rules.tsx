import React from "react";
import { GoDotFill } from "react-icons/go";
const Rules = () => {
  return (
    <div className="mt-8 w-full border border-x-0 border-solid border-gray-300">
      <h2 className="my-4 text-lg text-[#252a31]">مقررات</h2>
      <ul className="[&>*]:font-vazir space-y-2 pb-8 font-light [&>*]:flex [&>*]:items-center [&>*]:gap-3">
        <li>
          <GoDotFill />
          برگزاری مهمانی و پخش موزیک ممنوع است .
        </li>
        <li>
          <GoDotFill />
          برگزاری مهمانی و پخش موزیک ممنوع است.
        </li>
        <li>
          <GoDotFill />
          برگزاری مهمانی و پخش موزیک ممنوع است.
        </li>
        <li>
          <GoDotFill />
          برگزاری مهمانی و پخش موزیک ممنوع است.
        </li>
      </ul>
    </div>
  );
};

export default Rules;
