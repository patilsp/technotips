'use client'

import { Button } from '@/registry/new-york/ui/button'
import { Input } from '@/components/ui/Input'
import { toast } from '@/hooks/use-toast'
import { useCustomToasts } from '@/hooks/use-custom-toasts'
import { CreateSubredditPayload } from '@/lib/validators/subreddit'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/Card"
import { Label } from "@/components/ui/Label"
import { Switch } from "@/components/ui/switch"

const Page = () => {
  const router = useRouter()
  const [input, setInput] = useState<string>('')
  const { loginToast } = useCustomToasts()

  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateSubredditPayload = {
        name: input,
      }

      const { data } = await axios.post('/api/subreddit', payload)
      return data as string
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: 'Community already exists.',
            description: 'Please choose a different name.',
            variant: 'destructive',
          })
        }

        if (err.response?.status === 422) {
          return toast({
            title: 'Invalid Community name.',
            description: 'Please choose a name between 3 and 21 letters.',
            variant: 'destructive',
          })
        }

        if (err.response?.status === 401) {
          return loginToast()
        }
      }

      toast({
        title: 'There was an error.',
        description: 'Could not create Community.',
        variant: 'destructive',
      })
    },
    onSuccess: (data) => {
      router.push(`/r/${data}`)
    },
  })

  return (
    <div className='flex items-center h-full max-w-3xl mx-auto mt-4 p-4'>
      <div className='relative bg-white dark:bg-slate-900 w-full h-fit p-4 rounded-lg space-y-6 shadow-sm border'>
        <div className='flex justify-between items-center'>
          <h1 className='h1 text-xl font-semibold'>Create a Community</h1>
        </div>

        <hr className='bg-red-500 h-px' />

        <div>
          <h1 className='text-xl font-medium mb-1'>Name</h1>
          <p className='text-zinc-700  pb-2 mb-2'>
            Community names including capitalization cannot be changed.
          </p>
          <div className='relative'>
            <p className='absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400'>
              <span className="text-xs px-2">⌘</span>
            </p>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='pl-6'
            />
          </div>
        </div>

        <Card key="1" className="w-full">
          <CardHeader className=" border-dark-gray-300 pb-4">
            <div className="flex items-center">             
              <CardTitle>Community type</CardTitle>
            </div>
            <CardDescription>
            A Community in TechnoTips is a Community, which is a dedicated section where users discuss specific topics. Each Community has its own rules and guidelines moderated by volunteers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex justify-between items-start space-y-2">
              <div>
                <Label htmlFor="essential">Public</Label>
                <p className="text-dark-gray-500 text-sm">
                  Anyone can view, post, and comment to this community
                </p>
              </div>
              <Switch className="ml-auto" id="essential" />
            </div>
            <div className="flex justify-between items-start space-y-2">
              <div>
                <Label htmlFor="analytics">Restricted</Label>
                <p className="text-dark-gray-500 text-sm">
                  Anyone can view this community, but only approved users can post
                </p>
              </div>
              <Switch className="ml-auto" id="analytics" />
            </div>
            <div className="flex justify-between items-start space-y-2">
              <div>
                <Label htmlFor="marketing">Private</Label>
                <p className="text-dark-gray-500 text-sm">
                  Only approved users can view and submit to this community
                </p>
              </div>
              <Switch className="ml-auto" id="marketing" />
            </div>
          </CardContent>
          <div className="border-t border-dark-gray-300 mt-4" />
          
        </Card>

        <div className='flex justify-end gap-4'>
          <Button
            disabled={isLoading}
            variant='subtle'
            onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            disabled={input.length === 0}
            onClick={() => createCommunity()}>
            Create Community
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page