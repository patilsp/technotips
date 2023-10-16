import React from 'react'
import Link from 'next/link'
import { Newspaper, Command, Users, LogIn } from 'lucide-react'

const sidebar = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-14" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <Link href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group text-sm/[14px]" >
                        <Newspaper className="w-4 h-4 " />
                        <span className="ml-3">My Feeds</span>
                    </Link>

                    <Link href="/Communities" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 group text-sm/[14px]">
                        <Users className="w-4 h-4 " />
                        <span className="ml-3">Communities</span>
                    </Link>
                
                    <Link href="/Popular" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 group text-sm/[14px]">
                        <Command className="w-4 h-4 " />
                        <span className="ml-3">Popular</span>
                    </Link>
                   <Link href="/Popular" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 group text-sm/[14px]">
                        <Command  className="w-4 h-4 " />
                        <span className="ml-3">Most upvoted</span>
                    </Link>
                    <Link href="/Popular" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 group text-sm/[14px]">
                        <Command  className="w-4 h-4 " />
                        <span className="ml-3">Best discussions</span>
                    </Link>
                    <Link href="/Popular" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 group text-sm/[14px]">
                        <Command className="w-4 h-4 " />
                        <span className="ml-3">Bookmarks</span>
                    </Link>

                    <Link href="/Popular" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 group text-sm/[14px]">
                        <Command className="w-4 h-4 " />
                        <span className="ml-3">Reading History</span>
                    </Link>
                    
                    <Link href="/Popular" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 group text-sm/[14px]">
                        <LogIn className="w-4 h-4 " />
                        <span className="ml-3">Sign In</span>
                    </Link>
                  
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default sidebar
