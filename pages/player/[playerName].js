import { useEffect, useState } from 'react'
import MainFrame from '@/src/Component/MainFrame'
import useSWR, { mutate } from 'swr'
import { useRouter } from 'next/router'
import ControlBar from '@/src/Component/ControlBar'
import { useAtom, useSetAtom } from 'jotai'
import {
  addModeAtom,
  biddingSeqAtom,
  editingModeAtom,
  respOptionsAtom,
} from '@/store'

export default function Player() {
  const router = useRouter()
  const [respOptions, setResOptions] = useAtom(respOptionsAtom)
  const [editingMode, setEditingMode] = useAtom(editingModeAtom)
  const [addMode, setAddMode] = useAtom(addModeAtom)
  const { playerName } = router.query
  const server = 'https://biddingapi.onrender.com/api/listings/'
  //const server = 'http://localhost:3000/api/listings/'
  const [biddingSeq, setBiddingSeq] = useAtom(biddingSeqAtom)
  const [fetchPath, setFetchPath] = useState()
  useEffect(() => {
    if (playerName) {
      setBiddingSeq([])
      setEditingMode(false)
      setAddMode(false)
    }
  }, [playerName])
  useEffect(() => {
    if (playerName) {
      mutate()
    }
  }, [editingMode])

  useEffect(() => {
    const revSeq = biddingSeq?.slice().reverse()
    let found = false
    for (const bid of revSeq) {
      if (!bid.universal) {
        console.log('ghost', `${server}${playerName}?objID=${bid._id}`)
        setFetchPath(`${server}${playerName}` + '?objID=' + `${bid._id}`)

        found = true
        break
      }
    }
    if (!found) {
      setFetchPath(`${server}${playerName}`)
    }
  }, [biddingSeq, playerName, mutate])

  const {
    data: apiData,
    error,
    isLoading,
  } = useSWR(playerName ? fetchPath : null)

  useEffect(() => {
    if (playerName && !isLoading) {
      setResOptions(apiData)
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
