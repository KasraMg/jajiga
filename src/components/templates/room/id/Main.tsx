"use client";

import useGetData from "@/src/hooks/useGetData";
import Details from "./details/Details";
import Gallery from "./gallery/Gallery";
import Reservation from "./reservation/Reservation";
import Cookies from "js-cookie";
import { baseUrl } from "@/src/utils/utils";
import { useParams, useRouter } from "next/navigation";
import NotFound from "./NotFound";
const Main = () => {
  const params = useParams();
  async function getVilla() {
    const accessToken = Cookies.get("AccessToken");

    const headers = {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    }
    const res = await fetch(`${baseUrl}/villa/get/${params.id}`, {
      headers,
    });
    return res.json();
  }

  const { data, status, isLoading } = useGetData<any>(["villa"], getVilla);

  console.log(data);

  return (
    <div className="Container mt-[3.8rem] md:!mt-20">
      {data && data.statusCode === 200 ? (
        <div>
          <Gallery {...data.villa} />
          <div className="flex items-start gap-8 px-0 md:!mt-9 md:!px-4 xl:!px-0">
            <Details {...data} />
            <Reservation {...data.villa} />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Main;
