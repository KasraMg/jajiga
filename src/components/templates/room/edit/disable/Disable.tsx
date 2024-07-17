import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { Button } from "@/src/components/shadcn/ui/button";
import React from "react";

const Disable = () => {
  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <p className="text-sm">
          در این بخش می‌توانید اقامتگاه خود را برای مدتی{" "}
          <strong className="font-bold text-black">«غیرفعال»</strong> کنید
        </p>

        <Button className="my-4" variant={"blue"}>
          فعال
        </Button>
        {/* <Button variant={'danger'}>
            غیر فعال
        </Button> */}

        <p className="text-xl text-black border-t-gray-300 border-t pt-3">حذف اقامتگاه</p>
        <p  className="font-thin text-gray-700 text-sm">
          دراین بخش می‌توانید اقامتگاه خود را از وبسایت حذف کنید. درصورتی که
          تراکنشی برای اقامتگاه شما رخ داده باشد حذف کامل اطلاعات امکانپذیر
          نخواهد بود و بعضی اطلاعات در مرکز داده وبسایت نگهداری خواهد گردید.
        </p>

        <Button className="my-4" variant={'danger'}>
           حذف اقامتگاه
        </Button>

      </div>
      <StepperInfo
        className="max-w-[380px] w-full"
        title="غیرفعال‌سازی"
        text="گاهی به دلایل مختلف اقامتگاه شما برای مدتی شرایط لازم برای رزرو را ندارد. در این مواقع کافیست برای جلوگیری از دریافت «درخواست رزرو»هایی که مجبور به رد آنها خواهید شد و به دنبال آن این کار باعث کاهش امتیاز و رتبه اقامتگاه‌تان خواهد گردید، در این قسمت اقامتگاه را تا زمان مد نظر «غیرفعال» نمایید.
        بهتر است حتما دلیل غیرفعال‌شدن اقامتگاه را نیز برای اطلاع کارشناسان جاجیگا اعلام کنید."
      />
    </section>
  );
};

export default Disable;
