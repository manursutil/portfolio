import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import NavBar from "./components/nav-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manuel Rodríguez Sutil",
  description: "Portfolio of Manuel Rodríguez Sutil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Imagen.png" />
      </head>
      <body className="bg-gradient-to-br from-blue-200 via-white to-pink-100 dark:from-black dark:via-gray-900 dark:to-gray-900 min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="max-w-5xl mx-auto px-4 py-5 font-mono">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
