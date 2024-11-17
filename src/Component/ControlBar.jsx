import {
  addModeAtom,
  biddingSeqAtom,
  contestAtom,
  dealerAtom,
  editingModeAtom,
} from '@/store'
import { useAtom } from 'jotai'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function ControlBar(props) {
  const [contestBool, setContestBool] = useAtom(contestAtom)
  const [biddingSeq, setBiddingSeq] = useAtom(biddingSeqAtom)
  const [dealerBool, setDealerBool] = useAtom(dealerAtom)
  const [addMode] = useAtom(addModeAtom)
  const [editingMode] = useAtom(editingModeAtom)
  // const { register, setValue } = useForm({
  //   defaultValues: { contested: contestBool, dealer: dealerBool },
  // })

  return (
    <>
      <Row>
        <Col>
          <p>Player: {props?.player}</p>
        </Col>
        <Col>
          <Button
            disabled={addMode || editingMode}
            onClick={() => setBiddingSeq([])}
            variant='danger'
          >
            Clear
          </Button>
        </Col>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Check
                  disabled
                  type='switch'
                  id='contested'
                  label='contested'
                  defaultChecked={contestBool}
                  onChange={() => setContestBool(!contestBool)}
                />
              </Col>
              <Col>
                <Form.Check
                  disabled
                  type='switch'
                  id='dealer'
                  label='dealer'
                  defaultChecked={dealerBool}
                  onChange={() => setDealerBool(!dealerBool)}
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  )
}
