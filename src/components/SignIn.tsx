'use client'
import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const SignIn = () => {
  return (
    <div className=' flex flex-col md:flex-row justify-center items-center'>
      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 1, delay: 1 }} 
      >

      <div className='p-2'>
        <div className='flex flex-col space-y-2 text-center items-center'>
          <Image 
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="h-8 w-8"
          />
          <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
          <p className='text-sm max-w-xs'>
            By continuing, you are setting up a TechnoTips account and agree to our
            User Agreement and Privacy Policy.
          </p>
        </div>
        <div className='px-4 py-4'>
          <UserAuthForm />
        </div>
        <p className='px-8 text-center text-sm text-muted-foreground'>
          New to TechnoTips?{' '}
          <Link
            href='/sign-up'
            className='hover:text-brand text-sm underline underline-offset-4 pr-4'>
            Sign Up
          </Link>
        </p>
      </div>
      </motion.div>
    </div>
  )
}

export default SignIn;
