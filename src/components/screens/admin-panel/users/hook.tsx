"use client";

import { useMemo } from "react";
import swal from "sweetalert";
import { UserInfoObj } from "@/src/types/auth.types";
import { useChangeUserRole, useUser } from "@/src/api/admin-panel/user";

const useUsers = () => {
  const { data, isPending: getUsersPending } = useUser();

  const { mutate: changeRoleMutation, isPending: changeRolePending } =
    useChangeUserRole();

  const users = useMemo(() => {
    return data?.users ?? [];
  }, [data]);

  const changeRole = (role: string, phone: string) => {
    swal({
      title: `آیا از تغییر سطح این کاربر به ${
        role === "user" ? "ادمین" : "کاربر عادی"
      } اطمینان دارید؟`,
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (!result) return;

      changeRoleMutation({
        action: role === "admin" ? "demotion" : "promotion",
        phone,
      });
    });
  };

  return {
    users: users as UserInfoObj[],
    getUsersPending,
    changeRole,
    changeRolePending,
  };
};

export default useUsers;
