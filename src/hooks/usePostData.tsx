// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { baseUrl } from "../utils/utils";

// interface PostDataProps {
//   course: any;
//   url: string;
// }

// export const usePostData = ({ course, url }: PostDataProps) => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     async () => {
//       const response = await fetch(`${baseUrl}${url}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(course),
//       });
 
//       return response.json();
//     },
//     {
//       onSuccess: (data: any) => {
//         console.log("Data posted successfully:", data);
//         // هر نوع عملیات اضافی که بعد از موفقیت لازم است، مانند به‌روز رسانی کش
//         // queryClient.invalidateQueries("some-query-key"); در صورت نیاز به بروز رسانی کوئری‌ها
//       },
//       onError: (error: Error) => {
//         console.error("Error posting data:", error);
//       },
//     },
//   );

//   return mutation;
// };
