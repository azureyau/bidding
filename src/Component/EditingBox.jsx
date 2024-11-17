import { editingModeAtom, selectionAtom } from '@/store'
import { useAtom } from 'jotai'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function EditingBox(props) {
  const [selection] = useAtom(selectionAtom)
  const [_, setEditingMode] = useAtom(editingModeAtom)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { bidName: selection.bidName, meaning: selection.meaning },
  })
  const server = 'https://biddingapi.onrender.com/api/listings/'
  // const server = 'http://localhost:3000/api/listings/'

  async function submitForm(data) {
    try {
      // Preparing the object to match the desired structure
      const newBidData = {
        bidName: data.bidName.toLowerCase(),
        meaning: data.meaning,
        author: 'JY',
        update_date: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }), // Set to current date in specified format
        response: selection?.response, // Assuming response is an ID from form
        previous_seq: selection?.previous_seq,
        fv: data.fv || false,
        uf: data.uf || false,
        vul: data.vul || false,
        non_vul: data.non_vul || false,
      }
      const response = await fetch(
        `${server}${props?.playerName}?objID=${selection._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBidData),
        }
      )
      console.log(`${server}${props?.playerName}?objID=${selection._id}`)
      console.log(response.ok)
      if (response.ok) {
        reset() // Reset the form if using useForm()
        setEditingMode(false) // Optionally exit add mode
      } else {
        console.error('Failed to submit bid')
      }
    } catch (error) {
      console.error('Error submitting bid:', error)
    }
  }

  return (
    <>
      <p>editingBox</p>
      <Container>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Bid revising</Form.Label>
            <Form.Control type='text' {...register('bidName')} disabled />
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
              disabled
            />
            <Form.Check
              inline
              label='Non'
              name='non'
              id='non'
              {...register('non', { value: true })}
              disabled
            />
            <Form.Check
              inline
              label='FV'
              name='FV'
              id='FV'
              {...register('FV', { value: true })}
              disabled
            />
            <Form.Check
              inline
              label='UF'
              name='UF'
              id='UF'
              {...register('UF', { value: true })}
              disabled
            />
          </div>
        </Form>
        <Row>
          <Col md={3}>
            <Button variant='primary' onClick={handleSubmit(submitForm)}>
              Submit
            </Button>{' '}
          </Col>
          <Col md={3}>
            <Button variant='secondary' onClick={() => setEditingMode(false)}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
