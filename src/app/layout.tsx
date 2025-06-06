import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdaptDrive",
  description: "Descrição da minha página",
  icons: {
    icon: "/public/img/logo.png",
  },
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
