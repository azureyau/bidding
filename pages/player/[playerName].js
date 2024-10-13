import { useEffect, useState } from 'react'
import MainFrame from '@/src/Component/MainFrame'
import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function Player() {
  const router = useRouter()
  let [data, setData] = useState(null)
  const { playerName } = router.query
  const {
    data: apiData,
    error,
    isLoading
  } = useSWR(playerName ? `https://biddingapi.onrender.com/api/listing/${playerName}` : null)

  useEffect(() => {
    if (apiData) {
      setData(apiData)
    } else if (playerName && !isLoading) {
      console.log(error)
    }
  }, [apiData])
  if (isLoading)
    return (
      <>
        <div className="spinner-border" role="status"></div> <p>loading.. Please wait</p>
      </>
    )

  return (
    <>
      <div className="container-fluid">
        <p>Player: {data?.player}</p>
      </div>
      <MainFrame data={data} />
    </>
  )
}
