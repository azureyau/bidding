import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
export default function BidOptions(props) {
  return (
    <>
      <li
        className={`list-group-item 
          ${props.selected ? "active" : "list-group-item-action"}`}
      >
        <Row>
          <div
            className="col-11"
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log(props.selected);
              if (props.selected) {
                props.setSelection(null);
                props.onBid({
                  bidName: props.response.bid,
                  explain: props.response.meaning,
                });
              } else {
                props.setSelection(props.id);
              }
            }}
          >
            {props.response.bid}: {props.response.meaning}
          </div>
          {props.selected ? (
            <div className="col-1">
              <Button
                type="button"
                className="btn btn-secondary"
                onClick={console.log("im clicked")}
              >
                {" "}
                Edit
              </Button>
            </div>
          ) : null}
        </Row>
      </li>
    </>
  );
}
