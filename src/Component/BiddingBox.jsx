import {
  addModeAtom,
  biddingSeqAtom,
  respOptionsAtom,
  selectionAtom,
} from '@/store'
import BidOptions from './BidOptions'
import { useAtom } from 'jotai'
export default function BiddingBox(props) {
  const [selection, setSelection] = useAtom(selectionAtom)
  const [biddingSeq, setBiddingSeq] = useAtom(biddingSeqAtom)
  const [respOptions, setRespOptions] = useAtom(respOptionsAtom)
  const [addMode, setAddMode] = useAtom(addModeAtom)
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
      <button onClick={() => setAddMode(true)}>Add</button>
    </>
  )
}
