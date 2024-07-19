import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import { Metadata } from "next"
import { RootLayoutProps } from "@/utils/types"
import { NavigationBar } from "./_components/Nav"
import Footer from "./_components/Footer"
import { cn } from "@/lib/utils"
import HeaderLogo from "./_components/HeaderLogo"
import { SpeedInsights } from "@vercel/speed-insights/next"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sanxs",
})

export const metadata: Metadata = {
  title: "温州肯恩大学科技科研协会",
  description: "温州肯恩大学科技科研协会官方网站",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head />
      <body
        className={cn(
          "flex flex-col min-w-96 min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SpeedInsights/>
        <header >
          <HeaderLogo/>
          <NavigationBar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}