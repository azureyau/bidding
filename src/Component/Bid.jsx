import Link from 'next/link'
import { Card } from 'react-bootstrap'

export default function Bid(props) {
  return (
    <Card
      style={{
        width: '50px',
        fontSize: '20px',
        margin: '5px',
        backgroundColor: props.text != 'P' ? '#FEF9E7' : null,
        color: props.text == 'P' ? 'gray' : null,
        cursor: props.goBack ? 'pointer' : null
      }}
      className="m-2 text-center"
      onClick={props.goBack}>
      {props.text}
    </Card>
  )
}
