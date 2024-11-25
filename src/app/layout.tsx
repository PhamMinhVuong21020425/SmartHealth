import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Health",
  description:
    "A website for introduction multi-functional smart medical devices",
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
