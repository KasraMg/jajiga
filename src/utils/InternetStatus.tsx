"use client";
import { useEffect } from "react";

interface NetworkInformation {
  effectiveType: string;
}

declare global {
  interface Navigator {
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
    connection?: NetworkInformation;
  }
}

export default function InternetStatus() {
  useEffect(() => {
    const checkConnection = () => {
      if ("connection" in navigator) {
        const connection =
          navigator.connection ||
          navigator.mozConnection ||
          navigator.webkitConnection;
        const connectionType = connection?.effectiveType;
        if (["2g", "slow-2g"].includes(connectionType as string)) {
          alert(
            "اتصال اینترنت شما ضعیف است و ممکنه صفحات به درستی بارگذاری نشوند.",
          );
        }
      } else {
        console.log("مرورگر شما از Network Information API پشتیبانی نمی‌کند.");
      }
    };

    checkConnection();
  }, []);

  return null;
}
