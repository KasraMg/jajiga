"use client";

import { useMemo } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { Button } from "@/src/components/shadcn/ui/button";
import Loader, { ButtonLoader } from "@/src/components/modules/loader/loader";
import Metadata from "@/src/components/modules/meta-data";
import UserBanModal from "./partials/user-ban-modal";

import { userColumns } from "@/src/utils/data-table-columns";
import { convertToJalali } from "@/src/utils/utils";
import { UserInfoObj } from "@/src/types/auth.types";

import useUsers from "./hook";

const UsersScreen = () => {
  const { users, getUsersPending, changeRole, changeRolePending } = useUsers();

  const tableData = useMemo(() => {
    return users.map((user: UserInfoObj) => ({
      userData: `${user.firstName} ${user.lastName}`,

      phone: user.phone,

      rooms: (
        <div className="flex items-center gap-2">
          <p>{user.villa.number}</p>

          {user.villa.number !== 0 &&
            (user.villa.number === 1 ? (
              <Button size="sm" variant="main">
                <Link href={`/room/${user.villa.id[0]}`}>مشاهده</Link>
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="main">
                    مشاهده
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-full max-w-full text-center sm:max-w-[425px]">
                  <DialogTitle />

                  {user.villa.id.map((id, index) => (
                    <Link key={id} href={`/room/${id}`}>
                      اقامتگاه شماره {index + 1}
                    </Link>
                  ))}
                </DialogContent>
              </Dialog>
            ))}
        </div>
      ),

      register: convertToJalali(user.createdAt.slice(0, 10)),

      reserves: (
        <div className="flex items-center gap-2">
          <p>{user.booked.number}</p>

          {user.booked.number !== 0 &&
            (user.booked.number === 1 ? (
              <Button size="sm" variant="main">
                <Link href={`/room/${user.booked.id[0]}`}>مشاهده</Link>
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="main">
                    مشاهده
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-full max-w-full text-center sm:max-w-[425px]">
                  <DialogTitle />

                  {user.booked.id.map((id, index) => (
                    <Link key={id} href={`/room/${id}`}>
                      رزرو شماره {index + 1}
                    </Link>
                  ))}
                </DialogContent>
              </Dialog>
            ))}
        </div>
      ),

      role: user.role === "user" ? "کاربر عادی" : "ادمین",

      changeRole: (
        <Button
          variant="blue"
          className="h-8"
          onClick={() => changeRole(user.role, user.phone)}
        >
          {changeRolePending ? <ButtonLoader /> : "تغییر"}
        </Button>
      ),

      ban: <UserBanModal userPhone={user.phone} />,
    }));
  }, [users, changeRole, changeRolePending]);

  return (
    <>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            کاربران
          </p>
        </div>
      </div>

      <Metadata seoTitle="جاجیگا | کاربران" seoDescription="آمار کاربران" />

      <DataTable
        columns={userColumns as any}
        data={tableData}
        progressPending={getUsersPending}
        progressComponent="..."
        pagination
        responsive
      />

      {getUsersPending && <Loader />}
    </>
  );
};

export default UsersScreen;
