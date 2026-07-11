"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { authStore } from "@/src/stores/auth";
import { formatNumber } from "@/src/utils/utils";
import { useUpdateVilla } from "@/src/api/villa";

interface UserObjData {
  price: {};
  finished: true;
}

const season = [
  {
    title: "فصل بهار",
    id: 1,
    avatar: "https://www.jajiga.com/static/img/pricing/spring.png",
  },
  {
    title: "فصل تابستان",
    id: 2,
    avatar: "https://www.jajiga.com/static/img/pricing/summer.png",
  },
  {
    title: "فصل پاییز",
    id: 3,
    avatar: "https://www.jajiga.com/static/img/pricing/autumn.png",
  },
  {
    title: "فصل زمستان",
    id: 4,
    avatar: "https://www.jajiga.com/static/img/pricing/winter.png",
  },
];

export const usePrice = () => {
  const params = useParams();

  const { userData } = authStore();

  const villa = userData?.villas.find((villa) => villa._id === params.id);

  const [disableNextButton, setDisableNextButton] = useState(true);

  const [newYearPrice, setNewYearPrice] = useState("");

  const [seasonDatas, setSeasonDatas] = useState([
    {
      id: 1,
      Data: [
        { title: "وسط هفته", amount: "" },
        { title: "آخر هفته", amount: "" },
        { title: "تعطیلات", amount: "" },
      ],
    },
    {
      id: 2,
      Data: [
        { title: "وسط هفته", amount: "" },
        { title: "آخر هفته", amount: "" },
        { title: "تعطیلات", amount: "" },
      ],
    },
    {
      id: 3,
      Data: [
        { title: "وسط هفته", amount: "" },
        { title: "آخر هفته", amount: "" },
        { title: "تعطیلات", amount: "" },
      ],
    },
    {
      id: 4,
      Data: [
        { title: "وسط هفته", amount: "" },
        { title: "آخر هفته", amount: "" },
        { title: "تعطیلات", amount: "" },
      ],
    },
  ]);

  const { mutate, isPending } = useUpdateVilla(params.id as string);

  useEffect(() => {
    if (!villa) return;

    setNewYearPrice(String(villa.price.newYear));
  }, [villa]);

  const unformatNumber = (num: string) => num.replace(/,/g, "");

  const changeInputHandler = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
    date: string,
  ) => {
    setDisableNextButton(false);

    const inputValue = event.target.value;

    const unformattedValue = unformatNumber(inputValue);

    const updated = [...seasonDatas];

    const seasonIndex = id - 1;

    const dataIndex = updated[seasonIndex].Data.findIndex(
      (item) => item.title === date,
    );

    updated[seasonIndex].Data[dataIndex].amount = unformattedValue;

    setSeasonDatas(updated);
  };

  const newYearInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDisableNextButton(false);

    const value = unformatNumber(event.target.value);

    if (!isNaN(Number(value))) {
      setNewYearPrice(value);
    }
  };

  const submitHandler = () => {
    if (!villa) return;

    const data: UserObjData = {
      price: {
        newYear: newYearPrice,

        spring: {
          midWeek: seasonDatas[0].Data[0].amount || villa.price.spring.midWeek,
          holidays:
            seasonDatas[0].Data[1].amount || villa.price.spring.holidays,
          peakDays:
            seasonDatas[0].Data[2].amount || villa.price.spring.peakDays,
        },

        summer: {
          midWeek: seasonDatas[1].Data[0].amount || villa.price.summer.midWeek,
          holidays:
            seasonDatas[1].Data[1].amount || villa.price.summer.holidays,
          peakDays:
            seasonDatas[1].Data[2].amount || villa.price.summer.peakDays,
        },

        autumn: {
          midWeek: seasonDatas[2].Data[0].amount || villa.price.autumn.midWeek,
          holidays:
            seasonDatas[2].Data[1].amount || villa.price.autumn.holidays,
          peakDays:
            seasonDatas[2].Data[2].amount || villa.price.autumn.peakDays,
        },

        winter: {
          midWeek: seasonDatas[3].Data[0].amount || villa.price.winter.midWeek,
          holidays:
            seasonDatas[3].Data[1].amount || villa.price.winter.holidays,
          peakDays:
            seasonDatas[3].Data[2].amount || villa.price.winter.peakDays,
        },
      },

      finished: true,
    };

    mutate(data);

    setDisableNextButton(true);
  };

  return {
    season,

    villa,

    isPending,

    disableNextButton,

    seasonDatas,

    newYearPrice,

    setNewYearPrice,

    submitHandler,

    changeInputHandler,

    newYearInputChangeHandler,

    formatNumber,
  };
};
