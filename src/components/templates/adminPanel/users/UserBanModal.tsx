import { Button } from "@/src/components/shadcn/ui/button";
import usePostData from "@/src/hooks/usePostData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import React, { useState } from "react";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { ButtonLoader } from "@/src/components/modules/loader/Loader";
const UserBanModal = ({ userPhone }: { userPhone: string }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [banReason, setBanReason] = useState("");

  const successFunc = (data: { statusCode: number }) => {
    if (data.statusCode === 200) {
      toast({
        variant: "success",
        title: "کاربر با موفقیت بن شد",
      });
      setIsShowModal(false);
      setBanReason("");
    } else {
      toast({
        variant: "danger",
        title: "با عرض پوزش لطفا مجدد امتحان کنید",
      });
        location.reload();
    }
  };

  const { mutate: mutation, isPending } = usePostData(
    `/ban-user/${userPhone}`,
    null,
    false,
    successFunc,
    false,
    "users",
  );

  const banHandler = () => {
    const data = {
      reason: banReason,
    };
    mutation(data);
  };

  return (
    <Dialog open={isShowModal} onOpenChange={setIsShowModal}>
      <DialogTrigger asChild>
        <Button variant={"danger"}>بن</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[440px] w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <p className="text-center">دلیلتون برای بن این کاربر چیه؟</p>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <input
            onClick={(event) =>
              setBanReason((event.target as HTMLTextAreaElement).value)
            }
            name="banReason"
            type="radio"
            value={"violation of Terms of Service"}
          />
          <p>نادیده گرفتن قوانین</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            onClick={(event) =>
              setBanReason((event.target as HTMLTextAreaElement).value)
            }
            name="banReason"
            type="radio"
            value={"spamming"}
          />
          <p>اسپم</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            onClick={(event) =>
              setBanReason((event.target as HTMLTextAreaElement).value)
            }
            name="banReason"
            type="radio"
            value={"fraudulent Activities"}
          />
          <p>فعالیت های متقلبانه</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            onClick={(event) =>
              setBanReason((event.target as HTMLTextAreaElement).value)
            }
            name="banReason"
            type="radio"
            value={"hacking or Security Breaches"}
          />
          <p>موارد امنیتی</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            onClick={(event) =>
              setBanReason((event.target as HTMLTextAreaElement).value)
            }
            name="banReason"
            type="radio"
            value={"copyright Infringement"}
          />
          <p>کپی رایت</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            onClick={(event) =>
              setBanReason((event.target as HTMLTextAreaElement).value)
            }
            name="banReason"
            type="radio"
            value={"impersonation"}
          />
          <p>جعل هویت</p>
        </div>
        <Button
          className="mx-auto mt-4 h-8 px-4"
          onClick={banHandler}
          variant={"main"}
          disabled={!banReason}
        >
          {isPending ? <ButtonLoader /> : "تایید"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UserBanModal;
