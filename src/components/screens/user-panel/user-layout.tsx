import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();

  if (!cookieStore.get("AccessToken")) {
    redirect("/");
  }

  return children;
}
