import CommentsSection from '@/components/CommentsSection'
import EditorOutput from '@/components/EditorOutput'
import PostVoteServer from '@/components/post-vote/PostVoteServer'
import { buttonVariants } from '@/components/ui/Button'
import { db } from '@/lib/db'
import { redis } from '@/lib/redis'
import { formatTimeToNow } from '@/lib/utils'
import { CachedPost } from '@/types/redis'
import { Post, User, Vote } from '@prisma/client'
import { ArrowBigDown, ArrowBigUp, Loader2, Share } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/registry/new-york/ui/dropdown-menu'

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

        <div className='sm:w-0 w-full flex-1 bg-white p-4 rounded-sm border'>
        <div className="flex justify-between w-full">
          <p className='max-h-40 truncate text-xs text-gray-500'>
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

        <Link
          href='#'
          className='w-fit flex items-center gap-2 bg-gray-100 rounded-sm px-2'>
          <Share className='h-4 w-4' /> Share
        </Link>

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
