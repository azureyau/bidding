import {
  biddingSeqAtom,
  contestAtom,
  editingModeAtom,
  selectionAtom,
} from '@/store'
import { useAtom } from 'jotai'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
export default function BidOptions(props) {
  const [biddingSeq, setBiddingSeq] = useAtom(biddingSeqAtom)
  const [selection, setSelection] = useAtom(selectionAtom)
  const [editingMode, setEditingMode] = useAtom(editingModeAtom)
  const [contest, setContest] = useAtom(contestAtom)

  return (
    <>
      <li
        className={`list-group-item 
          ${props?.selected ? 'active' : 'list-group-item-action'}`}
      >
        <Row>
          <div
            className='col-md-11 col-sm-10.5 col-10'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (props?.selected) {
                const selectionCopy = JSON.parse(JSON.stringify(selection))
                setBiddingSeq((previousSeq) => [...previousSeq, selectionCopy])
                if (!contest) {
                  const passbid = {
                    bidName: 'p',
                    universal: true,
                  }
                  setBiddingSeq((previousSeq) => [...previousSeq, passbid])
                }
                setSelection(null)
              } else {
                setSelection(props.response)
              }
            }}
          >
            {props.response.bidName}: {props.response.meaning}
          </div>
          {props?.selected ? (
            <div className='col-md-1 col-sm-1.5 col-1'>
              <Button
                type='button'
                className='btn btn-secondary'
                onClick={() => setEditingMode(true)}
                disabled={selection.universal}
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
