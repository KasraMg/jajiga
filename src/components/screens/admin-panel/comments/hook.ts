"use client";

import {
  useChangeCommentStatus,
  useComments,
  useDeleteComment,
} from "@/src/api/admin-panel/comment";
import swal from "sweetalert";

const useCommentsScreen = () => {
  const { data, isPending: getCommentsPending } = useComments();

  const { mutate: changeStatusMutation, isPending: changeStatusPending } =
    useChangeCommentStatus();

  const changeCommentStatus = (
    action: "accept" | "reject",
    commentId: string,
  ) => {
    swal({
      title: `آیا از ${
        action === "accept" ? "تایید" : "رد"
      } این نظر مطمئن هستید؟`,
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (!result) return;

      changeStatusMutation({
        action,
        commentId,
      });
    });
  };

  const { mutate: deleteCommentMutation, isPending: deletePending } =
    useDeleteComment();

  const deleteCommentHandler = (id: string) => {
    swal({
      title: "آیا از حذف نظر مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        deleteCommentMutation(id);
      }
    });
  };

  const showBodyHandler = (body: string) => {
  swal({
    title: body,
    buttons: ["تایید", false],
  });
};

  return {
    comments: data?.comment ?? [],
    getCommentsPending,
    changeCommentStatus,
    changeStatusPending,
    deleteCommentHandler,
    deletePending,
    showBodyHandler
  };
};

export default useCommentsScreen;
