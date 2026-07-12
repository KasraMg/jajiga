import { useEditVilla } from "@/src/api/villa";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { getFromLocalStorage } from "@/src/utils/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface userObjData {
  aboutVilla: {
    villaSpace: string | undefined;
    villaType: string | undefined;
    villaZone: string | undefined;
    aboutVilla: string | undefined;
  };
  step: 5;
  finished: false;
}

export const useStep4 = () => {
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [spaceSelectedOption, setSpaceSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [typeSelectedOption, setTypeSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [areaSelectedOption, setAreaSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [disableNextButton, setDisableNextButton] = useState(true);
  const villaId = getFromLocalStorage("villaId");

  const mutation = useEditVilla<userObjData>({
    villaId,
  });

  const submitHandler = () => {
    mutation.mutate(createPayload(), {
      onSuccess: () => {
        toast({
          variant: "success",
          title: "اطلاعات با موفقیت بروزرسانی شد",
        });

        router.replace("/new-room/step5");
      },
    });
  };

  useEffect(() => {
    setDisableNextButton(
      !(
        spaceSelectedOption &&
        typeSelectedOption &&
        areaSelectedOption &&
        description
      ),
    );
  }, [
    description,
    spaceSelectedOption,
    typeSelectedOption,
    areaSelectedOption,
  ]);

  const createPayload = () => ({
    aboutVilla: {
      villaSpace: spaceSelectedOption!.value,
      villaType: typeSelectedOption!.value,
      villaZone: areaSelectedOption!.value,
      aboutVilla: description,
    },
    step: 5 as const,
    finished: false as const,
  });

  return {
    description,
    setDescription,

    spaceSelectedOption,
    setSpaceSelectedOption,

    typeSelectedOption,
    setTypeSelectedOption,

    areaSelectedOption,
    setAreaSelectedOption,

    disableNextButton,

    submitHandler,
    isPending: mutation.isPending,
  };
};
