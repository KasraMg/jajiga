import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import Link from "next/link";
import { RiUpload2Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { FaChevronLeft, FaRegTrashCan } from "react-icons/fa6";
import Image from "next/image";
import Button from "@/src/components/modules/button";
import { IoNotificationsOutline } from "react-icons/io5";
const Dashboard = () => {
  return (
    <Container disableFooter={true}>
      <Breadcrumb className="hidden md:block" route={"پیشخان"} />
      <main className="!mt-8 Container flex gap-4 ">
        <aside
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 6px" }}
          className="w-[25%] pb-8 p-2 rounded-2xl"
        >
          <div className="bg-[url(https://www.jajiga.com/static/img/backdrop-pattern.svg)] bg-customYellow mb-10 rounded-2xl relative h-24">
            <Image
              width={1000}
              height={1000}
              className=" absolute -bottom-8 left-0 right-0 mx-auto block w-20 h-20 rounded-full"
              src="/images/profile.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center gap-2 items-center">
            <p className="font-vazir text-sm font-thin">شاهین مشکل گشا</p>
            <Link
              href={"/profile"}
              className="bg-black text-white rounded-full text-center p-2"
            >
              <MdOutlineModeEdit />
            </Link>
          </div>
          <div className="px-2 pt-4">
            <Link className="flex gap-2 justify-start" href={"/profile"}>
              <RiUpload2Line className="text-2xl" />
              <p>انتخاب تصویر</p>
            </Link>
            <Link className="flex gap-2 mt-5 justify-start" href={"/profile"}>
              <GoHome className="text-2xl" />
              <p>صفحه اصلی</p>
            </Link>
            <Link className="flex gap-2 mt-5 justify-start" href={"/profile"}>
              <RiUpload2Line className="text-2xl" />
              <p>رزرو ها</p>
            </Link>
            <Link className="flex gap-2 mt-5 justify-start" href={"/profile"}>
              <RiUpload2Line className="text-2xl" />
              <p>نظر ها</p>
            </Link>
            <Link className="flex gap-2 mt-5 justify-start" href={"/profile"}>
              <RiUpload2Line className="text-2xl" />
              <p>اقامتگاه ها</p>
            </Link>
            <div className="flex gap-2 mt-5 justify-start">
              <AiOutlineLogout className="text-2xl" />
              <p>خروج</p>
            </div>
          </div>
        </aside>
        <div className="w-[75%]">
          <div className="flex items-start rounded-r-lg border-r-2 border-red-600 border-solid shadow-lg p-3 gap-2">
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
          <div className="flex  pb-4 relative mt-5 items-start rounded-r-lg border-r-2 border-red-600 border-solid shadow-lg p-3 gap-2">
            <div className="p-3 rounded-full bg-red-200">
              <IoNotificationsOutline className="text-2xl text-red-600" />
            </div>
            <div className="grid gap-3">
              <p className="text-sm">اجازه ارسال اعلانات</p>
              <span className="text-xs font-thin">
                برای دریافت اعلان رزروها و تجربه بهتر از وب اپ جاجیگا لطفا کلیک
                کنید و گزینه اجازه دادن (ALLOW) را انتخاب کنید.
              </span>
              <FaChevronLeft className="cursor-pointer text-sm absolute left-2 top-7" />
            </div>
          </div>
          <div className="mt-5">
            <p>اقامتگاه های خود را تکمیل کنید</p>
            <span className="text-xs font-thin">
              توجه: اقامتگاه تنها بعد از تکمیل، قابل بررسی و انتشار می‌باشد.
            </span>
            <section className="mt-4">
              <div className="flex justify-between items-center shadow-lg p-3">
                <div className="flex gap-2 items-center">
                  <div className="relative flex justify-center items-center rounded-lg overflow-hidden  p-1 ml-1 h-[60px] w-[92px] bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhFKJwV5wJD6dkUvbLLW75ofGNZ6pbsyYWmXDGK1KTg&s)]">
                    <p className="text-black bg-white p-1 mb-0 rounded-lg text-xs">20%</p>
                  </div>
                  <p>(3232281)</p>
                </div>
                <p className="text-sm font-thin">به‌روزرسانی: 17 اردیبهشت 1403</p>
                <div className="flex gap-2">
                  <Link href={"/profile"}>
                    <Button className="text-xs px-8 flex justify-center gap-2" variant={"danger"}>
                    <FaRegTrashCan />
                    حذف
                    </Button>
                  </Link>
                  <Link href={"/profile"}>
                    <Button className="text-xs px-8 flex justify-center gap-2" variant={"main"}>
                    تکمیل
                    <FaChevronLeft/>
                    </Button>
                  </Link>
                </div>
              </div>
            </section> 
          </div>
          {/* <div className="bg-red-200 p-4 rounded-lg text-center mx-auto mt-16">
            <p>آگهی ای موجود نیست</p>
          </div> */}
        </div>
      </main>
    </Container>
  );
};

export default Dashboard; 
