"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { authStore } from "@/src/stores/auth";
import useStateData from "@/src/hooks/useStateData";
import { useUpdateVilla } from "@/src/api/villa";

interface UserObjData {
  address: {
    state: string | undefined;
    city: string | undefined;
    address: string;
  };
  coordinates: {
    x: string;
    y: string;
  };
  aboutVilla: {
    villaSpace?: any;
    villaType?: any;
    villaZone?: any;
    aboutVilla: string;
  };
  step: number;
  finished: boolean;
}

export const useBaseInformation = () => {
  const params = useParams();

  const { userData } = authStore((state) => state);

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  const { mutate, isPending } = useUpdateVilla(params.id as string);

  const stateOptions = useStateData();

  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const [disableNextButton, setDisableNextButton] = useState(true);

  const [stateSelectedOption, setStateSelectedOption] = useState<any>(null);

  const [citySelectedOption, setCitySelectedOption] = useState<any>([]);

  const [userSelectState, setUserSelectState] = useState<any>(null);

  const [userSelectCity, setUserSelectCity] = useState<any>(null);

  let coordinates: {
    x: string;
    y: string;
  };

  const mapChangeHandler = (x: string, y: string) => {
    setDisableNextButton(false);

    coordinates = {
      x,
      y,
    };
  };

  const submitHandler = () => {
    if (!coordinates) {
      coordinates = {
        x: String(villa?.coordinates.x),
        y: String(villa?.coordinates.y),
      };
    }

    const data: UserObjData = {
      address: {
        state: userSelectState?.label,
        city: userSelectCity?.label,
        address,
      },

      coordinates,

      aboutVilla: {
        villaSpace: villa?.aboutVilla.villaSpace,
        villaType: villa?.aboutVilla.villaType,
        villaZone: villa?.aboutVilla.villaZone,
        aboutVilla: description,
      },

      step: 9,
      finished: true,
    };

    mutate(data);

    setDisableNextButton(true);
  };

  useEffect(() => {
    if (!villa) return;

    setAddress(villa.address.address || "");

    setDescription(villa.aboutVilla.aboutVilla || "");

    const selectedState = stateOptions.find(
      (state) => state.label === villa.address.state,
    );

    const otherStates = stateOptions.filter(
      (state) => state.label !== villa.address.state,
    );

    setUserSelectState(selectedState);

    setStateSelectedOption([selectedState, ...otherStates]);

    const cities = selectedState?.value
      ?.filter((city) => city !== villa.address.city)
      .map((city) => ({
        label: city,
        value: city,
      }));

    setCitySelectedOption([
      {
        label: villa.address.city,
        value: villa.address.city,
      },
      ...(cities || []),
    ]);
  }, [villa, stateOptions]);

  useEffect(() => {
    if (userSelectState?.value) {
      setCitySelectedOption(
        userSelectState.value.map((city: string) => ({
          label: city,
          value: city,
        })),
      );
    }
  }, [userSelectState]);

  return {
    villa,

    address,
    setAddress,

    description,
    setDescription,

    stateSelectedOption,
    citySelectedOption,

    userSelectState,
    setUserSelectState,

    userSelectCity,
    setUserSelectCity,

    disableNextButton,
    setDisableNextButton,

    mapChangeHandler,
    submitHandler,

    isPending,
  };
};
