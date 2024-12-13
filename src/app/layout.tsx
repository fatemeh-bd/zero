import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Image from "next/image";
import Script from "next/script";
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

        {/* Tawk.to Script */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/675bf4a3af5bfec1dbdb4c5e/1ievj78gk';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        ></Script>


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
