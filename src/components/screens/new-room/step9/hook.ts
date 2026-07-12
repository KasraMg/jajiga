"use client";

import { useEffect, useState } from "react";
import { useEditVilla } from "@/src/api/villa";
import { getFromLocalStorage } from "@/src/utils/utils";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { useRouter } from "next/navigation";

interface UserObjData {
  step: 9;
  finished: true;
}

export const useStep9 = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const router = useRouter();
  const [acceptRules, setAcceptRules] = useState(false);

  const villaId = getFromLocalStorage("villaId");

  const mutation = useEditVilla<UserObjData>({
    villaId,
  });

  useEffect(() => {
    setDisableNextButton(!acceptRules);
  }, [acceptRules]);

  const submitHandler = () => {
    const payload: UserObjData = {
      step: 9,

      finished: true,
    };

    mutation.mutate(payload, {
      onSuccess: () => {
        toast({
          variant: "success",
          title: "اطلاعات با موفقیت بروزرسانی شد",
        });

        router.replace("/new-room/successfull");
      },
    });

    setDisableNextButton(true);
  };

  return {
    acceptRules,

    setAcceptRules,

    disableNextButton,

    submitHandler,

    isPending: mutation.isPending,
  };
};
