import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider"
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { ModeToggle } from "@/components/ui/theme-toggler";
import AlertBtn from "@/components/AlertBtn";

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
        <div className="relative flex flex-col  h-screen text-foreground">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="p-4 justify-end gap-4 flex">
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
