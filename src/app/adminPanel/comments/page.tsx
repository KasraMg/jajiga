"use client";
import Layout from "@/src/components/layouts/adminLayout/page";
import Loader, { ButtonLoader } from "@/src/components/modules/loader/Loader";
import useGetData from "@/src/hooks/useGetData";
import usePostData from "@/src/hooks/usePostData";
import { getAllComments } from "@/src/utils/fetchs";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import swal from "sweetalert";

const columns = [
  {
    name: "نویسنده",
    selector: (row: { userData: string }) => row.userData,
    sortable: true,
  },
  {
    name: "پیش نمایش",
    selector: (row: { preview: string }) => row.preview,
    sortable: true,
  },
  {
    name: "اقامتگاه",
    selector: (row: { room: string }) => row.room,
    sortable: true,
  },
  {
    name: "زمان ثبت",
    selector: (row: { register: string }) => row.register,
    sortable: true,
  },
  {
    name: "وضعیت",
    selector: (row: { status: string }) => row.status,
    sortable: true,
  },
  {
    name: "حذف",
    selector: (row: { delete: string }) => row.delete,
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
  const { data: comments, isPending: getCommentsPending } = useGetData(
    ["comments"],
    getAllComments,
  );
  let data = [];
  console.log(comments);
  const [commentStatusChange, setCommentStatusChange] = useState<
    [] | [string, string]
  >([]);
  const { mutate: mutation, isPending } = usePostData<any>(
    `/comment/${commentStatusChange[0]}/${commentStatusChange[1]}`,
    `کامنت با موفقیت ${commentStatusChange[0] === "accept" ? "تایید" : "رد"} شد`,
    true,
    null,
    true,
    "comments",
  );

  useEffect(() => {
    // const tableData = comments?.comment.map((comment) => ({
    //   userData: `${comment.creator.firstName} مشگل کشا`,
    //   preview: (
    //     <Button onClick={() => showBodyHandler(comment.body)} variant={"blue"}>
    //       مشاهده
    //     </Button>
    //   ),
    //   room: <Link href={`/room/${comment._id}`}>مشاهده</Link>,
    //   register: comment.date,
    //   status:
    //     comment.isAccept === "true" ? (
    //       "تایید شده"
    //     ) : comment.isAccept === "rejected" ? (
    //       <p>رد شده</p>
    //     ) : (
    //       <div className="flex gap-1">
    //         <Button
    //           onClick={() => {
    //             setCommentStatusChange(["accept", comment._id]);
    //             mutation(null);
    //           }}
    //           className="h-8 w-12 justify-center"
    //           variant={"blue"}
    //         >
    //           {commentStatusChange[0] === "accept" && isPending ? (
    //             <ButtonLoader />
    //           ) : (
    //             "تایید"
    //           )}
    //         </Button>
    //         <Button
    //           onClick={() => {
    //             setCommentStatusChange(["reject", comment._id]);
    //             mutation(null);
    //           }}
    //           className="h-8 w-12 justify-center"
    //           variant={"danger"}
    //         >
    //           {commentStatusChange[0] === "reject" && isPending ? (
    //             <ButtonLoader />
    //           ) : (
    //             "رد"
    //           )}
    //         </Button>
    //       </div>
    //     ),
    //   delete: <Button variant={"danger"}>حذف</Button>,
    // }));
    // data = tableData;
    // console.log(tableData);
    console.log(comments);
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
        columns={columns as any}
        data={rows}
        progressPending={pending}
        progressComponent={".... "}
        pagination
      />
      {getCommentsPending && <Loader />}
    </Layout>
  );
};

export default page;
