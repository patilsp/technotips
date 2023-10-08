"use client";

import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { motion } from "framer-motion"
import { FiBell } from 'react-icons/fi'
import  Nav  from "@/components/Nav"
import Lottie from "lottie-react"
import animationData from "app/assets/logo.json"
import { Button } from "@/components/ui/button"
import { BellIcon, EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"


export function SiteHeader() {
  
   return (


    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="px-2 flex h-14 items-center">      
        <MobileNav />
        <Link href='/' className='flex-center flex gap-2'>
            <Image
            src='/images/logo.png'
            width={30}
            height={30}
            alt='logo'
            className='object-contain mr-1'
          />
          <p className='logo_text animate mr-2 text-center font-extrabold  tracking-tight text-gray-900 dark:text-white'>TechnoTips</p>
      </Link>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <CommandMenu />
        </div>
        <nav className="flex items-center">

        <div className="w-full flex-1 md:w-auto md:flex-none">           

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button variant="ghost" className="w-9 h-9 px-2 rounded-md border-input bg-transparent shadow-sm hover:bg-accent">                
                  <FiBell size={20}  />
                </button>
              </DropdownMenuTrigger>      
                <DropdownMenuContent className="w-100 p-4" align="end" forceMount>
                <Card className="border-none">
                  <CardHeader className="pb-3">
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      Choose what you want to be notified about.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-1">
                    <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                      <BellIcon className="mt-px h-5 w-5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium ">Everything</p>
                        <p className="text-sm text-muted-foreground">
                          Email digest, mentions & all activity.
                        </p>
                      </div>
                    </div>
                    <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                      <PersonIcon className="mt-px h-5 w-5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium ">Available</p>
                        <p className="text-sm text-muted-foreground">
                          Only mentions and comments.
                        </p>
                      </div>
                    </div>
                    <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                      <EyeNoneIcon className="mt-px h-5 w-5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium ">Ignoring</p>
                        <p className="text-sm text-muted-foreground">
                          Turn off all notifications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
            </Card>
          </DropdownMenuContent>
        </DropdownMenu>
      
            
          </div>
         
          <ModeToggle />
          <Nav /> 
        </nav>
      </div>
    </div>
  </header>


 
  )
}
