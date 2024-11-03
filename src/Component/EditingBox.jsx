import { editingModeAtom } from '@/store'
import { useAtom } from 'jotai'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function EditingBox() {
  const { register, handleSubmit, setValue } = useForm()

  function submitForm(data) {
    console.log(data)
    setEditingMode(false)
  }

  const [editingMode, setEditingMode] = useAtom(editingModeAtom)
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
              name='non_vul'
              id='non_vul'
              {...register('non_vul', { value: true })}
            />
            <Form.Check
              inline
              label='FV'
              name='fv'
              id='fv'
              {...register('fv', { value: true })}
            />
            <Form.Check
              inline
              label='UF'
              name='uf'
              id='uf'
              {...register('uf', { value: true })}
            />
          </div>
        </Form>
        <Row>
          <Col md-3>
            <Button variant='primary' onClick={() => handleSubmit(submitForm)}>
              Submit
            </Button>{' '}
          </Col>
          <Col md-3>
            <Button variant='secondary' onClick={() => setEditingMode(false)}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
