import CustomFeed from '@/components/homepage/CustomFeed'
import GeneralFeed from '@/components/homepage/GeneralFeed'
import { buttonVariants } from '@/components/ui/Button'
import { getAuthSession } from '@/lib/auth'
import { Home as HomeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { EyeNoneIcon } from "@radix-ui/react-icons"

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Home() {
  const session = await getAuthSession()

  return (
    <>
      <h1 className='h1 font-bold text-3xl md:text-4xl'> Your feed</h1>
      {/* <div className='hero'>
        <div className='text-bg-image'>
          <h2>Your Feeds</h2>
        </div>
      </div> */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6'>
        {session ? <CustomFeed /> : <GeneralFeed />}

        <div className="flex flex-col gap-5">
          <div className='overflow-hidden h-fit rounded-lg border border-gray-300 order-first md:order-last'>
            <div className='bg-green-300 px-6 py-2'>
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
          <div className='hidden md:block overflow-hidden h-fit rounded-lg border border-gray-300 order-second md:order-last'>
            <div className='bg-gray-200 px-6 py-2'>
              <h1 className=' text-xl  font-semibold py-3 flex items-center gap-1.5'>                
                Advertise on TechnoTips
              </h1>
            </div>
            <div className='-my-3 divide-gray-100 px-6 py-4 text-sm leading-6'>
              <div className='flex justify-between gap-x-4 py-3'>
                <p className='text-zinc-500'>
                  Unlock Your Brands Potential with TechnoTips Advertising! Reach a Diverse and Engaged Audience, Drive Traffic, and Boost Your Brands Visibility. Advertise Today!
                </p>
              </div>
              <div className="flex justify-between gap-2">
              <Link
                className={buttonVariants({
                  className: 'bg bg-orange-400 w-50 mt-5 mb-4',
                })}
                href='#'
                >
                Connect
              </Link>

              <Image 
                src="/images/chat.png"
                alt="chat"
                width={220}
                height={220}
                className="object-contain -my-10"

                />

            
              </div>
            </div>
          </div>
          <div className=' hidden md:block overflow-hidden h-fit rounded-lg border border-gray-300 order-first md:order-last'>
           
            <div className='-my-3 divide-gray-100 px-6 py-4 text-sm leading-6'>
              <div className='flex justify-center py-2'>
                <Image 
                  src="/images/statistics.png"
                  alt="statistics"
                  width={320}
                  height={320}
                  className="object-contain my-2"

                  />

              </div>
                <h3 className='text-zinc-700 text-bold text-xl text-center mt-2 mb-2'> TechnoTips Premium <span className="text-green-600 text-sm"> Try It Now </span> </h3>
              <Link
                className='btn-pro w-full mt-2 mb-4'
                href='#'>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                    </svg>
                    Unlock Pro
          
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='right absolute bottom-0 '>
        <button className='chatBtn'>
          <EyeNoneIcon size={24} />
          <span className="tooltip">Chat</span>
          </button>
        </div> */}
         
    </>
  )
}
