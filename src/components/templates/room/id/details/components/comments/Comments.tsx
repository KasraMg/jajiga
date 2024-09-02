import { VillaDetails } from "@/src/types/Villa.types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Comments = (comments: any) => {
  // console.log(comments);

  return (
    <>
      {comments.lenght && (
        <div className="w-full pb-8">
          <p className="my-6 mb-4 text-lg text-[#252a31]">
            نظر مهمانان <span className="text-sm">({comments.length} نظر)</span>
          </p>
          <div className="mt-6">
            <>
              {" "}
              <section className="mb-6 border-b border-solid border-gray-200 pb-4">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      className="h-14 w-14 rounded-full object-cover"
                      alt="author"
                      width={1000}
                      height={1000}
                      src={"/images/about/about_img6.jpg"}
                    />
                    <div>
                      <p>پریا</p>
                      <span className="text-sm text-gray-500">07 دی 1402</span>
                    </div>
                  </div>
                  <div className="flex gap-1 text-xs">
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                  </div>
                </div>
                <p className="font-vazir mt-5 text-sm font-light">
                  عالی بود، از همه چیز راضی بودیم
                </p>
                <section className="mx-3 mt-3 rounded-md bg-[#f3f3f3] p-2">
                  <div className="flex items-center gap-3">
                    <Image
                      className="h-10 w-10 rounded-full object-cover"
                      alt="author"
                      width={1000}
                      height={1000}
                      src={"/images/about/about_img6.jpg"}
                    />
                    <div>
                      <p className="text-sm">پاسخ میزبان</p>
                      <span className="text-sm text-gray-500">07 دی 1402</span>
                    </div>
                  </div>
                  <p className="font-vazir mt-5 text-sm font-light">
                    عالی بود، از همه چیز راضی بودیم
                  </p>
                </section>
              </section>
              <section className="mb-6 border-b border-solid border-gray-200 pb-4">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      className="h-14 w-14 rounded-full object-cover"
                      alt="author"
                      width={1000}
                      height={1000}
                      src={"/images/about/about_img6.jpg"}
                    />
                    <div>
                      <p>پریا</p>
                      <span className="text-sm text-gray-500">07 دی 1402</span>
                    </div>
                  </div>
                  <div className="flex gap-1 text-xs">
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                  </div>
                </div>
                <p className="font-vazir mt-5 text-sm font-light">
                  عالی بود، از همه چیز راضی بودیم
                </p>
              </section>
              <section className="mb-6">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      className="h-14 w-14 rounded-full object-cover"
                      alt="author"
                      width={1000}
                      height={1000}
                      src={"/images/about/about_img6.jpg"}
                    />
                    <div>
                      <p>پریا</p>
                      <span className="text-sm text-gray-500">07 دی 1402</span>
                    </div>
                  </div>
                  <div className="flex gap-1 text-xs">
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                  </div>
                </div>
                <p className="font-vazir mt-5 text-sm font-light">
                  عالی بود، از همه چیز راضی بودیم
                </p>
              </section>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
