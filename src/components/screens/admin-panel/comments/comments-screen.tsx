"use client";

import { useMemo } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { Button } from "@/src/components/shadcn/ui/button";
import Loader, { ButtonLoader } from "@/src/components/modules/loader/loader";
import Metadata from "@/src/components/modules/meta-data";
import { commentColumns } from "@/src/utils/data-table-columns";
import { Comment } from "@/src/types/villa.types";
import useCommentsScreen from "./hook";

const CommentsScreen = () => {
  const {
    comments,
    getCommentsPending,
    changeCommentStatus,
    changeStatusPending,
    deleteCommentHandler,
    deletePending,
    showBodyHandler,
  } = useCommentsScreen();

  const tableData = useMemo(() => {
    return comments.map((comment: Comment) => ({
      userData: `${comment.creator.firstName} ${comment.creator.lastName}`,

      preview: (
        <Button variant="blue" onClick={() => showBodyHandler(comment.body)}>
          مشاهده
        </Button>
      ),

      room: <Link href={`/room/${comment._id}`}>مشاهده</Link>,

      register: comment.date,

      status:
        comment.isAccept === "true" ? (
          "تایید شده"
        ) : comment.isAccept === "rejected" ? (
          "رد شده"
        ) : (
          <div className="flex gap-1">
            <Button
              variant="blue"
              className="h-8 w-12"
              onClick={() => changeCommentStatus("accept", comment._id)}
            >
              {changeStatusPending ? <ButtonLoader /> : "تایید"}
            </Button>

            <Button
              variant="danger"
              className="h-8 w-12"
              onClick={() => changeCommentStatus("reject", comment._id)}
            >
              {changeStatusPending ? <ButtonLoader /> : "رد"}
            </Button>
          </div>
        ),

      delete: (
        <Button
          variant="danger"
          onClick={() => deleteCommentHandler(comment._id)}
        >
          حذف
        </Button>
      ),
    }));
  }, [comments, changeStatusPending]);

  return (
    <>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            نظرات
          </p>
        </div>
      </div>

      <Metadata seoTitle="جاجیگا | نظرات" seoDescription="مدیریت نظرات" />

      <DataTable
        columns={commentColumns as any}
        data={tableData}
        progressPending={getCommentsPending}
        progressComponent="..."
        pagination
        noDataComponent="نظری یافت نشد"
      />

      {(getCommentsPending || deletePending) && <Loader />}
    </>
  );
};

export default CommentsScreen;
