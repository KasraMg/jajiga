"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/components/layouts/stepLayout/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { getFromLocalStorage } from "@/src/utils/utils";
import { useEffect, useState } from "react";
import { BsCamera, BsTrash3 } from "react-icons/bs";
import swal from "sweetalert";
import Loader from "@/src/components/modules/loader/Loader";
import useEditVilla from "@/src/hooks/useEditVilla";

const page = () => {
  const [images, setImages] = useState<any>([]);
  const [imagesBaseUrl, setImagesBaseUrl] = useState<any>([]);
  const [disabelNextButton, setDisabelNextButton] = useState(true);
  const villaId = getFromLocalStorage("villaId");

  const {
    mutate: mutation,
    responseData,
    isSuccess,
    isPending,
  } = useEditVilla<any>(
    "/newRoom/step4",
    "اطلاعات با موفقیت بروزرسانی شد",
    villaId,
    true,
  );

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length == 10) {
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
          if (!images.length) {
            setImages((prevImages: any) => [...prevImages, file]);
          } else {
            const isImgExit = images.some((img: any) => {
              return file.name === img.name;
            });
            if (isImgExit) {
              swal({
                title: "این عکس قبلا انتخاب شده است.",
                icon: "error",
                buttons: [false, "اوکی"],
              });
            } else {
              setImages((prevImages: any) => [...prevImages, file]);
            }
          }
        }
      } else {
        swal({
          title:
            "تایپ فایل وارد شده اشتباه است. لطفا فایل با تایپ های .png , jfif, jpeg یا .jpg وارد کنید",
          icon: "error",
          buttons: [false, "اوکی"],
        });
      }
    }
  };

  useEffect(() => {
    const generateImages = () => {
      const newImagesBaseUrl: any = [];
      images.forEach((img: any) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          newImagesBaseUrl.push({ path: reader.result, name: img.name });
          if (newImagesBaseUrl.length === images.length) {
            setImagesBaseUrl(newImagesBaseUrl);
            console.log(imagesBaseUrl);
          }
        };
        reader.readAsDataURL(img);
      });
    };

    if (images.length > 0) {
      generateImages();
      if (images.length > 2) {
        setDisabelNextButton(false);
      } else {
        setDisabelNextButton(true);
      }
    } else {
      setImagesBaseUrl([]);
      setDisabelNextButton(true);
    }
  }, [images]);

  const deleteImgHandler = (name: string) => {
    const newImages = images.filter((imgFile: any) => imgFile.name !== name);
    setImages(newImages);
  };

  const submitHandler = () => {
    const formData = new FormData();
    images.map((img: any) => {
      formData.append("cover", img);
    });
    formData.append("step", "4");
    formData.append("finished", "false");

    mutation(formData);
  };

  return (
    <StepLayout stepperActive={3}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={3} />
        </div>
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
              onChange={(event) => inputChangeHandler(event)}
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
            {imagesBaseUrl &&
              imagesBaseUrl.map(
                (img: { name: string; path: string }, index: number) => (
                  <div key={crypto.randomUUID()} className="relative mt-3">
                    <img
                      className="h-[200px] w-full rounded-lg border border-dashed border-gray-600 lg:!h-[353px]"
                      src={`${img.path}`}
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
          <ContentNavigator
            clickHandler={submitHandler}
            disablelPrevButton={false}
            disabelNextButton={disabelNextButton}
            prevLink={"newRoom/step2"}
          />
        </div>
        <div className="sticky top-[68px] hidden h-max max-w-[243px] md:!block">
          <StepperInfo
            className="!relative !top-0"
            title="تصاویر اقامتگاه"
            text="شما می توانید با گرفتن و کشیدن (Drag) عکسها, تصویر اصلی اقامتگاه و ترتیب نمایش تصاویر را به میل خود تغییر دهید..‏"
          />
          <StepperInfo
            className="!relative !top-0 mt-4"
            title="ویرایش تصاویر اقامتگاه"
            text="همچنین می توانید بعد از ثبت اقامتگاه, به قسمت ویرایش اقامتگاه مراجعه کرده, تصویر اصلی اقامتگاه را ‏تغییر دهید, تصاویر بیشتری اضافه کنید و یا ترتیب تصاویر را تغییر دهید"
          />
        </div>
        {isPending && <Loader />}
      </div>
    </StepLayout>
  );
};

export default page;
