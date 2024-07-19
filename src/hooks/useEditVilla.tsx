import { useMutation } from "@tanstack/react-query";
import { baseUrl, saveIntoLocalStorage } from "../utils/utils";
import Cookies from "js-cookie";
import { toast } from "../components/shadcn/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useEditVilla = <T extends object>(
  nextStep: string,
  successMsg: string,
  villaId?: string,
  formData?: boolean,
) => {
  const accessToken = Cookies.get("AccessToken");
  const router = useRouter();
  const [responseData, setResponseData] = useState<any>(null);
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (data: T) => {
      const headers: HeadersInit = {
        Authorization: `Bearer ${accessToken}`,
      };
      if (!formData) {
        headers["Content-Type"] = "application/json";
      }
      return await fetch(
        `${baseUrl}${!villaId ? "/villa/add" : `/villa/update/${villaId}`}`,
        {
          method: !villaId ? "POST" : "PUT",
          headers,
          credentials: "include",
          body: formData ? data as any: JSON.stringify(data) ,
        },
      ).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.statusCode === 200) {
        !villaId ? saveIntoLocalStorage("villaId", data.villa._id) : null;
        setResponseData(data);
        toast({
          variant: "success",
          title: successMsg,
        });
        router.replace(`${nextStep}`);
      }
    },
  });
  return { mutate, responseData, isSuccess, isPending };
};

export default useEditVilla;
