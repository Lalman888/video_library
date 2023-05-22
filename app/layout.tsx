import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
// import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { ReactQueryProvider } from "@/components/ReactQueryProvider"
import { Toaster } from "@/components/ui/toaster"
import { UserContextProvider } from "@/context/user"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewport: "minimum-scale=1,initial-scale=1,width=device-width",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
    <ReactQueryProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-white font-sans antialiased",
            fontSans.variable
          )}
        >
          {/* <UserContextProvider> */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              {/* <SiteHeader /> */}
              <UserContextProvider>

              <div className="flex-1">{children}</div>
              <Toaster />
              </UserContextProvider>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
          {/* </UserContextProvider> */}
        </body>
      </html>
      </ReactQueryProvider>
    </>
  )
}
