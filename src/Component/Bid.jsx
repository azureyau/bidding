import Link from "next/link";

export default function Bid(props) {
  return (
    <div style={{ cursor: "pointer" }} onClick={props.goBack}>
      <p> {props.text} </p>
    </div>
  );
}
