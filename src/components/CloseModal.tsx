'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Button } from './ui/Button'

interface CloseModalProps {}

const CloseModal: FC<CloseModalProps> = ({}) => {
  const router = useRouter()

  return (
    <Button variant='subtle' className='h-6 w-6 p-0 rounded-md  btn-close' onClick={() => router.back()}>
      <X aria-label='close modal' className='h-4 w-4 cursor-pointer hover:rotate-90 active:scale-100 duration-200' />
    </Button>
  )
}

export default CloseModal
