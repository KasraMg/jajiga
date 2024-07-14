"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/components/modules/stepLayout/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { useEffect, useState } from "react";
import { baseUrl, getFromLocalStorage } from "@/src/utils/utils";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Loader from "@/src/components/modules/loader/Loader";
import { useToast } from "@/src/components/shadcn/ui/use-toast";
import { useMutation } from "@tanstack/react-query";

interface userObjData {
  step: 9;
  finished: true;
}
const page = () => {
  const [disabelNextButton, setDisabelNextButton] = useState<boolean>(false);
  const [acceptRules, setAcceptRules] = useState(false);
  const { toast } = useToast();

  const villaId = getFromLocalStorage("villaId");

  const accessToken = Cookies.get("AccessToken");
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: userObjData) => {
      return await fetch(`${baseUrl}/villa/update/${villaId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
    onSuccess: (data: any) => {
      if (data.status === 200) {
        toast({
          variant: "success",
          title: "ویلا با موفقیت ثبت شد",
        });
        router.replace("/newRoom/successfull");
      }
    },
  });

  useEffect(() => {
    if (acceptRules) setDisabelNextButton(false);
    else setDisabelNextButton(true);
  }, [acceptRules]);

  const submitHandler = () => {
    const userData: userObjData = {
      step: 9,
      finished: true,
    };
    console.log(userData);
    mutation.mutate(userData);
  };
  return (
    <StepLayout stepperActive={9}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={9} />
        </div>
        <div className="w-full space-y-5 text-sm font-thin">
          <section className="h-[400px] space-y-5 overflow-y-scroll">
            <p className="text-2xl"> قوانین عمومی</p>
            <p>
              1- کلیه اصول و رویه‌های جاجیگا منطبق با قوانین جمهوری اسلامی
              ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است
              و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط می باشد.
            </p>

            <p>
              2- هرگونه فعالیت در وبسایت جاجیگا از جمله ورود به وبسایت، مشاهده و
              مقایسه اقامتگاه ها و خدمات و توضیحات ارایه شده، ثبت‌نام و استفاده
              از حساب کاربری، ثبت و انتشار اقامتگاه جهت اجاره، ثبت درخواست رزرو
              اقامتگاه و یا هرگونه استفاده از وبسایت و اپلیکیشن جاجیگا، به معنای
              آگاه بودن کاربر از قوانین سایت جاجیگا و نحوه استفاده از سرویس‌های
              آن و به معنی پذیرش کامل متن فعلی قوانین و مقررات سایت جاجیگا است.
            </p>
            <p>
              3- حق هرگونه تجدید نظر و به روز آوری قوانین و مقررات سایت و همچنین
              عملکرد و محتوای وبسایت، اپلیکیشن های آن و کارمزد خدمات وبسایت، در
              هر زمان و بدون اطلاع قبلی، به دلایلی همچون اصلاح و بهبود عملکرد،
              افزودن يک قابليت جديد و يا اجرای پیشنهادهای کاربران، برای جاجیگا
              محفوظ است.
            </p>
            <p>
              4- لازم به ذکر است قوانین و مقررات مندرج در این صفحه، از تاریخ نشر
              یا بروزآوری آن، از همان لحظه انتشار، قابل اجرا است و جایگزین کلیه
              توافق‏‌های قبلی محسوب می‏‌شود.
            </p>
            <p>
              5- اگر با تغييرات ايجاد شده در قوانین وبسایت مخالف باشيد، مي
              توانيد حساب کاربری خود را در هر زمان که تمایل داشتید ببنديد. بدیهی
              است که ادامه کار شما در وبسایت جاجیگا، به معنی پذیرش تغییرات حاصل
              شده و مقررات و قوانین به روز شده جاجیگا می باشد.
            </p>

            <p>
              لطفا صفحه کنونی وبسایت، به آدرس http://localhost:3000/rules را
              برای مشاهده آخرين نسخه قوانین و قوانین وبسایت جاجیگا، مشاهده کنید.
            </p>
          </section>

          <div className="flex items-center gap-2">
            <input
              onClick={() => setAcceptRules((prev) => !prev)}
              className="h-4 w-4"
              type="checkbox"
              name=""
              id=""
            />
            <p>قوانین وب سایت را خواندم و محتوای آن را می پذیرم</p>
          </div>
          <ContentNavigator
            clickHandler={submitHandler}
            disablelPrevButton={false}
            disabelNextButton={disabelNextButton}
            prevLink={"newRoom/step9"}
          />
        </div>
        <div className="max-w-[243px]">
          <StepperInfo
            title=" مقررات اقامتگاه "
            text="تعیین و درج مقررات اقامتگاه بصورت شفاف و گویا باعث حداقل شدن مشکلات آینده خواهد شد. توجه داشته باشید که تنها میهمانانی که تمامی مقررات اقامتگاه شما را می پذیرند قادر به رزرو اقامتگاه خواهند بود, لذا با رعایت تعادل در تعیین مقررات ‏تعداد کمتری از میهمانان را از دست خواهید داد."
          />
        </div>
        {mutation.isPending && <Loader />}
      </div>
    </StepLayout>
  );
};

export default page;
