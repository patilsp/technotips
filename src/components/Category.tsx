'use client'

import { Prisma, Subreddit } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/Command'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'
import { Users } from 'lucide-react'

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  const [input, setInput] = useState<string>('')
  const pathname = usePathname()
  const commandRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useOnClickOutside(commandRef, () => {
    setInput('')
  })

  const {    
    data: queryResults,
    isFetched,
  } = useQuery({
    queryFn: async () => {
      
      const { data } = await axios.get(`/api/category`)
      return data
    }
  })

  useEffect(() => {
    setInput('')
  }, [pathname])

  return (

    <div>
        <Command
        ref={commandRef}
        className='relative rounded-lg border max-w-sm z-50 overflow-visible'>
            <CommandList className='absolute bg-white top-full inset-x-0 shadow rounded-md '>
            {isFetched && <CommandEmpty>No results found.</CommandEmpty>}
            {(queryResults?.length ?? 0) > 0 ? (
                <CommandGroup>
                {queryResults?.map((subreddit) => (
                    <CommandItem
                    onSelect={(e) => {
                        router.push(`/r/${e}`)
                        router.refresh()
                    }}
                    key={subreddit.id}
                    value={subreddit.name}>
                    <Users className='mr-2 h-5 w-5' />
                    <div className="flex justify-between w-full items-center">
                    <a className="p-1" href={`/r/${subreddit.name}`}>{subreddit.name}</a>

                    <p className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-primary text-zinc-100 hover:bg-primary h-10 cursor-pointer px-3">Subscribe</p>
                    </div>
                    </CommandItem>
                ))}
                </CommandGroup>
            ) : null}
            </CommandList>
    
        </Command>
    </div>
  )
}

export default Category
