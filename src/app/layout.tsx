import '@/styles/globals.css'
import { Metadata } from 'next'
import { fontSans } from '@/lib/fonts'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import  SiteHeader  from '@/components/Navbar'
import { SiteFooter } from "@/components/site-footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from '@/components/ui/Toaster'
import  SessionProvider from  '@/components/Providers'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js blog",
    "medium blog",
    "reedit blog",
    "Developer blog",
    "technotips app",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: light)", color: "white" },
    
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  authModal: React.ReactNode
}

export default function RootLayout({ children, authModal }: RootLayoutProps) {
  return (
    <>
    <SessionProvider>
      <html lang="en" suppressHydrationWarning>
        
      <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              {authModal}
                <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
      </SessionProvider>
    </>
  )
}
