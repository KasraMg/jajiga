"use client";
import Layout from "@/src/components/layouts/userLayout/Layout";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import Card from "@/src/components/templates/userPanel/all/Card";
import { authStore } from "@/src/stores/auth";
import { userVillasObj } from "@/src/types/Auth.types";
import Image from "next/image";
import { useEffect, useState } from "react";
const Reserve = () => {
  const [showUnComplatePosts, setShowUnComplatePosts] = useState(false);
  const { userData } = authStore((state) => state);

  return (
    <Container disableFooter={true}>
      <Breadcrumb className="!pb-[80px]" route={"اقامتگاه ها"} />
      <Layout>
        <div
          className={`relative bottom-2 z-10 flex w-full !min-w-full gap-4 rounded-xl bg-white px-3 sm:!px-5`}
        >
          <div className="Container">
            <main>
              <div className="relative bottom-[29px] flex gap-3 text-sm">
                <p
                  onClick={() => setShowUnComplatePosts(false)}
                  className={`${
                    !showUnComplatePosts &&
                    "border-b-2 border-solid border-black font-bold !text-black"
                  } cursor-pointer pb-2 text-gray-700`}
                >
                  همه ({userData?.villas.length}){" "}
                </p>
                <p
                  onClick={() => setShowUnComplatePosts(true)}
                  className={`${
                    showUnComplatePosts &&
                    "border-b-2 border-solid border-black font-bold !text-black"
                  } cursor-pointer pb-2 text-gray-700`}
                >
                  در حال تکمیل (
                  {
                    userData?.villas?.filter(
                      (villa: userVillasObj) => !villa.finished,
                    ).length
                  }
                  ){" "}
                </p>
              </div>

              {userData?.villas.length ? (
                <>
                  {showUnComplatePosts ? (
                    <div className="grid !grid-cols-[auto] gap-4 md:!grid-cols-[auto,auto] xl:!grid-cols-[auto,auto,auto]">
                      {userData?.villas?.filter(
                        (villa: userVillasObj) => !villa.finished,
                      ).length ? (
                        userData.villas?.map((villa: userVillasObj) =>
                          !villa.finished ? <Card {...villa} /> : null,
                        )
                      ) : (
                        <div className="text-center">
                          <Image
                            src={
                              "https://www.jajiga.com/static/img/404/error404.png"
                            }
                            height={1000}
                            className="mx-auto block h-[340px] w-[583px]"
                            alt="notFound"
                            width={1000}
                          />
                          <p className="text-2xl font-medium">
                           اقامتگاهی یافت نشد.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="grid !grid-cols-[auto] gap-4 md:!grid-cols-[auto,auto] xl:!grid-cols-[auto,auto,auto]">
                      {userData.villas.length ? (
                        userData.villas?.map((villa: userVillasObj) => (
                          <Card {...villa} />
                        ))
                      ) : (
                        <div className="mx-auto mt-16 p-4 text-center">
                          <p>آگهی ای موجود نیست</p>
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="mt-16 flex flex-col justify-center text-center">
                  <svg
                    width={170}
                    className="sc-679cb2a8-0 iBzALU sc-235a0797-0 gvvhNx mx-auto"
                    fill="currentColor"
                    viewBox="0 0 104 72"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M6.54 58.18v7.27H88v-7.27Zm-.73-6.54A5.81 5.81 0 0 0 0 57.45v8.73A5.81 5.81 0 0 0 5.81 72h82.91a5.81 5.81 0 0 0 5.82-5.82v-8.73a5.81 5.81 0 0 0-5.82-5.81Z"
                      fill="#e1e0e1"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M20.78 25.15a37.46 37.46 0 0 1 63.94 26.49h-6.54a30.91 30.91 0 1 0-61.82 0H9.81a37.48 37.48 0 0 1 10.97-26.49Z"
                      fill="#e1e0e1"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M104 34v2.11h-8.73v-1.65l5-5.7H95.4v-2.11h8.43v1.66l-5 5.69Zm-4.58-19.06v3.67h-14.8v-2.87l8.44-9.89h-8.23V2.19h14.31v2.86L90.69 15ZM57.13 37.82c-3.36 0-6.38-2.23-7.86-5.81l-.23-.55-.22-.53.48-.29 2-1.17.63-.38.28.69.23.55a4.94 4.94 0 0 0 9.48 0l.23-.55.29-.69.63.38 1.94 1.17.49.29-.22.53-.23.55c-1.54 3.58-4.55 5.81-7.92 5.81Zm-19.73 0c-3.36 0-6.37-2.23-7.86-5.81l-.24-.55-.21-.53.48-.29 1.95-1.17.63-.38.28.69.23.55a5.28 5.28 0 0 0 4.74 3.56 5.28 5.28 0 0 0 4.74-3.56l.23-.55.29-.69.63.38 1.94 1.17.49.29-.22.53-.23.55c-1.49 3.58-4.5 5.81-7.87 5.81Zm9.87 5.82a2.9 2.9 0 0 0-1.11 5.59 2.85 2.85 0 0 0 2.22 0 2.9 2.9 0 0 0-1.11-5.59"
                      fill="#9b9b9b"
                    ></path>
                    <path
                      d="M47.63 18.18a3.27 3.27 0 0 1-3.27-3.27V5.45a3.28 3.28 0 0 1 6.55 0v9.46a3.27 3.27 0 0 1-3.28 3.27Z"
                      fill="#e1e0e1"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M37.81 3.27A3.28 3.28 0 0 1 41.09 0h13.09a3.28 3.28 0 0 1 0 6.55H41.09a3.28 3.28 0 0 1-3.28-3.28Z"
                      fill="#e1e0e1"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <p className="mt-4">در حال حاضر رزروی ندارید</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </Layout>
    </Container>
  );
};

export default Reserve;
