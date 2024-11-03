import { addModeAtom } from '@/store'
import { useAtom } from 'jotai'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function AddBox(props) {
  const { register, setValue, reset, handleSubmit } = useForm()

  const [addMode, setAddMode] = useAtom(addModeAtom)
  //const server = 'https://biddingapi.onrender.com/api/listings/'
  const server = 'http://localhost:3000/api/listings/'
  console.log(`${server}${props?.playerName}`)
  const submitForm = async (data) => {
    try {
      // Preparing the object to match the desired structure
      const newBidData = {
        bidName: data.bidName,
        meaning: data.meaning,
        author: 'JY',
        update_date: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }), // Set to current date in specified format
        response: [], // Assuming response is an ID from form
        previous_seq: [], // Assuming this is passed as an array
        fv: data.fv || false,
        uf: data.uf || false,
        vul: data.vul || false,
        non_vul: data.non_vul || false,
      }
      console.log('here') /////////////////
      const response = await fetch(`${server}${props?.playerName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBidData),
      })
      console.log('here2') /////////////////

      if (response.ok) {
        reset() // Reset the form if using useForm()
        setAddMode(false) // Optionally exit add mode
        // Trigger data refresh or mutation if needed
      } else {
        console.error('Failed to submit bid')
      }
    } catch (error) {
      console.error('Error submitting bid:', error)
    }
  }
  return (
    <>
      <p>AddBox</p>
      <Container>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Bid Name:</Form.Label>
            <Form.Control
              type='text'
              placeholder='1c'
              {...register('bidName')}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Explanation</Form.Label>
            <Form.Control
              type='text'
              placeholder='NAT'
              {...register('meaning')}
            />
          </Form.Group>

          <div key='vulnerability' className='mb-3'>
            <Form.Label>vulnerability: </Form.Label>{' '}
            <Form.Check
              inline
              label='Vul'
              name='vul'
              id='vul'
              {...register('vul', { value: true })}
            />
            <Form.Check
              inline
              label='Non'
              name='non'
              id='non'
              {...register('non', { value: true })}
            />
            <Form.Check
              inline
              label='FV'
              name='FV'
              id='FV'
              {...register('FV', { value: true })}
            />
            <Form.Check
              inline
              label='UF'
              name='UF'
              id='UF'
              {...register('UF', { value: true })}
            />
          </div>
        </Form>
        <Row>
          <Col md-3>
            <Button variant='primary' onClick={handleSubmit(submitForm)}>
              Submit
            </Button>{' '}
          </Col>
          <Col md-3>
            <Button variant='secondary' onClick={() => setAddMode(false)}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
