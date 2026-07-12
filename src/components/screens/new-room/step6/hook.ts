"use client";

import { useEffect, useState } from "react";
import { useEditVilla, useGetStep6Items } from "@/src/api/villa";
import { getFromLocalStorage } from "@/src/utils/utils";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { useRouter } from "next/navigation";

interface UserObjData {
  facility: {};
  step: 7;
  finished: false;
}

export const useStep6 = () => {
  const { data, status, isLoading } = useGetStep6Items();
  const router = useRouter()
  const [disableNextButton, setDisableNextButton] = useState(false);

  const [showInput, setShowInput] = useState<boolean[]>([]);

  const [facilitySelected, setFacilitySelected] = useState<any[]>([]);

  const [sanitarySelected, setSanitarySelected] = useState<any[]>([]);

  const [moreFacility, setMoreFacility] = useState("");

  const [moreSanitary, setMoreSanitary] = useState("");

  const villaId = getFromLocalStorage("villaId");

  const mutation = useEditVilla<UserObjData>({
    villaId,
  });

  useEffect(() => {
    if (status === "success" && data) {
      const facilities = data.facility.map((item: { engTitle: string }) => ({
        title: item.engTitle,
        status: false,
        description: "",
      }));

      const sanitary = data.sanitaryFacilities.map(
        (item: { engTitle: string }) => ({
          title: item.engTitle,
          status: false,
        }),
      );

      setFacilitySelected(facilities);

      setSanitarySelected(sanitary);

      setShowInput(new Array(data.facility.length).fill(false));
    }
  }, [status, data]);

  const toggleFacility = (index: number, checked: boolean, title: string) => {
    const inputs = [...showInput];

    inputs[index] = !inputs[index];

    setShowInput(inputs);

    setFacilitySelected((prev) =>
      prev.map((item) =>
        item.title === title
          ? {
              ...item,
              status: checked,
            }
          : item,
      ),
    );
  };

  const toggleSanitary = (checked: boolean, title: string) => {
    setSanitarySelected((prev) =>
      prev.map((item) =>
        item.title === title
          ? {
              ...item,
              status: checked,
            }
          : item,
      ),
    );
  };

  const inputChangeHandler = (value: string, title: string) => {
    setFacilitySelected((prev) =>
      prev.map((item) =>
        item.title === title
          ? {
              ...item,
              description: value,
            }
          : item,
      ),
    );
  };

  const convertArrayToObject = (arr: any[], hasDescription: boolean) => {
    return arr.reduce((acc: any, cur: any) => {
      acc[cur.title] = {
        status: cur.status,
        ...(hasDescription &&
          cur.description && {
            description: cur.description,
          }),
      };

      return acc;
    }, {});
  };

  const createPayload = (): UserObjData => {
    const facilityResult = convertArrayToObject(facilitySelected, true);

    const sanitaryResult = convertArrayToObject(sanitarySelected, false);

    return {
      facility: {
        facility: {
          ...facilityResult,
          ...(moreFacility && {
            moreFacility,
          }),
        },

        sanitaryFacilities: {
          ...sanitaryResult,
          ...(moreSanitary && {
            moreSanitaryFacilities: moreSanitary,
          }),
        },
      },

      step: 7,

      finished: false,
    };
  };

  const submitHandler = () => {
    mutation.mutate(createPayload(), {
      onSuccess: () => {
        toast({
          variant: "success",
          title: "اطلاعات با موفقیت بروزرسانی شد",
        });

        router.replace("/new-room/step7");
      },
    });

    setDisableNextButton(true);
  };

  return {
    data,

    isLoading,

    status,

    showInput,

    facilitySelected,

    sanitarySelected,

    moreFacility,

    moreSanitary,

    setMoreFacility,

    setMoreSanitary,

    disableNextButton,

    toggleFacility,

    toggleSanitary,

    inputChangeHandler,

    submitHandler,

    isPending: mutation.isPending,
  };
};
