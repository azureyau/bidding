import { Button } from "react-bootstrap";

export default function BidOptions(props) {
  return (
    <>
      <li
        className={`list-group-item 
          ${props.selected ? "active" : "list-group-item-action"}`}
        style={{ cursor: "pointer" }}
        onClick={() => {
          console.log(props.selected);
          if (props.selected) {
            props.onBid({
              bidName: props.response.bid,
              explain: props.response.meaning,
            });
            props.setSelection(0);
          } else {
            props.setSelection(props.id);
          }
        }}
      >
        <row>
          <div className="col-10">
            {props.response.bid}: {props.response.meaning}
          </div>
          {props.selected ? (
            <div className="col-2">
              <Button onClick={console.log("im clicked")}> Edit</Button>
            </div>
          ) : null}
        </row>
      </li>
    </>
  );
}
