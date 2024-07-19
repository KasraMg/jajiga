import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { Button } from "@/src/components/shadcn/ui/button";
import { BsCamera, BsTrash3 } from "react-icons/bs";
import swal from "sweetalert";
const Images = () => {

  const deleteImgHandler = (name: string) => {
  
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if (images.length == 10) {
    //   swal({
    //     title: "تنها 10 عکس میتونید آپلود کنید",
    //     icon: "error",
    //     buttons: [false, "اوکی"],
    //   });
    // } else {
    //   if (event.target.files && event.target.files.length > 0) {
    //     let file = event.target.files[0];
    //     if (file.type === "image/png" || file.type === "image/jpeg") {
    //       if (!images.length) {
    //         setImages((prevImages: any) => [...prevImages, file]);
    //       } else {
    //         const isImgExit = images.some((img: any) => {
    //           return file.name === img.name;
    //         });
    //         if (isImgExit) {
    //           swal({
    //             title: "این عکس قبلا انتخاب شده است.",
    //             icon: "error",
    //             buttons: [false, "اوکی"],
    //           });
    //         } else {
    //           setImages((prevImages: any) => [...prevImages, file]);
    //         }
    //       }
    //     }
    //   } else {
    //     swal({
    //       title:
    //         "تایپ فایل وارد شده اشتباه است. لطفا فایل با تایپ های .png یا .jpg وارد کنید",
    //       icon: "error",
    //       buttons: [false, "اوکی"],
    //     });
    //   }
    // }
  };
  return (
   <>
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
      <div className="w-full">
          <p>تصاویر اقامتگاه را آپلود کنید</p>
          <p className="font-vazir mt-3 text-sm font-light">
            ارائه تصاویر زیبا و واقعی از اقامتگاه شما می تواند نقش بسیار مهمی در
            جلب نظر میهمانان ایفا نماید. لذا:
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
              // onChange={(event) => inputChangeHandler(event)}
              type="file"
              className="absolute right-0 top-0 z-50 h-full w-full cursor-pointer opacity-0"
              id=""
            />
            <div className="mx-auto block w-max rounded-full bg-gray-200 p-[10px] text-3xl text-gray-700">
              <BsCamera />
            </div>
            <p className="font-vazir mt-3 text-sm font-light">انتخاب تصویر +</p>
          </div>

          <div
            className="mb-20 mt-5 rounded-lg pb-3"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            }}
          >
   
                  <div key={crypto.randomUUID()} className="relative mt-3">
                    <img
                      className="h-[200px] w-full rounded-lg border border-dashed border-gray-600 lg:!h-[353px]"
                      src={`data:image/jpeg;base64,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`}
                      alt=""
                    />
                    <div className="absolute right-2 top-3 rounded-full bg-white px-2 pt-1 text-center text-sm text-black">
                      <p>1</p>
                    </div>
                    <div
                      // onClick={() => deleteImgHandler('img.name')}
                      className="absolute left-3 top-3 w-max cursor-pointer rounded-md bg-red-600 p-2 text-center text-2xl text-white"
                    >
                      <BsTrash3 />
                    </div>
                  </div>
                
          </div>
        
        </div>
      </div> 
      <StepperInfo
        className="w-full max-w-[380px] !relative !top-0"
        title="تصاویر اقامتگاه"
        text="تصاویر ارسالی جدید بعد از انتشار اقامتگاه در صف بررسی قرار می‌گیرد و پس از تایید محتوا و کیفیت توسط همکاران جاجیگا منتشر می‌شود."
        />
        
    </section>

    <section
      style={{
        transition: "transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s",
      }}
      className=" w-full z-50"
    >
      <div
        className={` flex w-full gap-2 justify-between rounded-lg bg-[#00000099] px-1 py-1 `}
      > 
        <Button
          variant="yellow" 
          className={` px-2 py-2 rounded-md transition-colors hover:opacity-75 w-full justify-center`}
        >  
              ذخیره تغییرات
        </Button>
      </div>
    </section>
   </>
  );
};

export default Images;
//${disabelNextButton && "cursor-not-allowed pointer-events-none opacity-40 hover:!opacity-30"} ${disablelPrevButton && "cursor-not-allowed opacity-40 hover:!opacity-30"} 