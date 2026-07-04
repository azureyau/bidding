import { getToken } from '@/lib/authenticate'
import { addModeAtom, biddingSeqAtom } from '@/store'
import { useAtom } from 'jotai'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function AddBox(props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [biddingSeq] = useAtom(biddingSeqAtom)
  const [_, setAddMode] = useAtom(addModeAtom)
  const server = 'https://biddingapi.onrender.com/api/listings/'
  // const server = 'http://localhost:3000/api/listings/'

  const getBidRank = (bidValue) => {
    const match = bidValue
      ?.trim()
      .toLowerCase()
      .match(/^([1-7])([chdsn])$/)
    if (!match) return null

    const suitOrder = { c: 0, h: 1, d: 2, s: 3, n: 4 }
    return [Number(match[1]), suitOrder[match[2]]]
  }

  const validateBidName = (value) => {
    const trimmedValue = value?.trim()

    if (!trimmedValue) return 'Bid name is required'

    if (!/^[1-7][chdsn]$/i.test(trimmedValue)) {
      return 'Must be two characters: first is 1-7 and second is c/h/d/s/n'
    }

    const currentBid = [...(biddingSeq || [])]
      .reverse()
      .find((bid) => !bid?.universal && bid?.bidName)

    if (!currentBid?.bidName) return true

    const newRank = getBidRank(trimmedValue)
    const lastRank = getBidRank(currentBid.bidName)

    if (!newRank || !lastRank) return true

    const isLarger =
      newRank[0] > lastRank[0] ||
      (newRank[0] === lastRank[0] && newRank[1] > lastRank[1])

    return isLarger || 'The Bid must be larger than the current bid'
  }

  const submitForm = async (data) => {
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
        response: [], // Assuming response is an ID from form
        previous_seq: [], // Assuming this is passed as an array
        fv: data.fv || false,
        uf: data.uf || false,
        vul: data.vul || false,
        non_vul: data.non_vul || false,
      }
      for (const bid of biddingSeq) {
        if (bid.universal && bid.bidName == 'p')
          newBidData?.previous_seq.push('67252d25d9fc91c90e87d1d8')
        ///pass bid's id, to be fixed
        else newBidData?.previous_seq.push(bid._id)
      }
      const response = await fetch(`${server}${props?.playerName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${getToken()}`,
        },
        body: JSON.stringify(newBidData),
      })

      if (response.ok) {
        reset() // Reset the form if using useForm()
        setAddMode(false) // Optionally exit add mode
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
              isInvalid={!!errors.bidName}
              {...register('bidName', {
                validate: validateBidName,
              })}
            />
            {errors.bidName && (
              <Form.Control.Feedback type='invalid'>
                {errors.bidName.message}
              </Form.Control.Feedback>
            )}
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
            <Button variant='secondary' onClick={() => setAddMode(false)}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
