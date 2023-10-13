'use client'

import { formatTimeToNow } from '@/lib/utils'
import { Post, User, Vote } from '@prisma/client'
import { MessageSquare, Share,  MoreHorizontal, Plus } from 'lucide-react'
import Link from 'next/link'
import { FC, useRef } from 'react'
import EditorOutput from './EditorOutput'
import PostVoteClient from './post-vote/PostVoteClient'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/registry/new-york/ui/dropdown-menu'
import { Button } from '@/registry/new-york/ui/button'
import { Separator } from '@/registry/new-york/ui/separator'


type PartialVote = Pick<Vote, 'type'>

interface PostProps {
  post: Post & {
    author: User
    votes: Vote[]
  }
  votesAmt: number
  subredditName: string
  currentVote?: PartialVote
  commentAmt: number
}

const Post: FC<PostProps> = ({
  post,
  votesAmt: _votesAmt,
  currentVote: _currentVote,
  subredditName,
  commentAmt,
}) => {
  const pRef = useRef<HTMLParagraphElement>(null)

  return (
    <div className='rounded-md bg-white shadow border dark:bg-slate-900'>
      <div className='px-3 py-2 flex justify-between'>
        <PostVoteClient
          postId={post.id}
          initialVotesAmt={_votesAmt}
          initialVote={_currentVote?.type}
        />

        <div className='w-0 flex-1'>
          <div className='max-h-40 mt-1 text-xs text-slate-700'>
          <div className="flex justify-between w-full">
          <span className='max-h-40 truncate text-xs text-slate-900 text-semibold '>
            {subredditName ? (
              <>
                <a
                  className='underline link text-sm underline-offset-2'
                  href={`/r/${subredditName}`}>
                  {subredditName}
                </a>
                <span className='px-1'>•</span>
              </>
            ) : null}

            Posted by {post.author.username}{' '}
            <p className="tag">{formatTimeToNow(new Date(post.createdAt))}</p> 
            </span>
            <a className="border rounded-md text-xs px-2 py-1 font-semibold text-indigo-600 hover:bg-indigo-900 hover:text-white " href="/follow">Follow </a>       
          </div>

          </div>
          <a href={`/r/${subredditName}/post/${post.id}`}>
            <h1 className='text-lg font-semibold py-2 leading-6 text-slate-900 dark:text-white'>
              {post.title}
            </h1>
          </a>

          <div
            className='text-sm max-h-40 w-full overflow-clip'
            ref={pRef}>
            <EditorOutput content={post.content} />
            {pRef.current?.clientHeight === 160 ? (
              // blur bottom if content is too long
              <div className='absolute bottom-0 left-0 h-24 w-full from-white to-transparent'></div>
            ) : null}
          </div>
        </div>
      </div>

      <div className='flex justify-between bg-gray-100 dark:bg-slate-800 m-2 gap-2 rounded-md z-20 text-sm px-4 py-4 sm:px-6'>
        <Link
          href={`/r/${subredditName}/post/${post.id}`}
          className='w-fit flex items-center gap-2'>
          <MessageSquare className='h-4 w-4' /> {commentAmt} comments
        </Link>
        <Link
          href={`/r/${subredditName}/post/${post.id}`}
          className='w-fit flex items-center gap-2'>
          <Share className='h-4 w-4' /> Share
        </Link>
       
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
       
         
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="px-2 shadow-none">
                <MoreHorizontal className='h-4 w-4' /> 
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              alignOffset={-5}
              className="w-[250px]"
              forceMount
            >
              <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Show More Posts Like This.
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Hide Post</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Report This Post</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />Add To Favorite
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
       
    
      </div>
    </div>
  )
}
export default Post
