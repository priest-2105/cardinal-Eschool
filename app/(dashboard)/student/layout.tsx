"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import StudentDashboardHeader from "@/components/dashboard/student/header";
import StudentDashboardSideBar from "@/components/dashboard/student/sidebar";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon-logo.png" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen w-[100%]  bg-gray-500 flex">
          <StudentDashboardSideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <div className={`flex-1 transition-all ease-in-out duration-300`}>
            <StudentDashboardHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <main className="pt-[104px] sm:px-4 sm:pb-8 max-sm:px-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

