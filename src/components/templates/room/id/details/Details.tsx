import Badge from "@/src/components/modules/badge/Badge";
import React from "react";
import Summery from "./components/summery/Summery";
import Infoes from "./components/infoes/Infoes";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Calendars from "./components/calenders/Calendars";
import Rules from "./components/rules/Rules";
import { Map } from "@/src/components/modules/Map/Map";
import Comments from "./components/comments/Comments";
import { userVillasObj } from "@/src/types/Auth.types"; 
import Costly from "./components/costly/Costly";

const Details = (data: userVillasObj) => { 
  return (
    <div className="flex w-full flex-col items-start justify-between pt-4 md:!w-[66.66%] md:!pt-0">
      <div className="mb-4 flex w-full justify-between px-4 md:!px-0">
        <div className="relative bottom-2 flex flex-col">
          <Breadcrumb
            className="py-2 text-sm"
            city={data.address.city}
            state={data.address.state}
          />
          <p>
            اجاره{" "}
            {data.aboutVilla.villaType.title === "ویلایی"
              ? "منزل ویلایی"
              : data.aboutVilla.villaType.title}{" "}
            در {data.address.city}
          </p>
          <div className="mt-5 flex gap-x-1">
            <Badge bgColor="bg-yellow-300">
              کد: ({data._id.slice(18, 26)})
            </Badge>
            {/* <Badge bgColor="bg-[#f1f1f1]">+300 رزرو موفق</Badge> */}
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
      <Summery {...data} />
      <main className="w-full px-4 md:!px-0">
        <Infoes {...data} />
        <Costly costly={data.costly} />
        <Calendars {...data}/>
        <Rules {...data}/>
        <div className="w-full border-b border-solid border-gray-300 pb-8">
          <p className="my-6 mb-4 text-lg text-[#252a31]">نقشه</p>
          <Map
            className="rounded-lg"
            position={[data.coordinates.x, data.coordinates.y]}
          />
        </div>
        <Comments />
      </main>
    </div>
  );
};

export default Details;
