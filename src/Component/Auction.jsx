import { Row, Col } from "react-bootstrap";
import Bid from "./Bid";

export default function Auction(props) {
  return (
    <>
      {props.seq.map((seq, index) => {
        if (index % 2 === 0) {
          return (
            <Row key={index} className="my-2">
              <div className="col-3">
                <Bid
                  text={seq.bidName}
                  goBack={() => props.controller(props.seq.slice(0, index))}
                />
              </div>
              <div className="col-3">
                <Bid text="P" />
              </div>

              {props.seq[index + 1]?.bidName ? (
                <>
                  <div className="col-3">
                    <Bid
                      text={props.seq[index + 1].bidName}
                      goBack={() =>
                        props.controller(props.seq.slice(0, index + 1))
                      }
                    />
                  </div>
                  <div className="col-3">
                    <Bid text="P" />
                  </div>
                </>
              ) : null}
            </Row>
          );
        }
        return null;
      })}
    </>
  );
}
