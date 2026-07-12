"use client";
import Loader from "@/src/components/modules/loader/loader";
import Box from "@/src/components/screens/admin-panel/dashboard/partials/box";
import Chart from "@/src/components/screens/admin-panel/dashboard/partials/chart";
import Reserves from "@/src/components/screens/admin-panel/dashboard/partials/reserves";
import Metadata from "@/src/components/modules/meta-data";
import { useDahsboard } from "@/src/api/admin-panel/api";

const DashboardScreen = () => {
  const { data, isPending } = useDahsboard();

  return (
    <>
      <section className="mt-7 grid grid-cols-[auto,auto] gap-4 lg:!grid-cols-[auto,auto,auto] xl:!flex xl:justify-between">
        <Box title="مجموع اقامتگاه ها" value={data?.villasCount} />
        <Box title="مجموع کل رزرو ها" value={data?.booksCount} />
        <Box title="مجموع دسته بندی ها" value={data?.categoriesCount} />
        <Box title="مجموع کاربرهای سایت" value={data?.usersCount} />
      </section>
      <Metadata
        seoTitle={"جاجیگا | پیشخان"}
        seoDescription={"اطلاعات کلی سایت"}
      />
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="before: relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            آخرین رزرو ها و کاربران
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse xl:!flex-row">
        {data?.books && <Reserves books={data.books} />}
        {data && <Chart {...data} />}
        {isPending && <Loader />}
      </div>
    </>
  );
};

export default DashboardScreen;
