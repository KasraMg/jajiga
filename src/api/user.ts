"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { toast } from "@/src/components/shadcn/ui/use-toast";

const editProfile = async (formData: FormData) => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/edit`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
    body: formData,
  });

  return res.json();
};

export const useEditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProfile,

    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast({
          variant: "success",
          title: "آواتار با موفقیت بروزرسانی شد",
        });

        queryClient.invalidateQueries({
          queryKey: ["auth"],
        });
      }
    },

    onError: () => {
      toast({
        variant: "danger",
        title: "خطایی غیر منتظره رخ داد (اگه VPN روشن هست لطفا خاموش کنید)",
      });
    },
  });
};

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

const changePassword = async (data: ChangePasswordData) => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/changePassword`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  return res.json();
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,

    onSuccess: (data) => {
      switch (data.statusCode) {
        case 200:
          toast({
            variant: "success",
            title: "رمز عبور با موفقیت بروزرسانی شد",
          });
          break;
        case 401:
          toast({
            variant: "danger",
            title: "رمز عبور فعلی شما اشتباه است",
          });
          break;
        case 402:
          toast({
            variant: "danger",
            title: "این رمز قبلاً ست شده و باید یک رمز جدید وارد کنید",
          });
          break;
        default:
          toast({
            variant: "danger",
            title: "خطایی رخ داد",
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

const twoStepRequest = async ({
  url,
  method,
  body,
}: {
  url: string;
  method: "POST" | "PUT";
  body: object;
}) => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  });

  return res.json();
};

interface UseTwoStepMutationProps {
  successMessage?: string;
  invalidateQuery?: string[];
  onSuccess?: (data: any) => void;
}

export const useTwoStepMutation = ({
  successMessage,
  invalidateQuery,
  onSuccess,
}: UseTwoStepMutationProps = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: twoStepRequest,

    onSuccess: (data) => {
      onSuccess?.(data);

      if (data.statusCode === 200) {
        if (successMessage) {
          toast({
            variant: "success",
            title: successMessage,
          });
        }

        invalidateQuery?.forEach((key) => {
          queryClient.invalidateQueries({
            queryKey: [key],
          });
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
