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
      <DropdownMenuContent className='w-[280px] h-[490px] bg-white' align='end'>
        <div className='flex items-center justify-start gap-2 p-1'>
          <div className='flex flex-col space-y-1 leading-none'>

          <div className='flex gap-1 p-2'>
            <UserAvatar
              user={{ name: user.name || null, image: user.image || null }}
              className='h-9 w-9'
            />

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
        <DropdownMenuItem className="py-2 p-3" asChild>
          <Link href='/'>
      
          Create Post
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </Link>         
        </DropdownMenuItem>

        <DropdownMenuItem className="py-2 p-3" asChild>
          <Link href='/r/create'>Create Community
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        

        <DropdownMenuItem className="py-2 p-3" asChild>
          <Link href='/settings'>Change Username
          <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-2 p-3" asChild>
          <Link href='/forms'>Profile Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem> 

        <DropdownMenuItem className="py-2 p-3" asChild>
          <Link href='/Premium'>Premium
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem> 
        <DropdownMenuItem className="py-2 p-3" asChild>
          <Link href='/FAQ'>FAQ
          <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem> 
        <DropdownMenuItem className="py-2 p-3" asChild>
          <Link href='/FAQ'>Pricing
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem> 

        <DropdownMenuItem className="py-2 p-3" asChild>
          <Link href='/Help'>Help Center
          <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem> 


        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='cursor-pointer py-2 p-3'
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            })
          }}>
          Sign out
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
