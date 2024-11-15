import { useAtom } from 'jotai'
import { biddingSeqAtom } from '@/store'
import BidRow from './BidRow'

export default function Auction() {
  const [biddingSeq] = useAtom(biddingSeqAtom)
  console.log('biddingSeq:', biddingSeq)
  return (
    <>
      {biddingSeq?.map((e, index) => {
        if (index % 4 === 0) {
          return <BidRow key={index / 4} rowNum={index / 4} />
        }
        return null
      })}
    </>
  )
}
