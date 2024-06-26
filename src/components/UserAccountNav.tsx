'use client'

import Link from 'next/link'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from '@/components/ui/DropdownMenu'
import { UserAvatar } from '@/components/UserAvatar'

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'name' | 'image' | 'email'>
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className='h-8 w-8'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[280px] h-[430px] bg-white' align='end'>
        <div className='flex items-center justify-start gap-2 p-1'>
          <div className='flex flex-col space-y-1 leading-none'>

          <div className='flex gap-1 p-2'>
            {/* <UserAvatar
              user={{ name: user.name || null, image: user.image || null }}
              className='h-9 w-9'
            /> */}

            <div className='flex flex-col gap-1'>
              {user.name && <p className='font-medium'>{user.name}</p>}
              {user.email && (
                <p className='w-[200px] truncate text-sm text-muted-foreground'>
                  {user.email}
                </p>
              )}
              </div>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-2" asChild>
          <Link href='/'>
      
          Dashboard
          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </Link>         
        </DropdownMenuItem>

        <DropdownMenuItem className="p-2" asChild>
          <Link href='/r/create'>Create Community
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        

        <DropdownMenuItem className="p-2" asChild>
          <Link href='/settings'>Change Username
          <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
       

        <DropdownMenuItem className="p-2" asChild>
          <Link href='/Help'>Command Menu
          <DropdownMenuShortcut className="flex gap-1 rounded-sm border">  Ctrl K</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem> 
       
        <DropdownMenuItem className="p-2" asChild>
          <Link href='/FAQ'>FAQ
          <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem> 
       

        <DropdownMenuItem className="p-2" asChild>
          <Link href='/'>Theme
          <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem> 
        <DropdownMenuItem className="p-2" asChild>
          <Link href='/forms'>Profile Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem> 

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='cursor-pointer p-2'
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            })
          }}>
          Sign out
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="mt-2">
          <Link href='/Pricing'  target='_blank' className="btn-primary text-center h-8 w-full">
            Upgrade to Pro
          </Link>

        </div>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
