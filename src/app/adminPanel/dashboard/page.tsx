"use client"
import Layout from "@/src/components/layouts/adminLayout/page";
import Loader from "@/src/components/modules/loader/Loader";
import Box from "@/src/components/templates/adminPanel/dashboard/Box";
import Chart from "@/src/components/templates/adminPanel/dashboard/Chart";
import useGetData from "@/src/hooks/useGetData";
import { dashboardTypes } from "@/src/types/AdminPanel.types";
import { getDashboardInfoes } from "@/src/utils/fetchs";

const page = () => {
  const { data, isPending } = useGetData<dashboardTypes>(["dashboard"], getDashboardInfoes);
console.log(data);
 

  return (
    <Layout>
      <section className="mt-7 xl:!flex grid lg:!grid-cols-[auto,auto,auto] grid-cols-[auto,auto] xl:justify-between gap-4">
        <Box title="مجموع اقامتگاه ها" value={data?.villasCount} />
        <Box title="مجموع کل رزرو ها" value={data?.booksCount} />
        <Box title="مجموع کتگوری ها" value={data?.categoriesCount} />
        <Box title="مجموع کاربر های سایت" value={data?.usersCount} />
      </section>

      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="before: relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            آخرین آمار و کاربران
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse xl:!flex-row">
        <div className="xl:!w-1/2 w-full bg-white  md:!px-7 pb-8 text-sm sm:!text-base xl:!text-xl">
          <table className="table" id="users-table">
            <tbody>
              <tr>
                <th>اسم</th>
                <th>شماره</th>
                <th>تعداد ویلای ثبت شده</th>
              </tr>

              <tr>
                <td>شاهین مشکل گشا</td>
                <td>09046412020</td>
                <td>3</td>
              </tr>
              <tr>
                <td>شاهین مشکل گشا</td>
                <td>09046412020</td>
                <td>3</td>
              </tr>
              <tr>
                <td>شاهین مشکل گشا</td>
                <td>09046412020</td>
                <td>3</td>
              </tr>
              <tr>
                <td>شاهین مشکل گشا</td>
                <td>09046412020</td>
                <td>3</td>
              </tr>
              <tr>
                <td>شاهین مشکل گشا</td>
                <td>09046412020</td>
                <td>3</td>
              </tr>
              <tr>
                <td>شاهین مشکل گشا</td>
                <td>09046412020</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Chart {...data}/>
        {isPending && <Loader />}
      </div>
    </Layout>
  );
};

export default page;
 