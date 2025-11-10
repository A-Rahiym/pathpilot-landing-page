import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Import Montserrat (Google)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

// Import MontserratSubrayada (Local)
const montserratSubrayada = localFont({
  src: [
    {
      path: "../public/fonts/MontserratSubrayada-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MontserratSubrayada-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PathPilot - Navigate Life with Confidence",
  description:
    "Empowering navigation for the visually impaired with AI-powered intelligence",
  generator: " ",
  icons: {
    icon: [
      {
        url: "/Logo.png",
        type: "png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratSubrayada.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
