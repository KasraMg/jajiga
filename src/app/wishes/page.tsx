"use client";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Card from "@/src/components/modules/card/Card";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "@/src/components/shadcn/ui/button";
import { CiSearch } from "react-icons/ci";
import Container from "@/src/components/modules/container/Container";
import Link from "next/link";
import useGetData from "@/src/hooks/useGetData";
import { fetchWishes } from "@/src/utils/fetchs";
import { VillaDetails } from "@/src/types/Villa.types";
import Loader from "@/src/components/modules/loader/Loader";
import Head from "next/head";
import Metadata from "@/src/utils/Metadata";

interface wishesProps {
  faveVillas: VillaDetails[];
}
const page = () => {
  const { data, isPending } = useGetData<wishesProps>(["wishes"], fetchWishes);
  return (
    <Container disableFooter={true}>
      <Breadcrumb route="علاقه‌مندی‌ها" />
      <Metadata seoTitle={"جاجیگا |  علاقه‌مندی‌ها"} seoDescription={"ویلا های مورد علاقتون رو در این صفحه میتونید پیدا کنید"} />
  <main
        className={`relative bottom-2 z-10 w-full rounded-xl bg-white px-3 sm:!px-5`}
      >
        <div className="Container">
          <div className="mx-auto flex flex-col items-center justify-center space-y-4 pt-8">
            <main
              className={`relative bottom-2 z-10 w-full rounded-xl bg-white px-3 sm:!px-5`}
            >
              <div className="Container">
                {" "}
                {data?.faveVillas?.length ? (
                  <div className="mx-auto w-full pt-2">
                    <div className="mt-4 grid grid-cols-[1fr] gap-8 sm:!grid-cols-[1fr,1fr] lg:!grid-cols-[1fr,1fr,1fr]">
                      {data.faveVillas.map((data: VillaDetails) => (
                        <Card wishes={true} data={data} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto flex flex-col items-center justify-center space-y-4 pt-8">
                    <svg
                      className="mt-8 h-36 w-36"
                      fill="none"
                      viewBox="0 0 169 140"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M44 15C38.2218 15 32.5003 16.1381 27.1619 18.3493C21.8236 20.5605 16.9731 23.8015 12.8873 27.8873C8.80152 31.9731 5.56051 36.8236 3.3493 42.1619C1.13809 47.5003 0 53.2218 0 59V59.02L0.00015974 59.0399C0.12922 75.194 4.77309 88.0205 17.2161 100.43C29.2431 112.426 48.5021 123.97 77.4442 138.329C78.2189 138.789 79.109 139.035 80.0156 139.032C80.9223 139.035 81.8126 138.789 82.5873 138.329C111.556 123.952 129.89 112.37 140.959 100.264C152.429 87.7195 155.873 74.8795 156 59.0399L156 59.02V59C156 53.2218 154.862 47.5003 152.651 42.1619C150.439 36.8236 147.198 31.9731 143.113 27.8873C139.027 23.8015 134.176 20.5605 128.838 18.3493C123.5 16.1381 117.778 15 112 15C106.222 15 100.5 16.1381 95.1619 18.3493C89.8236 20.5605 84.9731 23.8015 80.8873 27.8873L84.4229 31.4228L80.8873 27.8873C80.7243 28.0503 80.5635 28.2107 80.4049 28.3688C79.5353 29.236 78.7319 30.0371 78 30.8436C77.2681 30.0371 76.4647 29.236 75.5951 28.3688L75.5938 28.3675C75.4356 28.2098 75.2752 28.0498 75.1127 27.8873L71.5771 31.4228L75.1127 27.8873C71.0269 23.8015 66.1764 20.5605 60.8381 18.3493C55.4997 16.1381 49.7782 15 44 15ZM79.947 45.1054C80.5593 44.8466 81.0934 44.4798 81.5365 44.0365C81.9879 43.5854 82.36 43.0398 82.6194 42.4134C83.5468 40.1744 84.062 39.2554 84.6053 38.5223C85.2108 37.7053 85.9531 36.9632 87.7202 35.1965L87.7203 35.1964L87.9584 34.9584C91.1156 31.8012 94.8637 29.2968 98.9888 27.5881C103.114 25.8794 107.535 25 112 25C116.465 25 120.886 25.8794 125.011 27.5881C129.136 29.2968 132.884 31.8012 136.042 34.9584C139.199 38.1156 141.703 41.8637 143.412 45.9888C145.118 50.1078 145.997 54.5222 146 58.9805C145.885 73.0151 142.972 83.243 133.579 93.5163C124.079 103.906 107.759 114.561 80.0146 128.439C52.1824 114.542 34.8046 103.849 24.2778 93.35C13.8422 82.9421 10.1132 72.7009 10 58.9804C10.0026 54.5221 10.8819 50.1078 12.5881 45.9888C14.2968 41.8637 16.8012 38.1156 19.9584 34.9584C23.1156 31.8012 26.8637 29.2968 30.9888 27.5881C35.1138 25.8794 39.5351 25 44 25C48.4649 25 52.8862 25.8794 57.0112 27.5881C61.1363 29.2968 64.8844 31.8012 68.0416 34.9584L68.2797 35.1964L68.2798 35.1965C70.0469 36.9632 70.7892 37.7053 71.3947 38.5223C71.938 39.2554 72.4532 40.1744 73.3806 42.4134C73.904 43.6769 74.8856 44.6119 76.053 45.1054C77.2428 45.6083 78.6257 45.6528 79.9134 45.1194C79.9246 45.1148 79.9358 45.1101 79.947 45.1054Z"
                        fill="#E1E0E1"
                      ></path>
                      <path
                        d="M99.087 61.195L98.289 60.727L97.926 61.578L97.634 62.263C97.1812 63.5129 96.3672 64.6 95.2954 65.3862C94.2235 66.1725 92.9421 66.6225 91.614 66.679C90.2858 66.6226 89.0044 66.1727 87.9325 65.3864C86.8606 64.6001 86.0466 63.5129 85.594 62.263L85.303 61.578L84.941 60.727L84.141 61.195L81.67 62.647L81.053 63.009L81.333 63.667L81.625 64.352C83.516 68.793 87.344 71.552 91.615 71.552C95.886 71.552 99.715 68.793 101.605 64.352L101.897 63.668L102.178 63.009L101.561 62.647L99.087 61.195Z"
                        fill="#9B9B9B"
                      ></path>
                      <path
                        d="M76.844 63.668L77.125 63.009L76.508 62.647L74.034 61.195L73.236 60.727L72.873 61.577L72.581 62.262C72.1283 63.5119 71.3143 64.599 70.2424 65.3852C69.1705 66.1715 67.8891 66.6215 66.561 66.678C65.2329 66.6215 63.9515 66.1715 62.8796 65.3852C61.8077 64.599 60.9937 63.5119 60.541 62.262L60.25 61.578L59.888 60.727L59.088 61.195L56.617 62.647L56 63.009L56.28 63.668L56.572 64.353C58.462 68.794 62.291 71.553 66.562 71.553C70.833 71.553 74.662 68.794 76.552 64.353L76.844 63.668Z"
                        fill="#9B9B9B"
                      ></path>
                      <path
                        d="M79.4949 85.71C78.7289 85.71 77.9801 85.9371 77.3432 86.3627C76.7063 86.7882 76.2099 87.3931 75.9168 88.1008C75.6236 88.8085 75.5469 89.5873 75.6964 90.3385C75.8458 91.0898 76.2147 91.7799 76.7563 92.3216C77.298 92.8632 77.9881 93.2321 78.7394 93.3815C79.4907 93.531 80.2694 93.4543 80.9771 93.1611C81.6848 92.868 82.2897 92.3716 82.7152 91.7347C83.1408 91.0978 83.3679 90.349 83.3679 89.583C83.3677 88.5559 82.9596 87.5709 82.2333 86.8446C81.507 86.1184 80.5221 85.7102 79.4949 85.71"
                        fill="#9B9B9B"
                      ></path>
                      <path
                        d="M167.8 31.055H157.215V33.792H163.306L157.056 41.183V43.327H168.004V40.59H161.55L167.8 33.199V31.055Z"
                        fill="#9B9B9B"
                      ></path>
                      <path
                        d="M144 20.776L162.529 20.768V16.136H151.606L162.177 3.628V0L144.263 0.007V4.639H154.57L144 17.148V20.776Z"
                        fill="#9B9B9B"
                      ></path>
                    </svg>
                    <p className="!font-vazir font-extrabold text-[#404040]">
                      هنوز اقامتگاهی رو اضافه نکردی
                    </p>
                    <div className="flex items-center justify-center text-[#404040]">
                      <span className="!font-vazir text-sm font-light">
                        هر اقامتگاهی که ازش خوشت میاد رو با کلیک بر
                      </span>
                      <FaRegHeart className="mx-1 text-[#cc0001]" />
                      <span className="!font-vazir text-sm font-light">
                        به این لیست اضافه کن، تا وقتی تخفیف میخوره خبرت کنیم
                      </span>
                    </div>
                    <Link href={"/rooms"}>
                      <Button
                        variant="yellow"
                        className="cursor-pointer !rounded-lg px-3 duration-300 hover:bg-[#d2b43d]"
                      >
                        <CiSearch className="ml-2 text-xl" />
                        <p className="font-vazir text-base font-light">جستجو</p>
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </main>

            {isPending && <Loader />}
          </div>
        </div>
      </main>
    </Container>
  );
};

export default page;
