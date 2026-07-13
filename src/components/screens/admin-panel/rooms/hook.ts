"use client";

import {
  useDeleteVilla,
  useGetAllVillas,
  useVillaAccessVisit,
} from "@/src/api/admin-panel/villa";
import { useState } from "react";
import swal from "sweetalert";

export const useRooms = () => {
  const { data: villas, isPending: getVillasPending } = useGetAllVillas();

  const [villaId, setVillaId] = useState("");

  const [roomStatusChange, setRoomStatusChange] = useState<
    [] | [string, string]
  >([]);

  const { mutate: changeStatusMutation, isPending } = useVillaAccessVisit({
    action: String(roomStatusChange[0]),
    villaId: String(roomStatusChange[1]),
  });

  const { mutate: deleteMutation, isPending: deleteHandlerPending } =
    useDeleteVilla();

  const approveVilla = (id: string) => {
    setRoomStatusChange(["accept", id]);

    changeStatusMutation();
  };

  const rejectVilla = (id: string) => {
    setRoomStatusChange(["reject", id]);

    changeStatusMutation();
  };

  const villaDeleteHandler = (id: string) => {
    swal({
      title: "آیا از حذف ویلا مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (!res) return;

      setVillaId(id);

      deleteMutation(villaId);
    });
  };

  return {
    villas,

    getVillasPending,

    deleteHandlerPending,

    roomStatusChange,

    isPending,

    approveVilla,

    rejectVilla,

    villaDeleteHandler,
  };
};
