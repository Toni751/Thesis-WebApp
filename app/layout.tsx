import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thesis - Web App",
  description: "Web App to showcase the compiler for the thesis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground h-screen max-h-screen">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <main className="max-h-screen flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
