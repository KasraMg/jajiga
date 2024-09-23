"use client";
import Layout from "@/src/components/layouts/adminLayout/page";
import { Button } from "@/src/components/shadcn/ui/button";
import useGetData from "@/src/hooks/useGetData";
import usePostData from "@/src/hooks/usePostData";
import { getAllComments } from "@/src/utils/fetchs";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import swal from "sweetalert";

const columns = [
  {
    name: "نویسنده",
    selector: (row) => row.userData,
    sortable: true,
  },
  {
    name: "پیش نمایش",
    selector: (row) => row.preview,
    sortable: true,
  },
  {
    name: "اقامتگاه",
    selector: (row) => row.room,
    sortable: true,
  },
  {
    name: "زمان ثبت",
    selector: (row) => row.register,
    sortable: true,
  },
  {
    name: "وضعیت",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "حذف",
    selector: (row) => row.delete,
    sortable: true,
  },
];

const showBodyHandler = (body: string) => {
  swal({
    title: body,
    buttons: ["تایید", false],
  });
};

const page = () => {
  const {
    data: comments,
  } = useGetData(["comments"], getAllComments);
  let data = [];
  console.log(comments);
  const [commentStatusChange, setCommentStatusChange] = useState<
    [] | [string, string]
  >([]);
  const { mutate: mutation, isPending } = usePostData<any>(
    `/comment/${commentStatusChange[0] === "accept" ? "accept" : "reject"}/${commentStatusChange[1]}`,
    `کامنت با موفقیت ${commentStatusChange[0] === "accept" ? "تایید" : "رد"} شد`,
    true,
    null,
  );

  useEffect(() => {
    comments?.comment.map((comment) =>
      data.push({
        userData: `${comment.creator.firstName} مشگل کشا`,
        preview: (
          <Button
            onClick={() => showBodyHandler(comment.body)}
            variant={"blue"}
          >
            مشاهده
          </Button>
        ),
        room: <Link href={`/room/${comment._id}`}>مشاهده</Link>,
        register: comment.date,
        status:
          comment.isAccept === 1 ? (
            "تایید شده"
          ) : (
            <div className="flex gap-1">
              <Button
                onClick={() => {
                  setCommentStatusChange(["accept", comment._id]);
                  mutation(null);
                }}
                className="w-12 justify-center"
                variant={"blue"}
              >
                تایید
              </Button>
              <Button
                onClick={() => {
                  setCommentStatusChange(["reject", comment._id]);
                  mutation(null);
                }}
                className="w-12 justify-center"
                variant={"danger"}
              >
                رد
              </Button>
            </div>
          ),
        delete: <Button variant={"danger"}>حذف</Button>,
      }),
    );
  }, [comments]);

  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (comments) {
      setRows(data);
      setPending(false);
    }
  }, [comments]);
  return (
    <Layout>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="before: relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            نظرات
          </p>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={rows}
        progressPending={pending}
        progressComponent={".... "}
        pagination
      />
    </Layout>
  );
};

export default page;
