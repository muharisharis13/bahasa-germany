import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "BUKU AJAR PEMBELAJARAN TATA BAHASA JERMAN",
  description: "BUKU AJAR PEMBELAJARAN TATA BAHASA JERMAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
