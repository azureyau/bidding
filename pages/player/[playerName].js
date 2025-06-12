import { useEffect, useState } from 'react'
import MainFrame from '@/src/Component/MainFrame'
import useSWR, { mutate } from 'swr'
import { useRouter } from 'next/router'
import ControlBar from '@/src/Component/ControlBar'
import { useAtom } from 'jotai'
import {
  addModeAtom,
  biddingSeqAtom,
  editingModeAtom,
  respOptionsAtom,
} from '@/store'
import { parseCookies } from 'nookies'
import { readToken } from '@/lib/authenticate'

export async function getServerSideProps(context) {
  const { username } = context.params
  const cookies = parseCookies(context)
  const token = cookies.token ? readToken(cookies.token) : null

  if (username === 'daniel') {
    if (!token || (token.userName !== 'daniel' && token.userName !== 'jeff')) {
      return {
        redirect: {
          destination: '/restricted',
          permanent: false,
        },
      }
    }
  }

  return {
    props: {
      username: username ?? null,
    },
  }
}

export default function Player({ username }) {
  const router = useRouter()
  const [, setResOptions] = useAtom(respOptionsAtom)
  const [editingMode, setEditingMode] = useAtom(editingModeAtom)
  const [addMode, setAddMode] = useAtom(addModeAtom)
  const { playerName } = router.query

  const allowedPlayerNames = ['daniel', 'rani', 'jacky', 'test', 'standard']
  const server = 'https://biddingapi.onrender.com/api/listings/'
  const [biddingSeq, setBiddingSeq] = useAtom(biddingSeqAtom)
  const [fetchPath, setFetchPath] = useState()
  useEffect(() => {
    if (playerName) {
      if (!allowedPlayerNames.includes(playerName)) router.push('/')

      setBiddingSeq([])
      setEditingMode(false)
      setAddMode(false)
    }
  }, [playerName])
  useEffect(() => {
    if (playerName) {
      mutate(fetchPath)
    }
  }, [editingMode, addMode, fetchPath])

  useEffect(() => {
    const revSeq = biddingSeq?.slice().reverse()
    let found = false
    for (const bid of revSeq) {
      if (!bid.universal) {
        setFetchPath(`${server}${playerName}` + '?objID=' + `${bid._id}`)

        found = true
        break
      }
    }
    if (!found) {
      setFetchPath(`${server}${playerName}`)
    }
  }, [biddingSeq, playerName])

  const { data: apiData, isLoading } = useSWR(playerName ? fetchPath : null)

  const letterOrder = { p: 0, c: 1, d: 2, h: 3, s: 4, n: 5 }
  const sortResponse = (arr) => {
    arr.sort((a, b) => {
      // If 'p' is involved, it should come first
      if (a.bidName === 'p') return -1
      if (b.bidName === 'p') return 1

      // Split the bid into number and letter parts
      const [aNum, aLetter] = [
        parseInt(a.bidName),
        a.bidName[a.bidName.length - 1],
      ]
      const [bNum, bLetter] = [
        parseInt(b.bidName),
        b.bidName[b.bidName.length - 1],
      ]

      // Compare numbers first
      if (aNum !== bNum) {
        return aNum - bNum
      }

      // Compare letters based on custom order
      return letterOrder[aLetter] - letterOrder[bLetter]
    })
  }
  useEffect(() => {
    if (playerName && !isLoading && apiData) {
      console.log('apiData', apiData)
      const dataCopy = [...apiData]
      sortResponse(dataCopy)
      console.log('sorted:', dataCopy)
      setResOptions(dataCopy)
    }
  }, [apiData])

  useEffect(() => {
    if (fetchPath && playerName) {
      console.log('Mutating with fetchPath:', fetchPath)
      mutate(fetchPath) // Trigger revalidation with updated fetchPath
    }
  }, [fetchPath, mutate, playerName]) // Separate effect to trigger mutation
  if (isLoading)
    return (
      <>
        <div className='spinner-border' role='status'></div>
        <p>loading.. Please wait</p>
      </>
    )
  let pName = playerName
    ? playerName[0].toUpperCase() + playerName.slice(1)
    : ''

  return (
    <>
      <div className='container-fluid'></div>
      <ControlBar player={pName} />
      <MainFrame playerName={playerName} />
    </>
  )
}
