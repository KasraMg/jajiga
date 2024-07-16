import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import Link from "next/link";
import { RiUpload2Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { FaChevronLeft } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "@/src/components/shadcn/ui/button";
import { IoNotificationsOutline } from "react-icons/io5"; 
import Rooms from "@/src/components/templates/userPanel/dashboard/Rooms";
const Dashboard = () => {

  return (
    <Container disableFooter={true}>
      <Breadcrumb className="hidden md:block" route={"پیشخان"} />
      <main className="Container !mt-20 flex gap-4 px-4 md:!mt-8 xl:!px-0">
        <aside
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 6px" }}
          className="hidden w-[40%] rounded-2xl p-2 pb-8 md:!block xl:!w-[25%] h-max"
        >
          <div className="relative mb-10 h-24 rounded-2xl bg-customYellow bg-[url(https://www.jajiga.com/static/img/backdrop-pattern.svg)]">
            <Image
              width={1000}
              height={1000}
              className="absolute -bottom-8 left-0 right-0 mx-auto block h-20 w-20 rounded-full"
              src="/images/profile.jpg"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="font-vazir text-sm font-thin">شاهین مشکل گشا</p>
            <Link
              href={"/profile"}
              className="rounded-full bg-black p-2 text-center text-white"
            >
              <MdOutlineModeEdit />
            </Link>
          </div>
          <div className="px-2 pt-4">
            <Link className="flex justify-start gap-2" href={"/profile"}>
              <RiUpload2Line className="text-2xl" />
              <p>انتخاب تصویر</p>
            </Link>
            <Link className="mt-5 flex justify-start gap-2" href={"/"}>
              <GoHome className="text-2xl" />
              <p>صفحه اصلی</p>
            </Link>
            <Link className="mt-5 flex justify-start gap-2" href={"/reservs"}>
              <RiUpload2Line className="text-2xl" />
              <p>رزرو ها</p>
            </Link>
            <Link className="mt-5 flex justify-start gap-2" href={"/all"}>
              <RiUpload2Line className="text-2xl" />
              <p>اقامتگاه ها</p>
            </Link>
            <div className="mt-5 flex justify-start gap-2">
              <AiOutlineLogout className="text-2xl" />
              <p>خروج</p>
            </div>
          </div>
        </aside>
        <div className="w-full md:!w-[60%] xl:!w-[75%]">
          <div className="flex items-start gap-2 rounded-r-lg border-r-2 border-solid border-red-600 p-3 shadow-lg">
            <svg
              className="sc-679cb2a8-0 bpgCuB w-8"
              fill="currentColor"
              viewBox="0 0 25.5 25.5"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs></defs>
              <path
                style={{
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5px",
                }}
                className="profile-2"
                stroke="red"
                d="M20.36,22.03c-1.98-2.09-4.73-3.28-7.61-3.28-2.88,0-5.63,1.18-7.61,3.28"
              ></path>
              <path
                stroke="#323232"
                style={{
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5px",
                }}
                className="profile-1"
                d="M21.24,4.27c4.69,4.69,4.69,12.28,0,16.97-4.69,4.69-12.28,4.69-16.97,0C-.42,16.55-.42,8.95,4.27,4.27,8.95-.42,16.55-.42,21.24,4.27"
              ></path>
              <path
                stroke="#323232"
                fill="white"
                className="profile-1"
                d="M15.4,7.85c1.46,1.46,1.46,3.84,0,5.31s-3.84,1.46-5.31,0c-1.46-1.46-1.46-3.84,0-5.3,1.46-1.46,3.84-1.46,5.3,0"
              ></path>
            </svg>
            <div className="grid gap-3">
              <p className="text-sm">تکمیل اطلاعات حساب کاربری</p>
              <span className="text-xs font-thin">
                جهت تسریع فرایند انتشار اقامتگاه لطفا اطلاعات خود را تکمیل کنید
              </span>
              <Link href={"/profile"}>
                {" "}
                <Button className="text-xs" variant={"danger"}>
                  تکمیل حساب کاربری
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mt-5 flex items-start gap-2 rounded-r-lg border-r-2 border-solid border-red-600 p-3 pb-4 shadow-lg">
            <div className="rounded-full bg-red-200 p-3">
              <IoNotificationsOutline className="text-2xl text-red-600" />
            </div>
            <div className="grid gap-3">
              <p className="text-sm">اجازه ارسال اعلانات</p>
              <span className="text-xs font-thin">
                برای دریافت اعلان رزروها و تجربه بهتر از وب اپ جاجیگا لطفا کلیک
                کنید و گزینه اجازه دادن (ALLOW) را انتخاب کنید.
              </span>
              <FaChevronLeft className="absolute left-2 top-7 cursor-pointer text-sm" />
            </div>
          </div>
          <Rooms /> 
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
