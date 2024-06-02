import Badge from "@/src/components/modules/badge/Badge";
import React from "react";
import Summery from "./components/summery/Summery";
import Infoes from "./components/infoes/Infoes";
import Breadcrumb from "@/src/components/templates/room/details/components/breadcrumb/Breadcrumb";
import Calendars from "./components/calenders/Calendars";
import Rules from "./components/rules/Rules";
import { Map } from "@/src/components/modules/Map/Map";
import Comments from "./components/comments/Comments";

const Details = () => {
  return (
    <div className="flex w-full flex-col items-start justify-between pt-4 md:!w-[66.66%] md:!pt-0">
      <div className="mb-4 flex w-full justify-between px-4 md:!px-0">
        <div className="relative bottom-2 flex flex-col">
          <Breadcrumb className="py-2 text-sm" city="شهریار" state="تهران" />
          <p>اجاره ویلا استخردار در رامسر</p>
          <div className="mt-5 flex gap-x-1">
            <Badge bgColor="bg-yellow-300">کد:303030</Badge>
            <Badge bgColor="bg-[#f1f1f1]">+300 رزرو موفق</Badge>
            {/* stars component */}
          </div>
        </div>
        <div className="h-[72px] w-[72px]">
          <img
            src="https://storage.jajiga.com/public/avatar/small/1910012115521179193.jpg"
            alt=""
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
      <Summery />
      <main className="px-4 md:!px-0">
        <Infoes />
        <div className="mt-12 flex w-full gap-5 rounded-xl border border-solid border-gray-300 p-3">
          <svg
            className="w-10 lg:!w-14"
            fill="currentColor"
            viewBox="0 0 52 52"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="m7.4 44 1.1-.4c.3-.1.6-.1.9 0 .3.1.5.3.7.6s.1.6 0 .9c-.1.3-.4.5-.7.6l-1.1.4.5 1.1c.1.3.1.6 0 .9-.1.3-.4.5-.7.6-.3.1-.6.1-.9 0s-.5-.3-.7-.6L6.1 47l-1.1.5c-.3.1-.6.1-.9 0-.3-.1-.5-.3-.7-.6-.1-.3-.1-.6 0-.9.1-.3.4-.5.7-.6l1.1-.4-.5-1.1c-.1-.3-.1-.6 0-.9.1-.3.4-.5.7-.6.3-.1.6-.1.9 0 .3.1.5.3.7.6l.4 1zM8 7c0 1.7-1.3 3-3 3S2 8.7 2 7s1.3-3 3-3 3 1.3 3 3zM52 49.5c0 1.4-1.1 2.5-2.5 2.5S47 50.9 47 49.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z"></path>
            <path
              d="M27 40.2c.4 0 .8-.3.8-.7l.4-3c.6-4.4 4-7.9 8.4-8.4l3-.4c.4-.1.7-.4.7-.8s-.3-.8-.7-.8l-3-.4c-4.4-.6-7.9-4-8.4-8.4l-.4-3c-.1-.4-.4-.7-.8-.7s-.8.3-.8.7l-.4 3c-.6 4.4-4 7.9-8.4 8.4l-3 .4c-.4.1-.7.4-.7.8s.3.8.7.8l3 .4c4.4.6 7.9 4 8.4 8.4l.4 3c0 .3.4.7.8.7z"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: " rgb(240, 200, 7)",
              }}
            ></path>
            <path
              d="M27 40.9c-.8 0-1.5-.6-1.6-1.4l-.4-3c-.5-4-3.7-7.3-7.8-7.8l-3-.4c-.8-.1-1.4-.8-1.4-1.6s.6-1.5 1.4-1.6l3-.4c4-.5 7.3-3.7 7.8-7.8l.4-3c.1-.8.8-1.4 1.6-1.4s1.5.6 1.6 1.4l.4 3c.5 4 3.7 7.3 7.8 7.8l3 .4c.8.1 1.4.8 1.4 1.6s-.6 1.5-1.4 1.6l-3 .4c-4 .5-7.3 3.7-7.8 7.8l-.4 3c-.1.8-.8 1.4-1.6 1.4zm0-26.7s-.1 0 0 0l-.5 3c-.6 4.7-4.4 8.5-9.1 9.1l-3 .4s-.1 0-.1.1c0 0 0 .1.1.1l3 .4c4.7.6 8.5 4.4 9.1 9.1l.4 3c0 .1.2.1.2 0l.4-3c.6-4.7 4.4-8.5 9.1-9.1l3-.4s.1 0 .1-.1c0 0 0-.1-.1-.1l-3-.4c-4.7-.6-8.5-4.4-9.1-9.1l-.5-3c.1 0 0 0 0 0z"
              style={{ fill: " rgb(50, 50, 50)" }}
            ></path>
            <path d="M48.5 5.5h.9c.2 0 .5.1.6.3.2.2.3.4.3.6s-.2.4-.4.6c-.2.2-.4.3-.6.3h-.9v.9c0 .2-.1.4-.3.6-.2.2-.4.3-.6.3s-.4-.3-.5-.4c-.2-.2-.3-.4-.3-.6v-.9h-.9c-.2 0-.5-.1-.6-.3-.1-.1-.2-.3-.2-.5s.1-.4.3-.6c.2-.2.4-.3.6-.3h.9v-.9c0-.2.1-.4.3-.6.2-.2.4-.3.6-.3s.5.1.6.3c.2.2.3.4.3.6v.9z"></path>
          </svg>
          <div>
            <p className="mb-3">اقامتگاهی ممتاز</p>
            <span className="text-xs sm:!text-sm lg:!text-base">
              اقامتگاهی باکیفیت با میزبانی مهمان نواز که اقامتی شایسته را
              برایتان تضمین می‌کند.
            </span>
          </div>
        </div>
        <Calendars />
        <Rules />
        <div className="w-full border-b border-solid border-gray-300 pb-8">
          <p className="my-6 mb-4 text-lg text-[#252a31]">نقشه</p>
          <Map
            className="rounded-lg"
            position={[35.37469588708887, -105.45046566470816]}
          />
        </div>
        <Comments />
      </main>
    </div>
  );
};

export default Details;
