"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { authStore } from "@/src/stores/auth";
import { useUpdateVilla } from "@/src/api/villa";
import { useStep6Items } from "@/src/api/public";

interface Facility {
  engtitle: string;
  title: string;
  status: boolean;
  description: string;
  placeholder: string;
}

export const useFacilities = () => {
  const params = useParams();
  const { data } = useStep6Items();

  const { userData } = authStore();

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  const { mutate, isPending } = useUpdateVilla(params.id as string);

  const [facility, setFacility] = useState<Facility[]>([]);

  const [moreFacility, setMoreFacility] = useState("");

  const [disableNextButton, setDisableNextButton] = useState(true);

  useEffect(() => {
    if (!data || !villa) return;

    const newFacilities = data.facility.map((item: any) => ({
      engtitle: item.engTitle,
      title: item.title,
      status: false,
      description: "",
      placeholder: item.placeHolder,
    }));

    const prevFacility: any = villa.facility.facility || {};

    const updatedFacilities = newFacilities.map((item: Facility) => {
      const current = prevFacility[item.engtitle];

      return current
        ? {
            ...item,
            status: current.status,
            description: current.description || "",
          }
        : item;
    });

    setFacility(updatedFacilities);

    setMoreFacility(prevFacility.moreFacility || "");
  }, [data, villa]);

  const handleInputChange = (value: boolean | string, title: string) => {
    setDisableNextButton(false);

    setFacility((prev) =>
      prev.map((item) =>
        item.title === title
          ? typeof value === "boolean"
            ? { ...item, status: value }
            : {
                ...item,
                description: value,
              }
          : item,
      ),
    );
  };

  const submitHandler = () => {
    const result = facility.reduce((acc: any, item) => {
      acc[item.engtitle] = {
        status: item.status,
        ...(item.description && {
          description: item.description,
        }),
      };

      return acc;
    }, {});

    mutate({
      facility: {
        facility: {
          ...result,
          ...(moreFacility && {
            moreFacility,
          }),
        },
        sanitaryFacilities: villa?.facility.sanitaryFacilities,
      },
      step: 9,
      finished: true,
    });

    setDisableNextButton(true);
  };

  return {
    facility,

    moreFacility,
    setMoreFacility,

    disableNextButton,

    handleInputChange,

    submitHandler,

    isPending,
  };
};
