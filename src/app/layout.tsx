import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khanh Vinh Nguyen | Web Developer",
  description:
    "Experienced full-stack developer with 2 years in web development, specializing in intuitive interfaces and optimizing functionality. Proficient in front-end (ReactJS, NextJS) and back-end (NodeJS, NestJS) technologies. Continuously learning new tech and best practices.",
  openGraph: {
    title: "Khanh Vinh Nguyen | Web Developer",
    description:
      "Experienced full-stack developer with 2 years in web development, specializing in intuitive interfaces and optimizing functionality. Proficient in front-end (ReactJS, NextJS) and back-end (NodeJS, NestJS) technologies. Continuously learning new tech and best practices.",
    url: "https://khanhvinhnguyen.id.vn/",
    siteName: "Khanh Vinh Nguyen | Web Developer",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/portfolio-35084.appspot.com/o/Screenshot%202024-07-24%20at%205.40.54%E2%80%AFPM.png?alt=media&token=1517995d-627d-43ab-b369-7c8b8de2a0c1",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
