import Link from "next/link";
import { Card } from "react-bootstrap";

export default function Bid(props) {
  return (
    <Card style={{ width: "150px", fontSize: "12px" }} className="m-2">
      {/* <div style={{ cursor: "pointer" }} onClick={props.goBack}> */}
      <p> {props.text} </p>
      {/* </div> */}
    </Card>
  );
}
