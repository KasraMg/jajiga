"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { authStore } from "@/src/stores/auth";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import swal from "sweetalert";
import { useUpdateVilla } from "@/src/api/villa";

interface ImageItem {
  name: string;
  url: string;
}

export const useImages = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const { userData } = authStore((state) => state);

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  const { mutate, isPending } = useUpdateVilla(String(params.id), true);

  const [disableNextButton, setDisableNextButton] = useState(true);

  const [userImages, setUserImages] = useState<ImageItem[]>([]);

  const [finalImages, setFinalImages] = useState<(ImageItem | File)[]>([]);

  useEffect(() => {
    if (!villa) return;

    const covers = villa.cover.map((img) => ({
      name: `${process.env.NEXT_PUBLIC_API_URL}/villa/covers/${img}`,
      url: `${process.env.NEXT_PUBLIC_API_URL}/villa/covers/${img}`,
    }));

    setUserImages(covers);
    setFinalImages(covers);
  }, [villa]);

  const deleteImgHandler = (name: string) => {
    setUserImages((prev) => prev.filter((img) => img.name !== name));

    setFinalImages((prev) =>
      prev.filter((img) => {
        if ("name" in img) {
          return img.name !== name;
        }

        return (img as any).name !== name;
      }),
    );

    setDisableNextButton(false);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (userImages.length >= 10) {
      swal({
        title: "تنها 10 عکس می‌توانید آپلود کنید.",
        icon: "error",
        buttons: [false, "اوکی"],
      });

      return;
    }

    const file = event.target.files?.[0];

    if (!file) return;

    const validTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
      "image/jfif",
    ];

    if (!validTypes.includes(file.type)) {
      swal({
        title: "فرمت فایل معتبر نیست. فقط png، jpg، jpeg و webp مجاز هستند.",
        icon: "error",
        buttons: [false, "اوکی"],
      });

      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setUserImages((prev) => [
        ...prev,
        {
          name: file.name,
          url: reader.result as string,
        },
      ]);

      setFinalImages((prev) => [...prev, file]);

      setDisableNextButton(false);
    };

    reader.readAsDataURL(file);
  };

  const submitHandler = () => {
    const formData = new FormData();

    const oldPics = finalImages
      .filter((img): img is ImageItem => "url" in img)
      .map((img) =>
        img.url.replace(`${process.env.NEXT_PUBLIC_API_URL}/villa/covers/`, ""),
      )
      .join(";");

    if (oldPics) {
      formData.append("oldPics", oldPics);
    }

    finalImages.forEach((img) => {
      if (!(img as ImageItem).url) {
        formData.append("cover", img as File);
      }
    });

    formData.append("finished", "true");

    mutate(formData, {
      onSuccess(data) {
        if (data.statusCode !== 200) return;

        toast({
          variant: "success",
          title: "اطلاعات با موفقیت بروزرسانی شد",
        });

        queryClient.invalidateQueries({
          queryKey: ["auth"],
        });

        setDisableNextButton(true);
      },
    });
  };

  return {
    villa,

    userImages,
    disableNextButton,

    deleteImgHandler,
    inputChangeHandler,
    submitHandler,

    isPending,
  };
};
