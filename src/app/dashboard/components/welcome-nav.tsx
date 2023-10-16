import Image from "next/image"
import Link from "next/link"

const WelcomeNav = () => {
  return (
    <div className="flexBetween max-container padding-container relative z-30 py-5">
       <Link href='/' className='flex gap-2 items-center'>
          <Image 
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
              />
            <h1 className="hidden md:block logo-text2 text-left logo-text2">TechnoTips</h1>
          </Link>

      

          <Link href='/sign-in' className="btn-primary w-[100px]">
            Sign In
          </Link>

    </div>
  )
}

export default WelcomeNav