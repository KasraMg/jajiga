"use client";

import { useEditVilla } from "@/src/api/villa";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { getFromLocalStorage } from "@/src/utils/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserObjData {
  capacity: {
    bedRoom: number;
    buildingSize: string;
    description?: string;
    fuundationSize: string;
    maxCapacity: number;
    normalCapacity: number;
  };
  step: 6;
  finished: false;
}

export const useStep5 = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const router = useRouter();

  const [standardSpace, setStandardSpace] = useState(1);
  const [maximumSpace, setMaximumSpace] = useState(1);

  const [landSize, setLandSize] = useState("");
  const [areaSize, setAreaSize] = useState("");

  const [roomCount, setRoomCount] = useState(0);
  const [description, setDescription] = useState("");

  const villaId = getFromLocalStorage("villaId");

  const mutation = useEditVilla<UserObjData>({
    villaId,
  });

  useEffect(() => {
    setDisableNextButton(!(landSize.length && areaSize.length));
  }, [landSize, areaSize]);

  const incrementStandardHandler = () => {
    setStandardSpace((prev) => prev + 1);

    if (maximumSpace - 1 < standardSpace) {
      setMaximumSpace((prev) => prev + 1);
    }
  };

  const decrementStandardHandler = () => {
    if (standardSpace !== 1) {
      setStandardSpace((prev) => prev - 1);
    }
  };

  const incrementMaximumHandler = () => {
    setMaximumSpace((prev) => prev + 1);
  };

  const decrementMaximumHandler = () => {
    if (maximumSpace !== 1 && maximumSpace !== standardSpace) {
      setMaximumSpace((prev) => prev - 1);
    }
  };

  const createPayload = (): UserObjData => ({
    capacity: {
      normalCapacity: standardSpace,
      maxCapacity: maximumSpace,
      buildingSize: landSize,
      fuundationSize: areaSize,
      bedRoom: roomCount,
      ...(description && { description }),
    },
    step: 6,
    finished: false,
  });

  const submitHandler = () => {
    mutation.mutate(createPayload(), {
      onSuccess: () => {
        toast({
          variant: "success",
          title: "اطلاعات با موفقیت بروزرسانی شد",
        });

        router.replace("/new-room/step6");
      },
    });
    setDisableNextButton(true);
  };

  return {
    standardSpace,
    maximumSpace,

    landSize,
    areaSize,

    roomCount,
    description,

    setLandSize,
    setAreaSize,
    setDescription,

    setRoomCount,

    disableNextButton,

    incrementStandardHandler,
    decrementStandardHandler,

    incrementMaximumHandler,
    decrementMaximumHandler,

    submitHandler,

    isPending: mutation.isPending,
  };
};
