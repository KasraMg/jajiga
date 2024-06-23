import { useQuery } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { baseUrl } from "./utils";

const authUser = async () => {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: async () => {
  //     const res = await fetch(`${baseUrl}/getMe`);
  //     if (!res.ok) {
  //       throw new Error('Network response was not ok')
  //     }
  //     const rrr=res.json()
  //     console.log(rrr)
  //     return res.json();
  //   },
  // });

  const res = await fetch(`${baseUrl}/getMe`);

  const rrr = await res.json();
  console.log(rrr);

  // return (
  //   // <div>
  //   //   {/* اینجا می‌توانید دیتا را رندر کنید */}
  //   //   <pre>{JSON.stringify(data, null, 2)}</pre>
  //   // </div>
  // );
};
export default authUser;
