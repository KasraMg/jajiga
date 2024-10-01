"use client";
import Layout from "@/src/components/layouts/adminLayout/page";
import { Button } from "@/src/components/shadcn/ui/button";
import useGetData from "@/src/hooks/useGetData";
import usePostData from "@/src/hooks/usePostData";
import { userInfoObj, userObj } from "@/src/types/Auth.types";
import { getAllUsers } from "@/src/utils/fetchs";
import { convertToJalali } from "@/src/utils/utils";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import swal from "sweetalert";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import Link from "next/link";
import Loader, { ButtonLoader } from "@/src/components/modules/loader/Loader";
import { userColumns } from "@/src/utils/dataTableColumns";
import UserBanModal from "@/src/components/templates/adminPanel/users/UserBanModal";
import { userResTypes } from "@/src/types/AdminPanel.types";

const page = () => {
  const { data: users, isPending: getUsersPending } = useGetData<userResTypes>(
    ["users"],
    getAllUsers,
  );
  const [userInfoRoleChange, setUserInfoRoleChange] = useState<any>([]);
  const [data, setData] = useState<userInfoObj[]>([]);
  const [pending, setPending] = useState(true);

  const { mutate: mutation, isPending } = usePostData<any>(
    `/user/changeRole/${userInfoRoleChange[0]}/${userInfoRoleChange[1]}`,
    "تغییر سطح کاربر با موفقیت انجام شد",
    false,
    null,
    false,
    "users",
  );

  const changeRole = (role: any, phone: string) => {
    swal({
      title: `آیا از تغییر سطح این کاربر به ${role === "user" ? "ادمین" : "کاربر عادی"} اطمینان دارین؟`,
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then((result) => {
      if (result) {
        setUserInfoRoleChange([
          role === "admin" ? "demotion" : "promotion",
          phone,
        ]);
        mutation(null);
      }
    });
  };

  useEffect(() => {
    const tableData: unknown = users?.users.map((user: userInfoObj) => ({
      userData: user.firstName + " " + user.lastName,
      phone: user.phone,
      rooms: (
        <div className="flex items-center gap-2">
          <p> {user.villa.number}</p>
          {user.villa.number !== 0 &&
            (user.villa.number === 1 ? (
              <Button size={"sm"} variant={"main"}>
                <Link href={`/room/${user.villa.id[0]}`}>مشاهده</Link>
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size={"sm"} variant={"main"}>
                    مشاهده
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full max-w-full text-center sm:!max-w-[425px]">
                  {user.villa.id.map((book: string, index: number) => (
                    <Link href={`/room/${book}`}>
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
          <p> {user.booked.number}</p>
          {user.booked.number !== 0 &&
            (user.booked.number === 1 ? (
              <Button size={"sm"} variant={"main"}>
                <Link href={`/room/${user.booked.id[0]}`}>مشاهده</Link>
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size={"sm"} variant={"main"}>
                    مشاهده
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full max-w-full text-center sm:!max-w-[425px]">
                  {user.booked.id.map((book: string, index: number) => (
                    <Link href={`/room/${book}`}>رزرو شماره {index + 1}</Link>
                  ))}
                </DialogContent>
              </Dialog>
            ))}
        </div>
      ),
      role: user.role === "user" ? "کاربر عادی" : "ادمین",
      changeRole: (
        <Button
          onClick={() => changeRole(user.role, user.phone)}
          variant={"blue"}
          className="h-8"
        >
          {isPending ? <ButtonLoader /> : "تغییر"}{" "}
        </Button>
      ),
      ban: <UserBanModal userPhone={user.phone} />,
    }));
    setData(tableData as userInfoObj[]);
  }, [users]);

  useEffect(() => {
    if (data) {
      setPending(false);
    }
  }, [data]);
  return (
    <Layout>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="before: relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            کاربران
          </p>
        </div>
      </div>
      <DataTable
        columns={userColumns as any}
        data={data}
        progressPending={pending}
        progressComponent={".... "}
        pagination
      />
      {getUsersPending && <Loader />}
    </Layout>
  );
};

export default page;
