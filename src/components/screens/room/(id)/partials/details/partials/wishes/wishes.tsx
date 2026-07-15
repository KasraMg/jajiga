import React, { useState } from "react";
import { useParams } from "next/navigation";
import { authStore } from "@/src/stores/auth";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import Loader from "@/src/components/modules/loader/loader";
import { useQueryClient } from "@tanstack/react-query";
import { VillaResponse } from "@/src/types/villa.types";
import { useToggleWish } from "@/src/api/wishes";

const Wishes = ({
  wishesStatus,
  data,
}: {
  wishesStatus: boolean;
  data: VillaResponse;
}) => {
  const queryClient = useQueryClient();
  const { userData } = authStore((store) => store);
  const [wishes, setWishes] = useState(wishesStatus);

  const params = useParams();
  const { mutate: mutation, isPending } = useToggleWish();

  const wishesHandler = () => {
    if (userData) {
      if (data.villa.isAccepted !== "false") {
        const obj: { flag: boolean; villaId: string } = {
          flag: false,
          villaId: data.villa._id,
        };
        wishes ? (obj.flag = false) : (obj.flag = true);

        mutation(obj, {
          onSuccess(data) {
            if (data.statusCode === 200) {
              toast({
                variant: "success",
                title: !wishes
                  ? "اقامتگاه با موفقیت به علاقه مندی های شما اضافه شد"
                  : "اقامتگاه با موفقیت از علاقه مندی های شما حذف شد",
              });
              setWishes((prev) => !prev);
              queryClient.invalidateQueries({ queryKey: ["auth"] });
              queryClient.invalidateQueries({ queryKey: ["villa", params.id] });
            } else {
              toast({
                variant: "success",
                title: "خطایی غیر منتظره رخ داد",
              });
            }
          },
        });
      } else {
        toast({
          variant: "danger",
          title: "این ویلا هنوز توسط ادمین تایید نشده است",
        });
      }
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
