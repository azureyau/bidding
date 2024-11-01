import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function EditingBox() {
  const { register, handleSubmit, setValue } = useForm()

  function submitForm(data) {
    console.log(data)
  }

  return (
    <>
      <p>editingBox</p>
      <Container>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Bid revising</Form.Label>
            <Form.Control
              type='text'
              placeholder='1c'
              {...register('explanation')}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Explanation</Form.Label>
            <Form.Control
              type='text'
              placeholder='NAT'
              {...register('explanation')}
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
            <Button variant='secondary' onClick={(e) => console.log(e)}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
