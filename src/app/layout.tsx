import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const roboto_condensed = Roboto_Condensed({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "University Management",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          className={roboto_condensed.className}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
    </Providers>
  );
}
