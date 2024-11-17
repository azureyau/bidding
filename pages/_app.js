import '@/styles/globals.css'
import Error from 'next/error'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '@/src/Component/layout'
import { SWRConfig } from 'swr'
import RouteGuard from '@/src/Component/RouteGuard'

const fetcher = async (...args) => {
  const response = await fetch(...args)

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`)
  }

  return response.json()
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <RouteGuard>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RouteGuard>
      </SWRConfig>
    </>
  )
}
