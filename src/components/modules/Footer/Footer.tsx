"use client";
import MarketLinks from "./components/MarketLinks";
import Link from "next/link";
import { LiaInstagram, LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import CitiesList from "./components/CitiesList";
import { authStore } from "@/src/stores/auth";
const Footer = () => {
  const { login } = authStore((state) => state);

  return (
    <div className="mt-10 rounded-2xl bg-[#f1f1f1] pt-8">
      <div className="Container mx-auto px-3 sm:!px-5">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="mb-5 flex w-full flex-col lg:mb-0">
            <div className="flex flex-col gap-[2.5rem] sm:flex-row xl:gap-[3.75rem]">
              <div className="w-full md:!w-1/2 lg:!w-[unset]">
                <p className="mb-3 text-center">لینک های دسترسی</p>
                <div className="flex w-full items-center justify-around gap-8 lg:w-max">
                  <div className="flex flex-col space-y-2">
                    {!login ? (
                      <Link
                        className="font-vazir text-sm font-light text-blue-700"
                        href={"/login"}
                      >
                        ورود/ثبت نام
                      </Link>
                    ) : (
                      <Link
                        className="font-vazir text-sm font-light text-blue-700"
                        href={"/dashboard"}
                      >
                        حساب کاربری
                      </Link>
                    )}

                    <Link
                      className="font-vazir text-sm font-light text-blue-700"
                      href={"/"}
                    >
                      صفحه اصلی
                    </Link>
                    <Link
                      className="font-vazir text-sm font-light text-blue-700"
                      href={"/rooms"}
                    >
                      همه اقامتگاه ها
                    </Link>
                    <Link
                      className="font-vazir text-sm font-light text-blue-700"
                      href={"/host"}
                    >
                      میزبان شو
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link
                      className="font-vazir text-sm font-light text-blue-700"
                      href={"/rules"}
                    >
                      قوانین وبسایت
                    </Link>
                    <Link
                      className="font-vazir text-sm font-light text-blue-700"
                      href={"/faq"}
                    >
                      سوالات متداول
                    </Link>
                    <Link
                      className="font-vazir text-sm font-light text-blue-700"
                      href={"/support"}
                    >
                      پشتیبانی
                    </Link>

                    <Link
                      className="font-vazir text-sm font-light text-blue-700"
                      href={"/about"}
                    >
                      درباره ما
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sm:!w-1/2 md:!w-[unset] md:px-6 lg:px-0">
                <p className="mb-3 text-right md:!text-center">
                  نصب اپلیکیشن جاجیگا
                </p>
                <div className="mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-2 sm:!grid-cols-1 md:!w-[unset] md:!grid-cols-2">
                  <MarketLinks src="/images/markets/Bazzar.png" />
                  <MarketLinks src="/images/markets/Myket.png" />
                  <MarketLinks src="/images/markets/PlayStore.png" />
                  <MarketLinks src="/images/markets/WebApp.png" />
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="mb-3 text-center">با ما همراه شوید</p>
                <Link
                  href="/"
                  className="instagramGradiant mx-auto flex h-[45.3px] w-1/2 min-w-[150px] items-center justify-center rounded-lg py-2 text-white"
                >
                  <p>700K</p>
                  <FaInstagram className="mr-4 text-3xl" />
                </Link>
                <Link
                  href="/"
                  className="telegramGradiant mx-auto mt-2 flex h-[45.3px] w-1/2 min-w-[150px] items-center justify-center rounded-lg py-2 text-white"
                >
                  <p>20K</p>
                  <LiaTelegram className="mr-4 text-3xl" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:!block">
              <CitiesList />
            </div>
          </div>

          <div className="hidden flex-col sm:flex-row lg:!flex">
            <div className="">
              <p className="mb-3 text-center">
                با خیال راحت به جاجیگا اعتماد کنید
              </p>
              <div className="grid grid-cols-4 gap-4 md:grid-cols-2">
                <div className="trust">
                  <img
                    className="h-[80%]"
                    src="/images/footer/ecunion.png"
                    alt=""
                  />
                </div>
                <div className="trust">
                  <img
                    className="h-[80%]"
                    src="/images/footer/enamad.png"
                    alt=""
                  />
                </div>
                <div className="trust">
                  <img
                    className="h-[80%]"
                    src="/images/footer/iwfm.png"
                    alt=""
                  />
                </div>
                <div className="trust">
                  <img
                    className="h-[80%]"
                    src="/images/footer/mcth.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="md:hidden md:w-1/3">
              <p className="mb-3 text-center">با ما همراه شوید</p>
              <Link
                href="/"
                className="instagramGradiant mx-auto flex w-1/2 min-w-[150px] items-center justify-center rounded-lg py-2 text-white"
              >
                <p>700K</p>
                <FaInstagram className="mr-4 text-3xl" />
              </Link>
              <Link
                href="/"
                className="telegramGradiant mx-auto mt-4 flex w-1/2 min-w-[150px] items-center justify-center rounded-lg py-2 text-white"
              >
                <p>20K</p>
                <LiaTelegram className="mr-4 text-3xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-10 block lg:hidden">
          <p className="mb-3 text-right">با ما همراه شوید</p>
          <div className="flex items-baseline gap-2">
            <Link
              href="/"
              className="instagramGradiant mx-auto flex h-[45.3px] w-1/2 items-center justify-center rounded-lg py-2 text-white sm:!min-w-[150px]"
            >
              <p>700K</p>
              <FaInstagram className="mr-4 text-3xl" />
            </Link>
            <Link
              href="/"
              className="telegramGradiant mx-auto mt-2 flex h-[45.3px] w-1/2 items-center justify-center rounded-lg py-2 text-white sm:!min-w-[150px]"
            >
              <p>20K</p>
              <LiaTelegram className="mr-4 text-3xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row lg:!hidden">
          <div className="w-full">
            <p className="mb-3 text-right">
              با خیال راحت به جاجیگا اعتماد کنید
            </p>
            <div className="grid grid-cols-[auto,auto] justify-evenly gap-3 sm:!flex sm:!justify-between">
              <div className="trust !w-[120px]">
                <img
                  className="h-[95px]"
                  src="/images/footer/ecunion.png"
                  alt=""
                />
              </div>
              <div className="trust !w-[120px]">
                <img
                  className="h-[95px]"
                  src="/images/footer/enamad.png"
                  alt=""
                />
              </div>
              <div className="trust !w-[120px]">
                <img
                  className="h-[95px]"
                  src="/images/footer/iwfm.png"
                  alt=""
                />
              </div>
              <div className="trust !w-[120px]">
                <img
                  className="h-[95px]"
                  src="/images/footer/mcth.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:!hidden">
          <CitiesList />
        </div>
      </div>
      <div className="mt-8 rounded-t-[16px] bg-[#cbcbcb] text-center text-[10px] leading-6 text-[#6e6e6e]">
        <p>
          کلیه حقوق این وبسایت متعلق به شرکت تجارت الکترونیک لوتوس آرمانی (سهامی
          خاص) می‌باشد.
        </p>
      </div>
    </div>
  );
};

export default Footer;
