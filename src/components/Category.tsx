'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactFragment, ReactPortal } from 'react'
import { Users } from 'lucide-react'
import { motion } from 'framer-motion'

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {

  const {    
    data: queryResults,
  } = useQuery({
    queryFn: async () => {
      
      const { data } = await axios.get(`/api/category`)
      return data
    }
  })

  return (
    
    
    <div className="max-w-sm rounded-lg  h-72 scroll-p-0 flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded lg:supports-scrollbars:pr-2 lg:max-h-96">
    <motion.div
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 1, delay: 1 }} 
      >

    {queryResults && queryResults.length > 0 ? (
      <ul>
        {queryResults.map((subreddit: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined }) => (
          <li
            key={subreddit.id}
            className=" flex justify-between px-2 py-1"
          >
          
            <div className="flex items-center justify-between w-full ">
                <Users className='mr-2 h-5 w-5' />
                <a className="font-semibold flex items-center justify-between w-full" href={`/r/${subreddit.name}`}>
                 
                      <p className="text-slate-900">{subreddit.name} </p>
                      <p className="btn-outline h-8 w-[100px] float-right">
                        Subscribe
                      </p>
                 
                </a>
                
            </div>
   
           
          </li>
        ))}
      </ul>
    ) : null}

    </motion.div>
  </div>
  )
}

export default Category
