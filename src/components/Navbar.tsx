
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Image from 'next/image'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'
import { EyeNoneIcon } from "@radix-ui/react-icons"
import { Bell, Users } from 'lucide-react'
// import { ModeToggle } from '@/components/mode-toggle'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'



const Navbar = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    return (
      <div className=' sticky top-0 z-50 w-full p-1 border-b  backdrop-blur'>
        <div className='px-2 max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
          
          <Link href='/' className='flex gap-2 items-center'>
          <Image 
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
              />
            {/* <p className='hidden text-zinc-100 text-sm logo-text font-bold md:block text-shadow'>TechnoTips</p> */}
            <h1 className="hidden md:block logo-text2 text-left logo-text2">TechnoTips</h1>
          </Link>
        <SearchBar />
        <div className='flex gap-2 items-center'>
          {/* <ModeToggle />  */}
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button variant="ghost" className="p-1 rounded-md border-input bg-transparent border shadow-sm hover:bg-accent hover:text-slate-900 mr-1 ">                
                    <Bell className="bell" size={24}  />
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
                    <div className="-mx-2 flex items-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                      <Bell className="mt-px h-5 w-5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium ">Everything</p>
                        <p className="text-sm text-muted-foreground">
                          Email digest, mentions & all activity.
                        </p>
                      </div>
                    </div>
                    <div className="-mx-2 flex items-center space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                      <Users className="mt-px h-5 w-5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium ">Available</p>
                        <p className="text-sm text-muted-foreground">
                          Only mentions and comments.
                        </p>
                      </div>
                    </div>
                    <div className="-mx-2 flex items-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
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

            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <Link href='/sign-in' className="btn-primary w-[100px]">
                Sign In
              </Link>
            )}
            <div>
              {/* <button className="btn-pro hidden md:block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                      <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                  </svg>
                  Unlock Pro
              </button> */}

              </div>
          </div>
        
        </div>
      </div>
    )
  }
}

export default Navbar
