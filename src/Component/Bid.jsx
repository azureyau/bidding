import { biddingSeqAtom, contestAtom, editingModeAtom } from '@/store'
import { useAtom } from 'jotai'
// import Link from 'next/link'
// import { Card } from 'react-bootstrap'

export default function Bid(props) {
  const [biddingSeq, setBiddingSeq] = useAtom(biddingSeqAtom)
  const [contest, setContest] = useAtom(contestAtom)
  const [editingMode] = useAtom(editingModeAtom)
  if (
    biddingSeq[props?.index]?.bidName == 'p' &&
    biddingSeq[props?.index]?.universal
  )
    return (
      <button
        type='button'
        className='btn btn-light '
        disabled={editingMode || !contest}
      >
        P
      </button>
    )
  return (
    <button
      type='button'
      className='btn btn-info '
      onClick={() => setBiddingSeq(biddingSeq.slice(0, props?.index))}
      disabled={editingMode}
    >
      {biddingSeq[props?.index]?.bidName}
    </button>
  )
}
