import CustomFeed from '@/components/homepage/CustomFeed'
import GeneralFeed from '@/components/homepage/GeneralFeed'
import { buttonVariants } from '@/components/ui/Button'
import { getAuthSession } from '@/lib/auth'
import { Home as HomeIcon } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Feed() {
  const session = await getAuthSession()

  return (
    <>
    <div className="p-4 max-w-7xl mx-auto w-full h-full">
        <h1 className='h1 font-bold text-3xl md:text-4xl'> Your feed</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6'>
      
          {session ? <CustomFeed /> : <GeneralFeed />}

          <div className='overflow-hidden bg_primary order-first md:order-last'>
              <div className='bg-green-400 px-6 py-2'>
                <p className='font-semibold py-3 flex items-center gap-1.5'>
                  <HomeIcon className='h-4 w-4' />
                  Home
                </p>
              </div>
              <div className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
                <div className='flex justify-between gap-x-4 py-3'>
                  <p className='text-zinc-500'>
                    📚 Stay Informed: Keep up with the latest trends, news, and updates from your chosen interests.
                  </p>
                </div>

                <Link
                  className={buttonVariants({
                    className: 'w-full mt-4 mb-6',
                  })}
                  href={`/r/create`}>
                  Create Community
                </Link>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}
