import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
   subsets: ["latin"],
   weight: ["200", "300", "400", "500", "600"],
   style: "normal"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className="flex flex-col min-h-screen w-full bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
