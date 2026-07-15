"use client";
import { Button } from "@/src/components/shadcn/ui/button";
import { VillaDetails } from "@/src/types/villa.types";
import { convertToJalali, saveIntoLocalStorage } from "@/src/utils/utils";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import swal from "sweetalert";
import Loader from "@/src/components/modules/loader/loader";
import Image from "next/image";
import { useDeleteVilla } from "@/src/api/admin-panel/villa";
import { useUser } from "@/src/api/user";

const Rooms = () => {
  const { data: userData } = useUser();
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["auth"] });

  const villaDeleteHandler = (id: string) => {
    swal({
      title: "آیا از حذف ویلا مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        mutation(id);
      }
    });
  };

  const { mutate: mutation, isPending: mutationPending } = useDeleteVilla();

  return (
    <>
      {userData?.villas.length ? (
        <div className="mt-5">
          <p>اقامتگاه های خود را تکمیل یا ویرایش کنید</p>
          <span className="text-xs font-thin">
            توجه: اقامتگاه تنها بعد از تکمیل، قابل بررسی و انتشار می‌باشد.
          </span>
          {userData.villas.slice(0, 3).map((villa: VillaDetails) => (
            <section key={villa._id} className="mt-4">
              <div className="flex flex-wrap items-center justify-between gap-2 gap-y-3 sm:!flex-nowrap sm:!justify-between sm:!p-3 sm:!shadow-lg md:!flex-wrap">
                <div className="flex items-center gap-2">
                  <div
                    className={`relative ml-1 flex h-[60px] w-[92px] items-center justify-center overflow-hidden rounded-lg p-1`}
                  >
                    {villa.cover.length ? (
                      <Image
                        alt="avatar"
                        className="h-full"
                        width={1000}
                        height={1000}
                        crossOrigin="anonymous"
                        src={`${process.env.NEXT_PUBLIC_API_URL}/villa/covers/${villa.cover[0]}`}
                      />
                    ) : (
                      <Image
                        alt="avatar"
                        width={1000}
                        height={1000}
                        crossOrigin="anonymous"
                        src={"/images/room404img.jfif"}
                      />
                    )}
                    <p
                      className={`absolute left-[1.7rem] top-[18px] mb-0 rounded-lg bg-white p-1 text-xs text-black`}
                    >
                      {((villa.step - 1) / (9 - 1)) * 100}%
                    </p>
                  </div>
                  {villa.isAccepted === "true" ? (
                    <>
                      <Link
                        href={`/room/${villa._id}`}
                        className="hidden xl:!block"
                      >
                        ({villa._id.slice(18, 26)})
                      </Link>
                      <p className="text-xs text-green-500">تایید شده</p>
                    </>
                  ) : (
                    <p className="text-xs text-red-600 sm:!text-base">
                      {" "}
                      {villa.isAccepted === "rejected"
                        ? "رد شده"
                        : "تایید نشده "}{" "}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-center xl:!hidden">
                    ({villa._id.slice(18, 26)})
                  </p>
                  <p className="text-xs font-thin lg:!text-sm">
                    به‌روزرسانی: {convertToJalali(villa.updatedAt)}
                  </p>
                </div>

                <div className="flex w-full justify-between gap-2 sm:!w-auto sm:!justify-normal">
                  <Button
                    onClick={() => villaDeleteHandler(villa._id)}
                    className="flex w-full justify-center gap-2 px-4 text-xs sm:!w-auto xl:!px-8"
                    variant={"danger"}
                  >
                    <FaRegTrashCan />
                    حذف
                  </Button>
                  {villa.isAccepted !== "rejected" &&
                    (villa.finished ? (
                      <Link
                        className="block w-full sm:!w-auto"
                        href={`/room/edit/${villa._id}`}
                      >
                        <Button
                          className="flex w-full justify-center gap-2 px-4 text-xs sm:!w-auto xl:!px-8"
                          variant={"blue"}
                        >
                          ویرایش
                          <FaChevronLeft />
                        </Button>
                      </Link>
                    ) : (
                      <Link
                        onClick={() =>
                          saveIntoLocalStorage("villaId", villa._id)
                        }
                        href={`/new-room/step${villa.step}`}
                        className="block w-full sm:!w-auto"
                      >
                        <Button
                          className="flex w-full justify-center gap-2 px-4 text-xs sm:!w-auto xl:!px-8"
                          variant={"main"}
                        >
                          تکمیل
                          <FaChevronLeft />
                        </Button>
                      </Link>
                    ))}
                </div>
              </div>
            </section>
          ))}
          {userData.villas.length > 3 && (
            <Link
              className="my-4 block w-full text-center text-xs text-red-600"
              href={"/user-rooms"}
            >
              مشاهده تمام اقامتگاه ها
            </Link>
          )}
        </div>
      ) : (
        <div className="mx-auto mt-16 rounded-lg bg-red-200 p-4 text-center">
          <p>آگهی ای موجود نیست</p>
        </div>
      )}
      {mutationPending && <Loader />}
    </>
  );
};

export default Rooms;
