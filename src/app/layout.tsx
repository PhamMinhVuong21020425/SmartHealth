import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Health",
  description: "Khám Phá Thiết Bị Y Tế Thông Minh Đa Chức Năng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <main className="font-poppins">{children}</main>
      </body>
    </html>
  );
}
