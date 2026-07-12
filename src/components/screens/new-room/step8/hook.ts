"use client";

import { useEffect, useState } from "react";
import { useEditVilla } from "@/src/api/villa";
import { getFromLocalStorage } from "@/src/utils/utils";
import { useRouter } from "next/navigation";
import { toast } from "@/src/components/shadcn/ui/use-toast";

interface UserObjData {
  rules: {
    more?: string;
    music: boolean;
    pet: boolean;
    smoke: boolean;
  };
  step: 9;
  finished: false;
}

export const useStep8 = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const router = useRouter()

  const [rules, setRules] = useState("");

  const [pet, setPet] = useState<boolean | null>(null);

  const [party, setParty] = useState<boolean | null>(null);

  const [smoke, setSmoke] = useState<boolean | null>(null);

  const villaId = getFromLocalStorage("villaId");

  const mutation = useEditVilla<UserObjData>({
    villaId,
  });

  useEffect(() => {
    if (smoke !== null && party !== null && pet !== null) {
      setDisableNextButton(false);
    } else {
      setDisableNextButton(true);
    }
  }, [smoke, party, pet]);

  const createPayload = (): UserObjData => ({
    rules: {
      pet: pet ?? false,

      music: party ?? false,

      smoke: smoke ?? false,

      ...(rules && {
        more: rules,
      }),
    },

    step: 9,

    finished: false,
  });

  const submitHandler = () => {
    mutation.mutate(createPayload(), {
      onSuccess: () => {
        toast({
          variant: "success",
          title: "اطلاعات با موفقیت بروزرسانی شد",
        });

        router.replace("/new-room/step9");
      },
    });

    setDisableNextButton(true);
  };

  return {
    rules,

    setRules,

    pet,

    setPet,

    party,

    setParty,

    smoke,

    setSmoke,

    disableNextButton,

    submitHandler,

    isPending: mutation.isPending,
  };
};
