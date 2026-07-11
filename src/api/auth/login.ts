import { useMutation } from "@tanstack/react-query";

type LoginRequest = {
  phone: string;
};

export const useLoginMutation  = () => {
  return useMutation({
    mutationFn: async (body: LoginRequest) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
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
