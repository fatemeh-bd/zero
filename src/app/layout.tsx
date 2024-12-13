import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const font = localFont({
  src: [
    {
      path: "./fonts/DANA/woff/Dana-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DANA/woff/Dana-Bold.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/DANA/woff/Dana-ExtraBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-dana",
  display: "swap",
});

export const metadata: Metadata = {
  title: "فیلتر هوشمند محتوای دیجیتال",
  description:
    "تشخیص هوشمند و خودکار محتوای غیراخلاقی و نامتعارف، با بهره‌گیری از پیشرفته‌ترین فناوری‌های هوش مصنوعی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${font.variable} ${font.variable} text-lg antialiased bg-black w-full text-white bg-[url('/images/background.webp')] bg-no-repeat bg-cover`}
      >
        <ToastContainer />
        <div className="max-w-screen-2xl h-screen mx-auto md:py-6 py-4 md:px-12 px-4 flex flex-col gap-8 justify-between items-center w-full">
          <Header />
          <main className="py-8">{children}</main>
          <Image
            src="/images/ZEROAI.svg"
            alt="zero icon"
            width={175}
            height={33}
            className="w-[175px]"
          />
        </div>
      </body>
    </html>
  );
}
