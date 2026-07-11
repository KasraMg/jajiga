"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { authStore } from "@/src/stores/auth";
import { useUpdateVilla } from "@/src/api/villa";

interface UserObjData {
  capacity: {
    normalCapacity: number;
    maxCapacity: number;
    buildingSize: string;
    fuundationSize: string;
    bedRoom: number;
    description?: string;
  };
  step: 9;
  finished: true;
}

export const useCapacity = () => {
  const params = useParams();

  const { userData } = authStore();

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  const { mutate, isPending } = useUpdateVilla(params.id as string);

  const [standardSpace, setStandardSpace] = useState(1);
  const [maximumSpace, setMaximumSpace] = useState(1);

  const [landSize, setLandSize] = useState("");
  const [areaSize, setAreaSize] = useState("");

  const [roomCount, setRoomCount] = useState(0);

  const [description, setDescription] = useState("");

  const [disableNextButton, setDisableNextButton] = useState(true);

  useEffect(() => {
    if (!villa) return;

    setStandardSpace(villa.capacity.normalCapacity);

    setMaximumSpace(villa.capacity.maxCapacity);

    setLandSize(villa.capacity.buildingSize);

    setAreaSize(villa.capacity.fuundationSize);

    setRoomCount(villa.capacity.bedRoom);

    setDescription(villa.capacity.description || "");
  }, [villa]);

  const incrementStandardHandler = () => {
    setDisableNextButton(false);

    setStandardSpace((prev) => {
      const next = prev + 1;

      if (maximumSpace < next) {
        setMaximumSpace(next);
      }

      return next;
    });
  };

  const decrementStandardHandler = () => {
    if (standardSpace === 1) return;

    setDisableNextButton(false);

    setStandardSpace((prev) => prev - 1);
  };

  const incrementMaximumHandler = () => {
    setDisableNextButton(false);

    setMaximumSpace((prev) => prev + 1);
  };

  const decrementMaximumHandler = () => {
    if (maximumSpace === standardSpace) return;

    setDisableNextButton(false);

    setMaximumSpace((prev) => prev - 1);
  };

  const incrementRoomHandler = () => {
    setDisableNextButton(false);

    setRoomCount((prev) => prev + 1);
  };

  const decrementRoomHandler = () => {
    if (roomCount === 0) return;

    setDisableNextButton(false);

    setRoomCount((prev) => prev - 1);
  };

  const landSizeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDisableNextButton(false);

    setLandSize(event.target.value);
  };

  const areaSizeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDisableNextButton(false);

    setAreaSize(event.target.value);
  };

  const submitHandler = () => {
    const data: UserObjData = {
      capacity: {
        normalCapacity: standardSpace,
        maxCapacity: maximumSpace,
        buildingSize: landSize,
        fuundationSize: areaSize,
        bedRoom: roomCount,
        ...(description && { description }),
      },
      step: 9,
      finished: true,
    };

    mutate(data);

    setDisableNextButton(true);
  };

  return {
    standardSpace,
    maximumSpace,

    landSize,
    areaSize,

    roomCount,

    description,
    setDescription,

    disableNextButton,
    setDisableNextButton,

    incrementStandardHandler,
    decrementStandardHandler,

    incrementMaximumHandler,
    decrementMaximumHandler,

    incrementRoomHandler,
    decrementRoomHandler,

    landSizeChangeHandler,
    areaSizeChangeHandler,

    submitHandler,

    isPending,
  };
};
