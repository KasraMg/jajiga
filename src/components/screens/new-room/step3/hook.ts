import { useEffect, useState } from "react";
import swal from "sweetalert";

const allowedTypes = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/jpg",
  "image/jfif",
];

export const useStep3 = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagesBaseUrl, setImagesBaseUrl] = useState<
    {
      name: string;
      path: string;
    }[]
  >([]);

  const [disableNextButton, setDisableNextButton] = useState(true);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) return;

    setImages((prev) => {
      const newImages = [...prev];

      for (const file of files) {
        if (newImages.length >= 10) {
          swal({
            title: "تنها 10 عکس میتونید آپلود کنید",
            icon: "error",
            buttons: [false, "اوکی"],
          });
          break;
        }

        if (!allowedTypes.includes(file.type)) {
          swal({
            title: `${file.name} فرمت فایل معتبر نیست.`,
            icon: "error",
            buttons: [false, "اوکی"],
          });
          continue;
        }

        if (newImages.some((img) => img.name === file.name)) {
          swal({
            title: `${file.name} قبلاً انتخاب شده است.`,
            icon: "error",
            buttons: [false, "اوکی"],
          });
          continue;
        }

        newImages.push(file);
      }

      return newImages;
    });

    event.target.value = "";
  };

  useEffect(() => {
    if (!images.length) {
      setImagesBaseUrl([]);
      setDisableNextButton(true);
      return;
    }

    Promise.all(
      images.map(
        (file) =>
          new Promise<{ name: string; path: string }>((resolve) => {
            const reader = new FileReader();

            reader.onloadend = () =>
              resolve({
                name: file.name,
                path: reader.result as string,
              });

            reader.readAsDataURL(file);
          }),
      ),
    ).then(setImagesBaseUrl);

    setDisableNextButton(images.length < 3);
  }, [images]);

  const deleteImgHandler = (name: string) => {
    setImages((prev) => prev.filter((img) => img.name !== name));
  };

  const createFormData = () => {
    const formData = new FormData();

    images.forEach((img) => {
      formData.append("cover", img);
    });

    formData.append("step", "4");
    formData.append("finished", "false");

    return formData;
  };

  return {
    imagesBaseUrl,
    disableNextButton,
    inputChangeHandler,
    deleteImgHandler,
    createFormData,
  };
};
