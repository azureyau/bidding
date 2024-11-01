import { biddingSeqAtom } from '@/store'
import { useAtom } from 'jotai'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
export default function BidOptions(props) {
  const [biddingSeq, setBiddingSeq] = useAtom(biddingSeqAtom)
  return (
    <>
      <li
        className={`list-group-item 
          ${props.selected ? 'active' : 'list-group-item-action'}`}
      >
        <Row>
          <div
            className='col-md-11 col-sm-10.5 col-10'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (props.selected) {
                props.setSelection(null)
                props.onBid({
                  bidName: props.response.bid,
                  explain: props.response.meaning,
                })
              } else {
                props.setSelection(props.id)
              }
            }}
          >
            {props.response.bid}: {props.response.meaning}
          </div>
          {props.selected ? (
            <div className='col-md-1 col-sm-1.5 col-1'>
              <Button
                type='button'
                className='btn btn-secondary'
                onClick={props.edit}
              >
                {' '}
                Edit
              </Button>
            </div>
          ) : null}
        </Row>
      </li>
    </>
  )
}
