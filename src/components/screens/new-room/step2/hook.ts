import { useState } from "react";
import { useRouter } from "next/navigation";
import { getFromLocalStorage } from "@/src/utils/utils";
import { useEditVilla } from "@/src/api/villa";
import { toast } from "@/src/components/shadcn/ui/use-toast";

interface UserObjData {
  coordinates: {
    x: string;
    y: string;
  };
  step: 3;
  finished: false;
}

const useStep2 = () => {
  const router = useRouter();

  const villaId = getFromLocalStorage("villaId");

  const [coordinates, setCoordinates] = useState({
    x: "",
    y: "",
  });

  const mutation = useEditVilla<UserObjData>({
    villaId,
  });

  const mapChangeHandler = (x: string, y: string) => {
    setCoordinates({
      x: String(x),
      y: String(y),
    });
  };

  const submitHandler = () => {
    mutation.mutate(
      {
        coordinates,
        step: 3,
        finished: false,
      },
      {
        onSuccess: () => {
          toast({
            variant: "success",
            title: "اطلاعات با موفقیت بروزرسانی شد",
          });

          router.replace("/new-room/step3");
        },
      },
    );
  };

  return {
    mapChangeHandler,
    submitHandler,
    disableNextButton: !coordinates.x || !coordinates.y,
    isPending: mutation.isPending,
  };
};

export default useStep2;
