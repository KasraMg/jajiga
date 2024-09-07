import React, { useState } from "react";
import { useParams } from "next/navigation";
import usePostData from "@/src/hooks/usePostData";
import { authStore } from "@/src/stores/auth";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import Loader from "@/src/components/modules/loader/Loader";
import { useQueryClient } from "@tanstack/react-query";

const Wishes = ({ wishesStatus }: { wishesStatus: boolean }) => {
  const queryClient = useQueryClient();
  const { userData } = authStore((store) => store);
  const [wishes, setWishes] = useState(wishesStatus);
  const successFunc = (resdata: { statusCode: number }) => {
    if (resdata.statusCode === 200) {
      toast({
        variant: "success",
        title: !wishes
          ? "اقامتگاه با موفقیت به علاقه مندی های شما اضافه شد"
          : "اقامتگاه با موفقیت از علاقه مندی های شما حذف شد",
      });
      setWishes((prev) => !prev);
      queryClient.invalidateQueries({ queryKey: ["auth"] });

    } else {
      toast({
        variant: "success",
        title: "خطایی غیر منتظره رخ داد",
      });
      location.reload();
    }
  };

  const params = useParams();
  const { mutate: mutation, isPending } = usePostData<any>(
    `/wishes/${params?.id}`,
    null,
    false,
    successFunc,
  );

  const wishesHandler = () => {
    if (userData) {
      const obj: { flag: boolean | null } = { flag: null };
      wishes ? (obj.flag = false) : (obj.flag = true);
      mutation(obj);
    } else {
      toast({
        variant: "danger",
        title: "لطفا ابتدا لاگین یا ثبت نام کنید",
      });
    }
  };

  return (
    <div
      onClick={wishesHandler}
      className="flex cursor-pointer items-center rounded-full bg-customYellow p-2 text-black"
    >
      {wishes ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
      {isPending && <Loader />}
    </div>
  );
};

export default Wishes;
