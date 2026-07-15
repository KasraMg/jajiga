import Badge from "@/src/components/modules/badge/badge";
import Summery from "./partials/summery/summery";
import Infoes from "./partials/infoes/infoes";
import Breadcrumb from "./partials/breadcrumb/breadcrumb";
import Rules from "./partials/rules/rules";
import Comments from "./partials/comments/comments";
import { VillaResponse } from "@/src/types/villa.types";
import Costly from "./partials/costly/costly";
import ShareModal from "./partials/share/share-modal";
import Image from "next/image";
import Wishes from "./partials/wishes/wishes";

import dynamic from "next/dynamic";
import { Skeleton } from "@/src/components/shadcn/ui/skeleton";
import { FaRegCircleUser } from "react-icons/fa6";

const Map = dynamic(
  () => import("@/src/components/modules/map/map").then((mod) => mod.Map),
  {
    ssr: false,
    loading: () => <Skeleton className="mx-auto block h-[250px] w-full" />,
  },
);

const Calendars = dynamic(
  () => import("./partials/calenders/calendars").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col justify-center gap-5 xl:!flex-row">
        <Skeleton className="mx-auto block h-[280px] w-full sm:!h-[320px] xl:!w-[320px]" />
        <Skeleton className="mx-auto block h-[280px] w-full sm:!h-[320px] xl:!w-[320px]" />
      </div>
    ),
  },
);
const Details = (data: VillaResponse) => {
  return (
    <div className="flex w-full flex-col items-start justify-between pt-4 md:!w-[66.66%] md:!pt-0 lg:!w-[80.66%] xl:!w-[66.66%]">
      <div className="mb-4 flex w-full justify-between px-4 md:!px-0">
        <div className="relative bottom-2 flex flex-col">
          <Breadcrumb
            className="py-2 text-sm"
            city={data.villa.address.city}
            state={data.villa.address.state}
          />
          <p>
            اجاره{" "}
            {data.villa.aboutVilla.villaType?.title === "ویلایی"
              ? "منزل ویلایی"
              : data.villa.aboutVilla.villaType?.title}{" "}
            در {data.villa.address.city}
          </p>
          {data.villa.isAccepted === "rejected" ? (
            <p className="text-red-600">رد شده</p>
          ) : (
            <div className="mt-5 flex gap-x-1">
              <Badge bgColor="bg-customYellow">
                کد: ({data.villa._id.slice(18, 26)})
              </Badge>
              <Wishes data={data} wishesStatus={data.villa.isWishes} />
              <ShareModal />
              {/* <Badge bgColor="bg-[#f1f1f1]">+300 رزرو موفق</Badge> */}
              {/* stars component */}
            </div>
          )}
        </div>
        <div className="h-[72px] w-[72px]">
          {data.villa?.user?.avatar ? (
            <Image
              alt="avatar"
              width={1000}
              height={1000}
              className="h-full w-full rounded-full"
              src={`${process.env.NEXT_PUBLIC_API_URL}/user/avatars/${data.villa.user.avatar}`}
            />
          ) : (
            <FaRegCircleUser className="text-gray-500 size-[70px]" />
          )}
        </div>
      </div>
      <Summery {...data.villa} />
      <main className="w-full px-4 md:!px-0">
        <Infoes {...data.villa} />
        <Costly costly={data.villa.costly} />
        <Calendars {...data} />
        <Rules {...data.villa} />
        <div className="w-full border-b border-solid border-gray-300 pb-8">
          <p className="my-6 mb-4 text-lg text-[#252a31]">نقشه</p>
          <Map
            className="rounded-lg"
            position={[data.villa.coordinates.x, data.villa.coordinates.y]}
          />
        </div>
        <Comments userId={data.villa.user._id} comments={data.comments} />
      </main>
    </div>
  );
};

export default Details;
