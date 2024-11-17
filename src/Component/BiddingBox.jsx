import {
  addModeAtom,
  loggedInAtom,
  respOptionsAtom,
  selectionAtom,
} from '@/store'
import BidOptions from './BidOptions'
import { useAtom } from 'jotai'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
export default function BiddingBox(props) {
  const [selection] = useAtom(selectionAtom)
  const [loggedIn] = useAtom(loggedInAtom)
  const [respOptions] = useAtom(respOptionsAtom)
  const [, setAddMode] = useAtom(addModeAtom)
  const router = useRouter()
  let respList = respOptions?.slice().sort((a, b) => a.bidName - b.bidName)
  return (
    <>
      <hr />
      <ul className='list-group'>
        {respList?.map((e, index) => (
          <BidOptions
            key={index}
            id={index}
            selected={e?._id == selection?._id}
            response={e}
          />
        ))}
      </ul>
      <Button
        className='btn btn-secondary'
        onClick={() => {
          if (loggedIn) setAddMode(true)
          else router.push('/login')
        }}
      >
        Add
      </Button>
    </>
  )
}
