"use client";

import { Button } from "@/src/components/shadcn/ui/button";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { authStore } from "@/src/stores/auth";
import { VillaDetails } from "@/src/types/Villa.types";
import {
  baseUrl,
  convertToJalali,
  saveIntoLocalStorage,
} from "@/src/utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import swal from "sweetalert";
import Cookies from "js-cookie";
import Loader from "@/src/components/modules/loader/Loader";
import Image from "next/image";

const Rooms = () => {
  const { userData } = authStore((state) => state);
  const accessToken = Cookies.get("AccessToken");
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["auth"] });

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
    <>
      {userData?.villas.length ? (
        <div className="mt-5">
          <p>اقامتگاه های خود را تکمیل یا ویرایش کنید</p>
          <span className="text-xs font-thin">
            توجه: اقامتگاه تنها بعد از تکمیل، قابل بررسی و انتشار می‌باشد.
          </span>
          {userData.villas.slice(0,3).map((villa: VillaDetails) => (
            <section className="mt-4">
              <div className="flex flex-wrap items-center justify-start gap-2 p-3 shadow-lg sm:!flex-nowrap sm:!justify-between sm:!gap-0">
                <div className="flex items-center gap-2">
                  <div
                    className={`relative ml-1 flex h-[60px] w-[92px] items-center justify-center overflow-hidden rounded-lg p-1`}
                  >
                    {villa.cover ? (
                      <Image
                        alt="avatar"
                        width={1000}
                        height={1000}
                        crossOrigin="anonymous"
                        src={`https://jajiga-backend.liara.run/villa/covers/${villa.cover[0]}`}
                      />
                    ) : (
                      <Image
                        alt="avatar"
                        width={1000}
                        height={1000}
                        crossOrigin="anonymous"
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhFKJwV5wJD6dkUvbLLW75ofGNZ6pbsyYWmXDGK1KTg&s"
                        }
                      />
                    )}
                    <p
                      className={`absolute left-[1.7rem] top-[18px] mb-0 rounded-lg bg-white p-1 text-xs text-black`}
                    >
                      {((villa.step - 1) / (9 - 1)) * 100}%
                    </p>
                  </div>
                  <Link href={`/room/${villa._id}`} className="hidden xl:block">
                    ({villa._id.slice(18, 26)})
                  </Link>
                </div>
                <div>
                  <p className="xl:!hidden">({villa._id.slice(18, 26)})</p>
                  <p className="text-xs font-thin lg:!text-sm">
                    به‌روزرسانی: {convertToJalali(villa.updatedAt)}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => villaDeleteHandler(villa._id)}
                    className="flex justify-center gap-2 px-4 text-xs xl:!px-8"
                    variant={"danger"}
                  >
                    <FaRegTrashCan />
                    حذف
                  </Button>
                  {villa.finished ? (
                    <Link href={`/room/edit/${villa._id}`}>
                      <Button
                        className="flex justify-center gap-2 px-4 text-xs xl:!px-8"
                        variant={"blue"}
                      >
                        ویرایش
                        <FaChevronLeft />
                      </Button>
                    </Link>
                  ) : (
                    <Link
                      onClick={() => saveIntoLocalStorage("villaId", villa._id)}
                      href={`/newRoom/step${villa.step}`}
                    >
                      <Button
                        className="flex justify-center gap-2 px-4 text-xs xl:!px-8"
                        variant={"main"}
                      >
                        تکمیل
                        <FaChevronLeft />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </section>
          ))}
        {userData.villas.length > 3 && <Link className="text-center my-4 block text-xs text-red-600 w-full" href={'/all'}>مشاهده تمام اقامتگاه ها</Link>}  
        </div>
      ) : (
        <div className="mx-auto mt-16 rounded-lg bg-red-200 p-4 text-center">
          <p>آگهی ای موجود نیست</p>
        </div>
      )}
      {mutation.isPending && <Loader />}
    </>
  );
};

export default Rooms;
