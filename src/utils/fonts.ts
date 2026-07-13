import localFont from "next/font/local";

export const fonts = localFont({
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