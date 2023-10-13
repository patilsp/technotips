import { getAuthSession } from '@/lib/auth'
import WelcomePage from './welcome'
import MyFeeds from './feeds'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Home() {
  const session = await getAuthSession()

  return (
    <>
      {session ? (
        <MyFeeds />
      ) : (
        <WelcomePage />
      )}
    </>
  )
}
