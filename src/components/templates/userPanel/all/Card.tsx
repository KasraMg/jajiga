import { Button } from "@/src/components/shadcn/ui/button";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { VillaDetails } from "@/src/types/Villa.types";
import { baseUrl } from "@/src/utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";
import Cookies from "js-cookie";

import swal from "sweetalert";
const Card = (villa: VillaDetails) => {
  console.log(villa);
   
  const accessToken = Cookies.get("AccessToken");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return await fetch(`${baseUrl}/villa/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log(data);

      if (data.statusCode === 200) {
        queryClient.invalidateQueries({ queryKey: ["auth"] });
        toast({
          variant: "success",
          title: "ویلا با موفقیت حذف شد",
        });
      }
    },
  });

  const villaDeleteHandler = (id: string) => {
    swal({
      title: "آیا از حذف ویلا مطمئن هستید",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        mutation.mutate(id);
      }
    });
  };

  return (
    <div
      className="w-full xl:!w-[330px]"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div className="relative w-full">
        {villa.cover ? (
          <img
            crossOrigin="anonymous"
            className="h-[210px] w-full rounded-t-md"
            src={`https://jajiga-backend.liara.run/villa/covers/${villa.cover[0]}`}
            alt="flag"
          />
        ) : (
          <img
            className="h-[210px] w-full rounded-t-lg"
            src="https://www.jajiga.com/static/img/rooms/blankHome.png"
            alt=""
          />
        )}
        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between rounded-t-lg bg-[#00000080] px-3 py-2">
          <p className="text-sm font-thin text-white">
            {villa.address.state}،{villa.address.city}
          </p>
          <p className="rounded-full bg-white p-1 px-2 text-sm font-thin text-black">
            کد: ({villa._id.slice(18, 26)})
          </p>
        </div>
        <div className="absolute right-0 top-3 flex items-center gap-2 rounded-l-full bg-customYellow p-1 pl-2">
          <SlReload />
          <p className="text-sm text-gray-700">
            {villa.finished ? "تکمیل شده" : " در حال تکمیل"}
          </p>
        </div>
      </div>
      <div className="px-2 py-3">
        <div className="mb-2 flex items-center gap-3">
          <div className="w-full rounded-full bg-[#f5f5f5]">
            <div
              style={{ width: ((villa.step - 1) / (9 - 1)) * 100 + "%" }}
              className={`h-3 rounded-full bg-customYellow text-center`}
            ></div>
          </div>
          <p className="text-sm font-thin">
            {" "}
            {((villa.step - 1) / (9 - 1)) * 100}%
          </p>
        </div>

        <div className="flex gap-2">
          <Link className="w-full" href={"/profile"}>
            <Button
              onClick={() => villaDeleteHandler(villa._id)}
              className="flex w-full justify-center gap-2 rounded-none border-0 px-4 text-xs xl:!px-8"
              variant={"white"}
            >
              <FaRegTrashCan />
              حذف
            </Button>
          </Link>
          {villa.finished ? (
            <Link className="w-full" href={`/room/edit/${villa._id}`}>
              <Button
                className="flex w-full justify-center gap-2 px-4 text-xs xl:!px-8"
                variant={"blue"}
              >
                ویرایش
                <FaChevronLeft />
              </Button>
            </Link>
          ) : (
            <Link className="w-full" href={"/profile"}>
              <Button
                className="flex w-full justify-center gap-2 px-4 text-xs xl:!px-8"
                variant={"main"}
              >
                ادامه ثبت
                <FaChevronLeft />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
