import { Metadata } from "next"
import { Separator } from "@/registry/new-york/ui/separator"
import { SidebarNav } from "@/app/forms/components/sidebar-nav"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/forms",
  },
  {
    title: "Account",
    href: "/forms/account",
  },
  // {
  //   title: "Appearance",
  //   href: "/forms/appearance",
  // },
  {
    title: "Notifications",
    href: "/forms/notifications",
  },
 
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>

      <div className="space-y-6 p-10 pb-16 md:block bg-slate-50">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
