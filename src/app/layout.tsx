import "./globals.css";
import QueryWrapper from "../providers/query-wrapper";
import Hydrated from "../providers/hydrated";
import { getUser } from "../utils/server-fetchs";
import Auth from "../components/modules/auth";
import { Toaster } from "@/src/components/shadcn/ui/toaster";
// import InternetStatus from "../components/modules/internet-status";
import { Metadata, Viewport } from "next";
import { fonts } from "../utils/fonts";

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
      <body className={fonts.className}>
        <QueryWrapper>
          <Hydrated queryKey={["auth"]} queryFn={getUser}>
            <Auth />
            {children}
          </Hydrated>
          {/* <ContextMenu>{children}</ContextMenu> */}
          <Toaster />
        </QueryWrapper>
      </body>
    </html>
  );
}
