import "./globals.css";
import QueryWrapper from "../providers/query-wrapper";
import localFont from "next/font/local";
import Hydrated from "../providers/hydrated";
import { getUser } from "../utils/server-fetchs";
import Auth from "../components/modules/auth";
import { Toaster } from "@/src/components/shadcn/ui/toaster";
import ContextMenu from "../providers/context-menu";
import InternetStatus from "../components/modules/internet-status";
import { Metadata, Viewport } from "next";

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

export const metadata: Metadata = {
  icons: "/images/logo.png",
  title: "جاجیگا",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.variable}`}>
        <QueryWrapper>
          <Hydrated queryKey={["auth"]} queryFn={getUser}>
            <Auth /> 
          </Hydrated>
          <InternetStatus />
          {/* <ContextMenu>{children}</ContextMenu> */}
          {children}
          <Toaster />
        </QueryWrapper>
      </body>
    </html>
  );
}
