import React from 'react'
import Category from '@/components/Category'

const page = () => {
  return (
    <div>         
        <div className="max-w-5xl mx-auto mt-4 p-4">
            <h1 className='font-bold text-3xl md:text-4xl mb-4'> All Communities</h1>
            <div className="bg-white mt-4">
                <Category />
            </div>
        </div>
    </div>
  )
}

export default page
