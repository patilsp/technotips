import { db } from '@/lib/db'

export async function GET(req: Request) {
    
  const results = await db.subreddit.findMany({
    include: {
      _count: true,
    },
    take: 25,
  })

  return new Response(JSON.stringify(results))
}
