import { userVillasObj } from "@/src/types/Auth.types";
import React from "react";
import { GoDotFill } from "react-icons/go";
const Rules = (data: userVillasObj) => {
  return (
    <div className="mt-8 w-full border border-x-0 border-solid border-gray-300">
      <h2 className="my-4 text-lg text-[#252a31]">مقررات</h2>
      <ul className="[&>*]:font-vazir space-y-2 pb-8 font-light [&>*]:flex [&>*]:items-center [&>*]:gap-3">
        {data.rules.smoke && (
          <li>
            <GoDotFill />
            استعمال دخانیات (سیگار، قلیان و ...) در فضای داخلی ساختمان
            ممنوع است
          </li>
        )}

        {data.rules.music && (
          <li>
            <GoDotFill />
            برگزاری مهمانی و پخش موزیک ممنوع است.
          </li>
        )}

        {data.rules.pet && (
          <li>
            <GoDotFill />
            همراه داشتن حیوان خانگی ممنوع است
          </li>
        )}

        {data.rules.more && (
          <li>
            <GoDotFill />
            برگزاری مهمانی و پخش موزیک ممنوع است.
          </li>
        )}
      </ul>
    </div>
  );
};

export default Rules;
