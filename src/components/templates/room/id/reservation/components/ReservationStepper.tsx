import { Button } from "@/src/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { roomStore } from "@/src/stores/room";
import { FC, useState } from "react";
import { LuClock9 } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { getJalaliDateInfo } from "@/src/utils/utils";
import { VillaDetails } from "@/src/types/Villa.types";
import { PiWarningCircle } from "react-icons/pi";
import usePostData from "@/src/hooks/usePostData";
import { useParams } from "next/navigation";
import { ButtonLoader } from "@/src/components/modules/loader/Loader";

import { useRouter } from "next/navigation";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { authStore } from "@/src/stores/auth";

interface ReservationStepperProps {
  disable: boolean;
  totalDays: number | undefined;
  usersCount: string | undefined;
  totalPrice: string | undefined;
  data: VillaDetails;
  setOpenReserveModal?: any;
}

const ReservationStepper: FC<ReservationStepperProps> = ({
  disable,
  totalDays,
  usersCount,
  totalPrice,
  data,
  setOpenReserveModal,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { login } = authStore((state) => state);

  const successFunc = (data: { statusCode: number }) => {
    console.log("data", data);

    if (data.statusCode === 200) {
      toast({
        variant: "success",
        title: "ویلا با موفقیت رزرو شد",
      });
      setOpen(false);
      setOpenReserveModal(false);
      router.push("/reserves");
    } else if (data.statusCode === 422) {
      toast({
        variant: "danger",
        title: "شما در حال حاضر یک رزرو فعال برای این ویلا دارید",
      });
    } else {
      toast({
        variant: "danger",
        title: "فرایند  رزرو موفقیت آمیز نبود ",
      });
      location.reload();
    }
  };

  const [step, setStep] = useState(1);
  const { startDate, endDate } = roomStore((state) => state);
  const params = useParams();
  const { mutate: mutation, isPending } = usePostData<any>(
    `/villa/book/${params.id}`,
    null,
    false,
    successFunc,
  );

  const reserveHandler = () => {
    const date = {
      date: {
        from: startDate,
        to: endDate,
      },
    };
    mutation(date);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          disabled={disable || !login}
          variant={"yellow"}
          className="mt-5 h-[36px] w-full rounded-full text-center"
        >
          <div className="text-textGray mx-auto flex items-baseline justify-center">
            <span> ثبت درخواست رزرو</span>
            <span className="text-[10px]">(رایگان)</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[72%] w-full max-w-full !bg-[#e9edf1] px-0 sm:!max-w-[525px] sm:!p-6">
        <div className="mx-auto flex w-[85%] justify-between">
          <div className="stepper-bg relative z-[50] w-full text-center after:absolute after:right-[calc(50%+0.75em)] after:top-[calc(1.3em)] after:z-0 after:h-[2px] after:w-[calc(100%-0.75em)] after:rounded-xl after:content-['']">
            <div
              className={`${step === 1 ? "bg-black text-white" : "border border-black bg-white text-black"} relative z-50 mx-auto mb-2 w-max rounded-full px-4 py-2 pt-[10px] text-center`}
            >
              <p>1</p>
            </div>
            <p>اطلاعات رزرو</p>
          </div>

          <div className="stepper-bg relative z-[50] w-full text-center after:absolute after:right-[calc(50%+0.75em)] after:top-[calc(1.3em)] after:z-0 after:h-[2px] after:w-[calc(100%-0.75em)] after:rounded-xl after:content-['']">
            <div
              className={`${step === 2 ? "bg-black text-white" : "border border-black bg-white text-black"} relative z-50 mx-auto mb-2 w-max rounded-full px-4 py-2 pt-[10px] text-center`}
            >
              <p>2</p>
            </div>
            <p>مقررات</p>
          </div>

          <div className="w-full text-center">
            <div
              className={`${step === 3 ? "bg-black text-white" : "border border-black bg-white text-black"} relative z-50 mx-auto mb-2 w-max rounded-full px-4 py-2 pt-[10px] text-center`}
            >
              <p>3</p>
            </div>
            <p>ثبت رزرو</p>
          </div>
        </div>

        <main className="mx-auto w-full rounded-xl bg-white p-4 sm:!w-[90%]">
          {step === 1 && (
            <>
              <div className="flex justify-evenly">
                <div>
                  <div className="flex items-center gap-2">
                    <CiCalendar className="text-2xl" />
                    <p>ورود:</p>
                  </div>
                  {startDate && (
                    <p className="my-1 text-sm sm:!text-base">
                      {getJalaliDateInfo(startDate).dayOfWeek}{" "}
                      {getJalaliDateInfo(startDate).day}{" "}
                      {getJalaliDateInfo(startDate).monthName}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">از 9 صبح</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <CiCalendar className="text-2xl" />
                    <p>خروج:</p>
                  </div>
                  {endDate && (
                    <p className="my-1 text-sm sm:!text-base">
                      {getJalaliDateInfo(endDate).dayOfWeek}{" "}
                      {getJalaliDateInfo(endDate).day}{" "}
                      {getJalaliDateInfo(endDate).monthName}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">از 9 صبح</p>
                </div>
              </div>
              <div className="relative mx-auto mt-5 flex w-44 flex-row place-content-between items-center text-right before:absolute before:right-0 before:z-0 before:h-[2px] before:w-full before:bg-[#ddd] before:content-[''] [&>*]:z-50">
                <LuClock9 />
                <MdOutlineKeyboardArrowLeft className="text-2xl text-gray-400" />
                <LuClock9 />
              </div>
              <p className="text-bold text-center">
                {usersCount} به مدت {totalDays} شب
              </p>
              <div className="mt-7 flex justify-between rounded-xl bg-gray-500 p-2 px-4 text-sm text-white">
                <p> مبلغ قابل پرداخت </p>
                <p>{totalPrice} تومان</p>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <p className="text-bold">مقررات اقامتگاه</p>
              <ul className="mt-4 space-y-2 pb-8 [&>*]:flex [&>*]:items-center [&>*]:gap-3 [&>*]:font-thin">
                {data.rules.smoke && (
                  <li>
                    <PiWarningCircle className="text-red-600" />
                    <p className="text-xs">
                      استعمال دخانیات (سیگار، قلیان و ...) در داخل اقامتگاه
                      ممنوع است.
                    </p>
                  </li>
                )}

                {data.rules.music && (
                  <li>
                    <PiWarningCircle className="text-red-600" />
                    <p className="text-xs">
                      {" "}
                      برگزاری مهمانی و پخش موزیک ممنوع است.
                    </p>
                  </li>
                )}

                {data.rules.pet && (
                  <li>
                    <PiWarningCircle className="text-red-600" />
                    <p className="text-xs">همراه داشتن حیوان خانگی ممنوع است</p>
                  </li>
                )}

                {data.rules.more && (
                  <li>
                    <PiWarningCircle className="text-red-600" />
                    <p className="text-xs">{data.rules.more}</p>
                  </li>
                )}
              </ul>
            </>
          )}
          {step === 3 && (
            <>
              <div className="flex gap-2">
                <PiWarningCircle className="text-red-600" />
                <p className="text-bold text-sm">لطفا توجه کنید: </p>
              </div>
              <ul className="mt-4 list-disc space-y-3 pr-4 text-xs font-thin">
                <li>
                  درخواست رزرو رایگان است ولی لطفا، فقط در صورتی که تصمیم قطعی
                  برای رزرو دارید، درخواست خود را ثبت کنید.
                </li>
                <li>
                  در صورت تایید رزرو توسط میزبان، می‌بایست کل مبلغ صورتحساب را
                  پرداخت کنید تا سند رزرو حاوی آدرس و شماره تماس صادر شود.
                </li>
                <li>
                  با توجه به تاثیر منفی ارسال درخواست‌های بی‌هدف برای میزبانان،
                  لغو درخواست پس از تایید میزبان موجب تعلیق حساب کاربری می‌شود.
                </li>
              </ul>
            </>
          )}
        </main>

        <div className="mx-auto mt-12 flex w-[90%] justify-between">
          <Button
            onClick={() => (step === 1 ? setOpen(false) : setStep(step - 1))}
            variant={"white"}
            className="border-0 px-4"
          >
            برگشت
          </Button>
          <Button
            onClick={() => (step === 3 ? reserveHandler() : setStep(step + 1))}
            variant={"main"}
            className="h-[36px] px-4"
          >
            {step === 3 ? (
              isPending ? (
                <ButtonLoader />
              ) : (
                "ثبت رزرو"
              )
            ) : (
              "تایید و ادامه"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationStepper;
