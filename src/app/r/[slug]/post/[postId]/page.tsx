import CommentsSection from '@/components/CommentsSection'
import EditorOutput from '@/components/EditorOutput'
import PostVoteServer from '@/components/post-vote/PostVoteServer'
import { buttonVariants } from '@/components/ui/Button'
import { db } from '@/lib/db'
import { redis } from '@/lib/redis'
import { formatTimeToNow } from '@/lib/utils'
import { CachedPost } from '@/types/redis'
import { Post, User, Vote } from '@prisma/client'
import { ArrowBigDown, ArrowBigUp, Loader2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { Share, Forward, Bookmark, Link2, Youtube, Github, X, Facebook, Instagram  } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/registry/new-york/ui/dropdown-menu'
import { Button } from '@/registry/new-york/ui/button'


interface SubRedditPostPageProps {
  params: {
    postId: string
  }
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const SubRedditPostPage = async ({ params }: SubRedditPostPageProps) => {
  const cachedPost = (await redis.hgetall(
    `post:${params.postId}`
  )) as CachedPost

  let post: (Post & { votes: Vote[]; author: User }) | null = null

  if (!cachedPost) {
    post = await db.post.findFirst({
      where: {
        id: params.postId,
      },
      include: {
        votes: true,
        author: true,
      },
    })
  }

  if (!post && !cachedPost) return notFound()

  return (
    <div>
      <div className='h-full flex flex-col sm:flex-row items-center sm:items-start justify-between'>       

        <div className='card'>
        <div className="flex justify-between w-full">
          <p className='max-h-40 truncate text-sm text-semibold text-slate-700'>
            Posted by  {post?.author.username ?? cachedPost.authorUsername}{' '}</p>
            <span className="tag">{formatTimeToNow(new Date(post?.createdAt ?? cachedPost.createdAt))}</span>
            
          </div>
          

          <h1 className='text-xl font-semibold py-2 leading-6 text-gray-900'>
            {post?.title ?? cachedPost.title}
          </h1>
          
          
          <EditorOutput content={post?.content ?? cachedPost.content} />
          <hr className="w-full h-px my-6"></hr>
          <div className="flex justify-start gap-4 w-full mt-4">
          <Suspense fallback={<PostVoteShell />}>
          {/* @ts-expect-error server component */}
          <PostVoteServer
            postId={post?.id ?? cachedPost.id}
            getData={async () => {
              return await db.post.findUnique({
                where: {
                  id: params.postId,
                },
                include: {
                  votes: true,
                },
              })
            }}
          />
        </Suspense>

       
        <div className="flex items-center space-x-1 rounded-md text-secondary-foreground">
       
         
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button variant="secondary" className="px-3 shadow bg-gray-50  hover:text-white hover:bg-lime-500">
             <Forward className='h-4 w-4 mr-1' />  Share
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


        </div>
          
          <Suspense
            fallback={
              <Loader2 className='h-5 w-5 animate-spin text-zinc-500' />
            }>
            {/* @ts-expect-error Server Component */}
            <CommentsSection postId={post?.id ?? cachedPost.id} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function PostVoteShell() {
  return (
    <div className='flex items-center flex-col pr-6 w-20'>
      {/* upvote */}
      <div className={buttonVariants({ variant: 'ghost' })}>
        <ArrowBigUp className='h-4 w-4 text-zinc-900' />
      </div>

      {/* score */}
      <div className='text-center py-1 font-medium text-sm text-zinc-900'>
        <Loader2 className='h-3 w-3 animate-spin' />
      </div>

      {/* downvote */}
      <div className={buttonVariants({ variant: 'ghost' })}>
        <ArrowBigDown className='h-4 w-4 text-zinc-900' />
      </div>
    </div>
  )
}

export default SubRedditPostPage
