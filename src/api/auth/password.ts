import { useMutation } from "@tanstack/react-query";

type LoginByPasswordRequest = {
  phone: string;
  password: string;
};

export const useLoginByPasswordMutation = () => {
  return useMutation({
    mutationFn: async ({ phone, password }: LoginByPasswordRequest) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/loginByPassword/${phone}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ password }),
        },
      ).then((res) => res.json());
    },
  });
};

export const useResendCodeMutation = () => {
  return useMutation({
    mutationFn: async (phone: string) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/resendCode/${phone}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({}),
      }).then((res) => res.json());
    },
  });
};
