import Auction from './Auction'
import BiddingBox from './BiddingBox'
import { Container } from 'react-bootstrap'
import ExplainBlock from './ExplainBlock'
import EditingBox from './EditingBox'
import { useAtom } from 'jotai'
import { addModeAtom, biddingSeqAtom, editingModeAtom } from '@/store'
import AddBox from './AddBox'

//https://biddingapi.onrender.com
export default function MainFrame(props) {
  const [biddingSeq] = useAtom(biddingSeqAtom)
  const [editingMode] = useAtom(editingModeAtom)
  const [addMode] = useAtom(addModeAtom)

  return (
    <>
      <Container className='container-fluid' style={{ margin: '10px' }}>
        {true ? (
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <Auction />
            </div>

            <div className='col-md-9 col-sm-6'>
              <ExplainBlock />
            </div>
          </div>
        ) : (
          <h2> Start bidding by clicking the options below</h2>
        )}
      </Container>
      {editingMode ? (
        <EditingBox playerName={props?.playerName} />
      ) : addMode ? (
        <AddBox playerName={props?.playerName} />
      ) : (
        <BiddingBox />
      )}
    </>
  )
}
