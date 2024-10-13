import { useEffect, useState } from 'react'
import MainFrame from '@/src/Component/MainFrame'
import useSWR from 'swr'

export default function Player() {
  let [data, setData] = useState(null)
  const { data: apiData, error, isLoading } = useSWR('https://biddingapi.onrender.com/api/listing')

  useEffect(() => {
    if (apiData) {
      setData(apiData)
    } else if (!isLoading) {
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
      <p>Player: {data?.player}</p>
      <MainFrame data={data} />
    </>
  )
}
