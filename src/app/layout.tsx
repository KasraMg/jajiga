import "./globals.css";
import QueryWrapper from "../utils/QueryWrapper";
import localFont from "next/font/local"; 
import Auth from "../utils/auth"; 
import { baseUrl } from "../utils/utils";
import Hydrated from "../providers/Hydrated";
import { cookies } from "next/headers"; 
const fonts = localFont({
  src: [
    {
      path: "../../public/fonts/vazir/Vazir-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken");
  async function fetchUsers() {
    const res = await fetch(`${baseUrl}/getMe`, {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    });
    return res.json();
  }

  return (
    <html lang="en">
      <body className={`${fonts.variable}`}>
        <QueryWrapper>
          <Hydrated queryKey={["auth"]} queryFn={fetchUsers}>
            <Auth />
          </Hydrated>
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}

{
  /* <Head>
<title>Parallax Effect with React</title>
<link rel="icon" href="/favicon.ico" />
</Head> 

<Suspense
          fallback={
            <div className="center bg-white w-screen h-screen fixed top-0 left-0 z-50">
              <Image
                className="animate-pulse"
                src="/images/logo.svg"
                height={20.63}
                width={100}
                alt="لوگوی جاب ویژن"
              />
            </div>
          }
        >
*/
}
