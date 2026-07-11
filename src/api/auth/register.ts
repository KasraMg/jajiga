import { useMutation } from "@tanstack/react-query";

export type RegisterRequest = {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (body: RegisterRequest) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sendCode`, {
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