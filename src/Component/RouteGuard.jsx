import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { readToken } from '@/lib/authenticate'

export default function RouteGuard({ children }) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    if (!router.isReady) return
    const token = readToken()
    const username = token?.userName

    const path = router.asPath
    const isDanielPage = path === '/player/daniel'

    if (
      isDanielPage &&
      (token === null || (username !== 'daniel' && username !== 'jeff'))
    ) {
      router.replace('/restricted')
    } else {
      setAuthorized(true)
    }
  }, [router])

  if (!authorized) return null

  return <>{children}</>
}
