import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { roomStore } from "@/src/stores/room";
import { authStore } from "@/src/stores/auth";
import { Book } from "@/src/types/auth.types";
import { useVillaReservationPrice, useDeleteVilla } from "@/src/api/villa";
import { UserDateSelectData } from "@/src/types/villa.types";

export const useReservation = () => {
  const params = useParams();

  const { startDate, endDate, setStartDate, setEndDate } = roomStore(
    (state) => state,
  );

  const { login, userData } = authStore((state) => state);

  const [reserveData, setReserveData] = useState<Book | null>(null);

  const [countSelectedOption, setCountSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [userSelectData, setUserSelectData] =
    useState<UserDateSelectData | null>(null);

  const [disable, setDisable] = useState(true);

  const { mutate: calculatePrice, isPending } = useVillaReservationPrice(
    params.id as string,
  );

  const { mutate: removeVilla, isPending: deletePending } = useDeleteVilla(
    params.id as string,
  );

  useEffect(() => {
    if (userSelectData) {
      setDisable(false);
    }
  }, [userSelectData]);

  useEffect(() => {
    if (userData) {
      const reserve = userData.booked.find(
        (book) => book.villa._id === params.id,
      );

      setReserveData(reserve ?? null);
    }
  }, [userData, params.id]);

  useEffect(() => {
    if (!endDate || !countSelectedOption) {
      setUserSelectData(null);
    }

    if (countSelectedOption && startDate && endDate && login) {
      calculatePrice(
        {
          date: {
            from: startDate,
            to: endDate,
          },
        },
        {
          onSuccess(data) {
            if (data.statusCode === 200) {
              setUserSelectData(data);
            }
          },
        },
      );
    }
  }, [countSelectedOption, startDate, endDate, login]);

  useEffect(() => {
    setStartDate(null);
    setEndDate(null);
  }, []);

  return {
    startDate,
    endDate,

    login,
    userData,

    reserveData,

    countSelectedOption,
    setCountSelectedOption,

    userSelectData,

    disable,

    isPending,

    deletePending,

    removeVilla,
  };
};
