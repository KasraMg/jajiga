import { Button } from "@/src/components/shadcn/ui/button";
import usePostData from "@/src/hooks/usePostData";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import React, { useState } from "react";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { ButtonLoader } from "@/src/components/modules/loader/Loader";

const AddCategoryModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [href, setHref] = useState("");

  const successFunc = (data: { statusCode: number }) => {
    if (data.statusCode === 200) {
      toast({
        variant: "success",
        title: "دسته بندی با موفقیت ایجاد شد",
      });
      setIsShowModal(false);
      setTitle("");
      setHref("");
    } else {
      toast({
        variant: "danger",
        title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
      });
      location.reload();
    }
  };

  const { mutate: mutation, isPending } = usePostData(
    `/category/add`,
    null,
    false,
    successFunc,
    false,
    "allCategories",
  );

  const createCategoryHandler = () => {
    const engRegex = /[A-Za-z]/;
    if (!engRegex.test(href)) {
      toast({
        title: "دقت کنید آدرس فقط باید کلمات انگلیسی باشد",
        variant: "danger",
      });
    } else {
      const data = {
        title,
        href,
      };
      mutation(data);
    }
  };
  return (
    <Dialog open={isShowModal} onOpenChange={setIsShowModal}>
      <DialogTrigger asChild>
        <Button className="gap-2 text-black">
          <p className="text-red-600">+</p> دسته بندی جدید
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[440px] w-full max-w-full sm:!max-w-[425px]">
        <DialogTitle></DialogTitle> 
        <div>
          <label className="mb-3 block" htmlFor="">
            نام دسته بندی
          </label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            className="w-full rounded-lg border border-solid border-gray-500 px-2 py-2"
          />
        </div>
        <div>
          <label className="mb-3 block" htmlFor="">
            آدرس دسته بندی <span className="text-xs">(انگلیسی)</span>
          </label>
          <input
            value={href}
            onChange={(event) => setHref(event.target.value)}
            type="text"
            className="w-full rounded-lg border border-solid border-gray-500 px-2 py-2"
          />
        </div>
        <Button
          className="mx-auto mt-4 h-8 px-4"
          disabled={title.length < 3 || href.length < 3}
          onClick={createCategoryHandler}
          variant={"main"}
        >
          {isPending ? <ButtonLoader /> : "ثبت"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryModal;
