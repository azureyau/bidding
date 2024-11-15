import { biddingSeqAtom } from '@/store'
import { useAtom } from 'jotai'
import { Row } from 'react-bootstrap'
import Bid from './Bid'

export default function BidRow(props) {
  const [biddingSeq] = useAtom(biddingSeqAtom)
  return (
    <Row className='my-2'>
      {biddingSeq
        .slice(props?.rowNum * 4, props?.rowNum * 4 + 4)
        .map((e, index) => {
          return (
            <div className='col-3' key={props?.rowNum * 4 + index}>
              <Bid index={props?.rowNum * 4 + index} />
            </div>
          )
        })}
    </Row>
  )
}
