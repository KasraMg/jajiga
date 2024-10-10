"use client";
import Loader from "@/src/components/modules/loader/Loader";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { Button } from "@/src/components/shadcn/ui/button";
import useEditVilla from "@/src/hooks/useEditVilla";
import { authStore } from "@/src/stores/auth";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCamera, BsTrash3 } from "react-icons/bs";
import swal from "sweetalert";

const Images = () => {
  const [disableNextButton, setDisableNextButton] = useState<boolean>(true);
  const [userimages, setUserImages] = useState<any>([]);
  const [finalyImages, setFinalyImages] = useState<any>([]);
  const { userData } = authStore((state) => state);
  const params = useParams();

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  const { mutate: mutation, isPending } = useEditVilla<any>(
    null,
    "اطلاعات با موفقیت بروزرسانی شد",
    params.id as any,
    true, 
  );

  useEffect(() => {
    if (villa) {
    const prevCovers=  villa.cover.map((img) => {
      return {
        name: `https://jajiga-backend.liara.run/villa/covers/${img}`,
        url: `https://jajiga-backend.liara.run/villa/covers/${img}`,
      }
      })  
        setUserImages(prevCovers); 
        setFinalyImages(prevCovers); 
    }
  }, [villa]);

  const deleteImgHandler = (name: string) => {
    const newImages = userimages.filter(
      (img: { url: string; name: string }) => img.name !== name,
    );
    const newFinalyImages = finalyImages.filter(
      (img: any) => img.name !== name,
    );
    setUserImages(newImages);
    setFinalyImages(newFinalyImages);
    setDisableNextButton(false);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (userimages.length == 10) {
      swal({
        title: "تنها 10 عکس میتونید آپلود کنید",
        icon: "error",
        buttons: [false, "اوکی"],
      });
    } else { 
      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0]; 
        if (
          file.type === "image/png" ||
          file.type === "image/jpeg" ||
          file.type === "image/webp" ||
          file.type === "image/jpg" ||
          file.type === "image/jfif"
        ) {
          setDisableNextButton(false);
          let reader = new FileReader();
          setFinalyImages((prev: any) => [...prev, file]);
          reader.onloadend = function () {
            let base64String = reader.result;
            setUserImages((prev: string) => [
              ...(prev as any),
              { url: base64String, name: event.target.files && event.target.files[0].name }
            ]);
          };
          reader.readAsDataURL(file);
        }
      } else {
        swal({
          title:
            "تایپ فایل وارد شده اشتباه است. لطفا فایل با تایپ های .png یا .jpg وارد کنید",
          icon: "error",
          buttons: [false, "اوکی"],
        });
      }
    }
  };

  const submitHandler = () => {
    setDisableNextButton(false);
    const formData = new FormData();

    const urls = finalyImages
      .filter((img: any) => img.url)  
      .map((img: any) => img.url.slice(46))  
      .join(";");  
 
    if (urls) {
      formData.append("oldPics", urls);
    }
    finalyImages.map((img: any) => {
      if (!img.url) {
        formData.append("cover", img);
      }
    });  
    formData.append("finished", "true"); 
    mutation(formData);
  };
  return (
    <>
      <section className="flex w-full max-w-[1120px] justify-between gap-16">
        <div className="font-thin text-gray-700">
          <div className="w-full">
            <p>تصاویر اقامتگاه را آپلود کنید</p>
            <p className="font-vazir mt-3 text-sm font-light">
              ارائه تصاویر زیبا و واقعی از اقامتگاه شما می تواند نقش بسیار مهمی
              در جلب نظر میهمانان ایفا نماید. لذا:
            </p>
            <ul className="mr-4 mt-4 list-disc text-sm">
              <li className="font-vazir font-light">
                حداقل 3 عکسِ باکیفیت، از پذیرایی، اتاق خواب ها، آشپزخانه، سرویس
                بهداشتی، حیاط و نمای ساختمان آپلود کنید.
              </li>
              <li className="font-vazir mt-2 font-light">
                ترجیحاً از تصاویر افقی (Landscape) استفاده کنید.
              </li>
            </ul>
            <div className="relative mt-3 w-full rounded-xl border border-dashed border-gray-700 p-4 text-center">
              <input
                onChange={(event) => inputChangeHandler(event)}
                type="file"
                className="absolute right-0 top-0 z-50 h-full w-full cursor-pointer opacity-0"
                id=""
              />
              <div className="mx-auto block w-max rounded-full bg-gray-200 p-[10px] text-3xl text-gray-700">
                <BsCamera />
              </div>
              <p className="font-vazir mt-3 text-sm font-light">
                انتخاب تصویر +
              </p>
            </div>
            <div className="mb-20 mt-5 grid grid-cols-[1fr,1fr] gap-4 rounded-lg">
              {userimages &&
                userimages.map(
                  (img: { name: string; url: string }, index: number) => (
                    <div key={crypto.randomUUID()} className="relative mt-3">
                      <img
                        className="h-[200px] w-full rounded-lg border border-dashed border-gray-600 lg:!h-[163px]"
                        crossOrigin="anonymous"
                        src={img.url}
                        alt=""
                      />
                      <div className="absolute right-2 top-3 rounded-full bg-white px-2 pt-1 text-center text-sm text-black">
                        <p>{index + 1}</p>
                      </div>
                      <div
                        onClick={() => deleteImgHandler(img.name)}
                        className="absolute left-3 top-3 w-max cursor-pointer rounded-md bg-red-600 p-2 text-center text-2xl text-white"
                      >
                        <BsTrash3 />
                      </div>
                    </div>
                  ),
                )}
            </div>
          </div>
          {!disableNextButton &&
            (userimages.length < 3 ? (
              <Button
                variant="danger"
                className={`mx-auto !mt-0 block w-max justify-center rounded-md px-4 py-2 transition-colors hover:opacity-75`}
              >
                حداقل باید 3 عکس وارد کنید
              </Button>
            ) : (
              <Button
                onClick={submitHandler}
                variant="yellow"
                className={`mx-auto !mt-0 block w-max justify-center rounded-md px-4 py-2 transition-colors hover:opacity-75`}
              >
                ذخیره تغییرات
              </Button>
            ))}
        </div>
        <StepperInfo
          className="!relative !top-0 w-full max-w-[380px]"
          title="تصاویر اقامتگاه"
          text="تصاویر ارسالی جدید بعد از انتشار اقامتگاه در صف بررسی قرار می‌گیرد و پس از تایید محتوا و کیفیت توسط همکاران جاجیگا منتشر می‌شود."
        />
        {isPending && <Loader />}
      </section>
    </>
  );
};

export default Images;
