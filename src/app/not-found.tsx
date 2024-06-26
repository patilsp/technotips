import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center mt-4">
       
      <h1 className="mx-auto text-slate-900 text-bold text-3xl text-center">Page Not Found :(</h1>     
      <p className="mx-auto my-4 max-w-3xl text-center text-lg text-slate-700 dark:text-slate-400"> Oops! 😖 The requested URL was not found on this server. </p>


       <div className='flex w-full justify-center'>
          <Image
            src='/images/404.svg'
            width={400}
            height={460}
            alt='error loading'
            className='object-contain'
          />
        </div>
        <div className='w-100 mt-4 flex justify-center'>
          <Link href="/" className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" >Return Home</Link>
        </div>
    </div>
  )
}