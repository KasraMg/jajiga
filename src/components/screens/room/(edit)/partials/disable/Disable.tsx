"use client";
import { useUpdateVilla } from "@/src/api/villa";
import Loader from "@/src/components/modules/loader/loader";
import StepperInfo from "@/src/components/modules/stepper-info/stepper-info";
import { Button } from "@/src/components/shadcn/ui/button";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { authStore } from "@/src/stores/auth";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

interface userObjData {
  disable: boolean;
  step: 9;
  finished: true;
}
const Disable = () => {
  const [disable, setDisable] = useState(false);
  const { userData } = authStore((state) => state);
  const params = useParams();

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  const { mutate: mutation, isPending } = useUpdateVilla(String(params.id));

  useEffect(() => {
    if (villa) {
      setDisable(villa.disable);
    }
  }, [villa]);

  const changeVillaStatusHandler = () => {
    swal({
      title: `از ${disable ? "فعال کردن" : "غیر فعال کردن"} اقامتگاه اطمینان دارید؟`,
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(() => {
      const data: userObjData = {
        disable: !disable,
        step: 9,
        finished: true,
      };
      mutation(data, {
        onSuccess() {
          toast({
            variant: "success",
            title: disable
              ? "اقامتگاه شما با موفقیت فعال شد"
              : "اقامتگاه شما با موفقیت غیر فعال شد",
          });
          setDisable((prev) => !prev);
        },
      });
    });
  };

  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <p className="text-sm">
          در این بخش می‌توانید اقامتگاه خود را برای مدتی{" "}
          <strong className="font-bold text-black">«غیرفعال»</strong> کنید
        </p>

        {disable ? (
          <Button
            onClick={changeVillaStatusHandler}
            className="my-4"
            variant={"blue"}
          >
            فعال کردن
          </Button>
        ) : (
          <Button
            onClick={changeVillaStatusHandler}
            className="my-4"
            variant={"danger"}
          >
            غیر فعال کردن
          </Button>
        )}

        {/* <p className="border-t border-t-gray-300 pt-3 text-xl text-black">
          حذف اقامتگاه
        </p>
        <p className="text-sm font-thin text-gray-700">
          دراین بخش می‌توانید اقامتگاه خود را از وبسایت حذف کنید. درصورتی که
          تراکنشی برای اقامتگاه شما رخ داده باشد حذف کامل اطلاعات امکانپذیر
          نخواهد بود و بعضی اطلاعات در مرکز داده وبسایت نگهداری خواهد گردید.
        </p>

        <Button className="my-4" variant={"danger"}>
          حذف اقامتگاه
        </Button> */}
      </div>
      <StepperInfo
        className="w-full max-w-[380px]"
        title="غیرفعال‌سازی"
        text="گاهی به دلایل مختلف اقامتگاه شما برای مدتی شرایط لازم برای رزرو را ندارد. در این مواقع کافیست برای جلوگیری از دریافت «درخواست رزرو»هایی که مجبور به رد آنها خواهید شد و به دنبال آن این کار باعث کاهش امتیاز و رتبه اقامتگاه‌تان خواهد گردید، در این قسمت اقامتگاه را تا زمان مد نظر «غیرفعال» نمایید.
        "
      />
      {isPending && <Loader />}
    </section>
  );
};

export default Disable;
