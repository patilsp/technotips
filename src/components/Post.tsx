'use client'

import { formatTimeToNow } from '@/lib/utils'
import { Post, User, Vote } from '@prisma/client'
import { MessageSquare, Share,  MoreHorizontal, Plus, Forward, Bookmark, Link2, Youtube, Github, X, Facebook, Instagram  } from 'lucide-react'

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


type PartialVote = Pick<Vote, 'type'>

interface PostProps {
  post: Post & {
    author: User,
    votes: Vote[],
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
    <div className='card'>
      <div className='px-3 py-2 flex justify-between'>      

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
            
            <button className="Btn">
              <span className="leftContainer">
                {/* <svg fill="white" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg> */}
                <span className="like">Join</span>
              </span>
              <span className="likeCount">
                2K
              </span>
            </button>     
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
              <div className='  bottom-0 left-0 h-24 w-full from-white to-transparent'></div>
            ) : null}
          </div>
        </div>
      </div>

      <div className='flex justify-start gap-4 py-2 px-2 ml-2 mt-4'>
        
       <PostVoteClient
          postId={post.id}
          initialVotesAmt={_votesAmt}
          initialVote={_currentVote?.type}
        />
        
        <Link
          href={`/r/${subredditName}/post/${post.id}`}
          className='w-fit flex items-center gap-2 shadow bg-gray-50 hover:bg-orange-500 hover:text-white  rounded-sm px-3'>
          <MessageSquare className='h-4 w-4 ' /> {commentAmt}
        </Link>
     


        <div className="flex items-center space-x-1 rounded-md text-secondary-foreground">
       
         
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button variant="secondary" className="px-3 shadow bg-gray-50 hover:text-white hover:bg-primary">
             <Forward className='h-4 w-4' /> 
           </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent
           align="center"
           alignOffset={-5}
           className="w-[250px]"
           forceMount
         >
          
           <DropdownMenuItem>
             <Share className="mr-2 h-4 w-4" />Share Post Via..
           </DropdownMenuItem>
           <DropdownMenuItem>
             <Bookmark className="mr-2 h-4 w-4" />Save To Bookmarks 
           </DropdownMenuItem>
           <DropdownMenuItem>
             <Link2 className="mr-2 h-4 w-4" />Copy link to post
           </DropdownMenuItem>
           <DropdownMenuSeparator />
           <div className="mb-2 flex w-full justify-center gap-2">
            <div className="glassIcon"><Facebook className=""></Facebook></div>
            <div className="glassIcon"><Instagram className=""></Instagram></div>
            <div className="glassIcon"><Youtube className=""></Youtube></div>
            <div className="glassIcon"><X className=""></X></div>
            <div className="glassIcon"><Github className=""></Github></div>


          </div>
         </DropdownMenuContent>
       </DropdownMenu>
     </div>

       
        <div className="flex items-center space-x-1 rounded-md text-secondary-foreground">
       
         
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="px-3 shadow bg-gray-50 hover:text-white hover:bg-primary">
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
