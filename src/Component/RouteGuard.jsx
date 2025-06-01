import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { loggedInAtom } from '@/store'

export default function RouteGuard({ children }) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)
  const [loggedIn] = useAtom(loggedInAtom)

  useEffect(() => {
    if (!router.isReady) return

    const path = router.asPath
    const isDanielPage = path === '/player/daniel'

    if (isDanielPage && loggedIn !== 'daniel' && loggedIn !== 'jeff') {
      router.replace('/restricted')
    } else {
      setAuthorized(true)
    }
  }, [router.isReady, loggedIn, router])

  if (!authorized) return null

  return <>{children}</>
}
