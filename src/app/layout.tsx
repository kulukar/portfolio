import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/providers/smoothScrolling";
import LoadingScreen from "@/components/loaders/loadingScreen";
import PageTransition from "@/components/providers/pageTransition";
import CustomCursor from "@/components/ui/customCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sareh Azis Panegar - Portfolio",
  description: "UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <LoadingScreen />
        <CustomCursor />
        <SmoothScrolling>
          <PageTransition>{children}</PageTransition>
        </SmoothScrolling>
      </body>
    </html>
  );
}
