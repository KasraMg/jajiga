import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";

interface SendTicketDto {
  email: string;
  name: string;
  message: string;
}

const sendTicket = async (data: SendTicketDto) => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ticket/send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  if (!res.ok) {
    throw new Error("ارسال تیکت ناموفق بود");
  }

  return res.json();
};

export const useSendTicket = () => {
  return useMutation({
    mutationFn: sendTicket,
  });
};