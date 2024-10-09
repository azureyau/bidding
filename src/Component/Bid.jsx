import Link from "next/link";
import { Card } from "react-bootstrap";

export default function Bid(props) {
  return (
    <Card
      style={{ width: "50px", fontSize: "20px", cursor: "pointer" }}
      className="m-2 text-center"
      onClick={props.goBack}
    >
      {props.text}
    </Card>
  );
}
