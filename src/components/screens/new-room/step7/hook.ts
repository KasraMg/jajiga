"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useEditVilla } from "@/src/api/villa";
import { getFromLocalStorage } from "@/src/utils/utils";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { useRouter } from "next/navigation";

interface PriceDays {
  midWeek: string;
  holidays: string;
  peakDays: string;
}

interface UserObjData {
  price: {
    newYear: string;
    spring: PriceDays;
    summer: PriceDays;
    autumn: PriceDays;
    winter: PriceDays;
  };
  step: 8;
  finished: false;
}

export const useStep7 = () => {
  const [disableNextButton, setDisableNextButton] = useState(true);
  const router = useRouter()

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

  const villaId = getFromLocalStorage("villaId");

  const mutation = useEditVilla<UserObjData>({
    villaId,
  });

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

  const formatNumber = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const unformatNumber = (num: string) => {
    return num.replace(/,/g, "");
  };

  const validInputsHandler = (data = seasonDatas) => {
    const emptySeason = data.some((season) =>
      season.Data.some((item) => item.amount.length === 0),
    );

    const emptyNewYear = newYearPrice.length === 0;

    setDisableNextButton(emptySeason || emptyNewYear);
  };

  useEffect(() => {
    validInputsHandler();
  }, [newYearPrice, seasonDatas]);

  const newYearInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = unformatNumber(event.target.value);

    if (!isNaN(Number(value))) {
      setNewYearPrice(value);
    }
  };

  const changeInputHandler = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
    date: string,
  ) => {
    const value = unformatNumber(event.target.value);

    const formattedValue = formatNumber(value);

    const updated = [...seasonDatas];

    const seasonIndex = id - 1;

    const dataIndex = updated[seasonIndex].Data.findIndex(
      (item) => item.title === date,
    );

    updated[seasonIndex].Data[dataIndex].amount = value;

    setSeasonDatas(updated);

    event.target.value = formattedValue;
  };

  const createPayload = (): UserObjData => ({
    price: {
      newYear: newYearPrice,

      spring: {
        midWeek: seasonDatas[0].Data[0].amount,
        holidays: seasonDatas[0].Data[1].amount,
        peakDays: seasonDatas[0].Data[2].amount,
      },

      summer: {
        midWeek: seasonDatas[1].Data[0].amount,
        holidays: seasonDatas[1].Data[1].amount,
        peakDays: seasonDatas[1].Data[2].amount,
      },

      autumn: {
        midWeek: seasonDatas[2].Data[0].amount,
        holidays: seasonDatas[2].Data[1].amount,
        peakDays: seasonDatas[2].Data[2].amount,
      },

      winter: {
        midWeek: seasonDatas[3].Data[0].amount,
        holidays: seasonDatas[3].Data[1].amount,
        peakDays: seasonDatas[3].Data[2].amount,
      },
    },

    step: 8,

    finished: false,
  });

  const submitHandler = () => {
    mutation.mutate(createPayload(), {
      onSuccess: () => {
        toast({
          variant: "success",
          title: "اطلاعات با موفقیت بروزرسانی شد",
        });

        router.replace("/new-room/step8");
      },
    });

    setDisableNextButton(true);
  };

  return {
    season,

    seasonDatas,

    newYearPrice,

    disableNextButton,

    formatNumber,

    newYearInputChangeHandler,

    changeInputHandler,

    submitHandler,

    isPending: mutation.isPending,
  };
};
