"use client";
import Layout from "@/src/components/layouts/adminLayout/page";
import Loader, { ButtonLoader } from "@/src/components/modules/loader/Loader";
import { Button } from "@/src/components/shadcn/ui/button";
import useDeleteData from "@/src/hooks/useDeleteData";
import useGetData from "@/src/hooks/useGetData";
import usePostData from "@/src/hooks/usePostData";
import { commentResTypes } from "@/src/types/AdminPanel.types";
import { comment } from "@/src/types/Villa.types";
import { commentColumns } from "@/src/utils/dataTableColumns";
import { getAllComments } from "@/src/utils/fetchs";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import swal from "sweetalert";

const showBodyHandler = (body: string) => {
  swal({
    title: body,
    buttons: ["تایید", false],
  });
};

const page = () => {
  const [commentId, setCommentId] = useState("");
  const [data, setData] = useState<comment[]>([]);
  const [pending, setPending] = useState(true);  

  const { data: comments, isPending: getCommentsPending } = useGetData<commentResTypes>(
    ["comments"],
    getAllComments,
  ); 
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
    const tableData:unknown = comments?.comment.map((comment:comment) => ({
      userData: `${comment.creator.firstName} مشگل کشا`,
      preview: (
        <Button onClick={() => showBodyHandler(comment.body)} variant={"blue"}>
          مشاهده
        </Button>
      ),
      room: <Link href={`/room/${comment._id}`}>مشاهده</Link>,
      register: comment.date,
      status:
        comment.isAccept === "true" ? (
          "تایید شده"
        ) : comment.isAccept === "rejected" ? (
          <p>رد شده</p>
        ) : (
          <div className="flex gap-1">
            <Button
              onClick={() => {
                setCommentStatusChange(["accept", comment._id]);
                mutation(null);
              }}
              className="h-8 w-12 justify-center"
              variant={"blue"}
            >
              {commentStatusChange[0] === "accept" && isPending ? (
                <ButtonLoader />
              ) : (
                "تایید"
              )}
            </Button>
            <Button
              onClick={() => {
                setCommentStatusChange(["reject", comment._id]);
                mutation(null);
              }}
              className="h-8 w-12 justify-center"
              variant={"danger"}
            >
              {commentStatusChange[0] === "reject" && isPending ? (
                <ButtonLoader />
              ) : (
                "رد"
              )}
            </Button>
          </div>
        ),
      delete: (
        <Button
          onClick={() => deleteCommentHandler(comment._id)}
          variant={"danger"}
        >
          حذف
        </Button>
      ),
    }));
    setData(tableData as comment[])
    console.log(tableData);
    console.log(comments);
  }, [comments]);


  useEffect(() => {
    if (data) { 
      setPending(false);
    }
  }, [data]);

  const { mutate: deleteHandlerMutation, isPending: deleteHandlerPending } =
    useDeleteData(
      `/comment/delete/${commentId}`,
      "نظر با موفقیت حذف شد",
      "comments",
    );

  const deleteCommentHandler = (commentId: string) => {
    swal({
      title: "آیا از حذف نظر مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        setCommentId(commentId);
        deleteHandlerMutation();
      }
    });
  };
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
        columns={commentColumns as any}
        data={data}
        progressPending={pending}
        progressComponent={".... "}
        pagination
      />
      {getCommentsPending && <Loader />}
      {deleteHandlerPending && <Loader />}
    </Layout>
  );
};

export default page;
