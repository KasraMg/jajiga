"use client";

import { Button } from "@/src/components/shadcn/ui/button";
import { authStore } from "@/src/stores/auth";
import { userVillasObj } from "@/src/types/Auth.types";
import { convertToJalali, saveIntoLocalStorage } from "@/src/utils/utils";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const Rooms = () => {
  const { userData } = authStore((state) => state);
  console.log(userData?.villas);
  console.log(userData);

  return (
    <>
      {userData?.villas.length ? (
        <div className="mt-5">
          <p>اقامتگاه های خود را تکمیل کنید</p>
          <span className="text-xs font-thin">
            توجه: اقامتگاه تنها بعد از تکمیل، قابل بررسی و انتشار می‌باشد.
          </span>
          {userData.villas?.map((villa: userVillasObj) => (
            <section className="mt-4">
              <div className="flex flex-wrap items-center justify-start gap-2 p-3 shadow-lg sm:!flex-nowrap sm:!justify-between sm:!gap-0">
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      backgroundImage: villa.cover
                        ? `url(https://jajiga-backend.liara.run/villa/covers/${villa.cover[0]})`
                        : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhFKJwV5wJD6dkUvbLLW75ofGNZ6pbsyYWmXDGK1KTg&s)",
                    }}
                    className={`relative ml-1 flex h-[60px] w-[92px] items-center justify-center overflow-hidden rounded-lg p-1`}
                  >
                    <p
                      className={`mb-0 rounded-lg bg-white p-1 text-xs text-black`}
                    >
                      {(villa.step - 1) / (9 - 1) * 100}%
                    </p>
                  </div>
                  <p className="hidden xl:block">({villa._id.slice(18, 26)})</p>
                </div>
                <div>
                  <p className="xl:!hidden">({villa._id.slice(18, 26)})</p>
                  <p className="text-xs font-thin lg:!text-sm">
                    به‌روزرسانی: {convertToJalali(villa.updatedAt)}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link href={"/profile"}>
                    <Button
                      className="flex justify-center gap-2 px-4 text-xs xl:!px-8"
                      variant={"danger"}
                    >
                      <FaRegTrashCan />
                      حذف
                    </Button>
                  </Link>
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
                </div>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-16 rounded-lg bg-red-200 p-4 text-center">
          <p>آگهی ای موجود نیست</p>
        </div>
      )}
    </>
  );
};

export default Rooms;
