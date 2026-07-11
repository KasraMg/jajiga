import { useMutation } from "@tanstack/react-query";

type LoginOtpRequest = {
  phone: string;
  code: string;
};

type RegisterOtpRequest = {
  code: string;
  [key: string]: any;
};

export const useLoginOtpMutation = () => {
  return useMutation({
    mutationFn: async ({ phone, code }: LoginOtpRequest) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/loginByCode/${phone}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ code }),
        },
      ).then((res) => res.json());
    },
  });
};

export const useRegisterOtpMutation = () => {
  return useMutation({
    mutationFn: async (body: RegisterOtpRequest) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/confirmCode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      }).then((res) => res.json());
    },
  });
};