import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full min-h-screen">
          {/* GitHub Icon in Top-Right Corner - Fully Clickable */}
          <div className="fixed top-4 right-4 z-50">
            <a
              href="https://github.com/ShreedharDynamicCraft/MeloLearn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-4xl hover:text-gray-400"
            >
              <FaGithub />  
            </a>
          </div>

          {/* Navbar */}
          <div className="w-full flex items-center justify-center">
            <Navbar />
          </div>

          {/* Main Content */}
          {children}
        </div>
      </body>
    </html>
  );
}
