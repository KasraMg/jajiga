import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CommentResTypes } from "@/src/types/adminPanel.types";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import Cookies from "js-cookie";

const getComments = async (): Promise<CommentResTypes> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/getAll`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("خطا در دریافت نظرات");
  }

  return res.json();
};

export const useComments = () => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
  });
};

interface ChangeCommentStatusPayload {
  action: "accept" | "reject";
  commentId: string;
}

const changeCommentStatus = async ({
  action,
  commentId,
}: ChangeCommentStatusPayload) => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comment/${action}/${commentId}`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error("خطا در تغییر وضعیت نظر");
  }

  return res.json();
};

export const useChangeCommentStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changeCommentStatus,

    onSuccess: (_, variables) => {
      toast({
        variant: "success",
        title: `نظر با موفقیت ${
          variables.action === "accept" ? "تایید" : "رد"
        } شد`,
      });

      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },

    onError: () => {
      toast({
        variant: "danger",
        title: "خطایی رخ داد",
      });
    },
  });
};

const deleteComment = async (commentId: string) => {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comment/delete/${commentId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return res.json();
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,

    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast({
          variant: "success",
          title: "نظر با موفقیت حذف شد",
        });

        queryClient.invalidateQueries({
          queryKey: ["comments"],
        });
      }
    },

    onError: () => {
      toast({
        variant: "danger",
        title: "خطایی غیر منتظره رخ داد",
      });
    },
  });
};
 
