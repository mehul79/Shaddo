import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider"
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { ModeToggle } from "@/components/ui/theme-toggler";
import AlertBtn from "@/components/AlertBtn";
import { NavBar2 } from "@/components/Navbar2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaddo",
  description: "your all-in-one productivity app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <div className="flex flex-col  w-screen  h-screen text-foreground">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="absolute top-0 right-0 p-4 gap-4 flex z-100">
              <AlertBtn />
              <ModeToggle />
            </div>
            {children}
            <NavBar />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
