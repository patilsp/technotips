import React from 'react'
import { Newspaper, Command, Users, LogIn } from 'lucide-react'

const sidebar = () => {
  return (
    <div>
        <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-14" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group">
                        <Newspaper />
                        <span className="ml-3">My Feeds</span>
                        </a>
                    </li>
                
                    <li>
                        <a href="/all-communities" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Users />
                        <span className="flex-1 ml-3 whitespace-nowrap">Communities</span>
                        </a>
                    </li>
                    <li>
                        <a href="/all-communities" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Command />
                        <span className="flex-1 ml-3 whitespace-nowrap">Popular</span>
                        </a>
                    </li>
                    <li>
                        <a href="/all-communities" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Command />
                        <span className="flex-1 ml-3 whitespace-nowrap">Most upvoted</span>
                        </a>
                    </li>
                    <li>
                        <a href="/all-communities" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Command />
                        <span className="flex-1 ml-3 whitespace-nowrap">Best discussions</span>
                        </a>
                    </li>
                    <li>
                        <a href="/all-communities" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Command />
                        <span className="flex-1 ml-3 whitespace-nowrap">Bookmarks</span>
                        </a>
                    </li>
                    <li>
                        <a href="/all-communities" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Command />
                        <span className="flex-1 ml-3 whitespace-nowrap">Reading History</span>
                        </a>
                    </li>
                    <li>
                        <a href="/sign-in" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <LogIn />
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            </aside>
      
    </div>
  )
}

export default sidebar
