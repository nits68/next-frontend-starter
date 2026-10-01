import "./globals.css";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "frontend-starter",
  description: "Next.js + Tailwind + daisyUI alapsablon a tananyag projektjeihez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={"h-full antialiased"} data-scroll-behavior="smooth" lang="hu">
      <body className="flex min-h-full flex-col">
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        {children}
      </body>
    </html>
  );
}
