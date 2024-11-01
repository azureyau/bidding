import { contestAtom, dealerAtom } from '@/store'
import { useAtom } from 'jotai'
import { Col, Row, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function ControlBar(props) {
  const [contestBool, setContestBool] = useAtom(contestAtom)

  const [dealerBool, setDealerBool] = useAtom(dealerAtom)
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
          <Form>
            <Row>
              <Col>
                <Form.Check
                  type='switch'
                  id='contested'
                  label='contested'
                  defaultChecked={contestBool}
                  onChange={(e) => setContestBool(!contestBool)}
                />
              </Col>
              <Col>
                <Form.Check
                  type='switch'
                  id='dealer'
                  label='dealer'
                  defaultChecked={dealerBool}
                  onChange={(e) => setDealerBool(!dealerBool)}
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  )
}
