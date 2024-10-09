import { Row, Col } from "react-bootstrap";
import Bid from "./Bid";

export default function Auction(props) {
  return (
    <>
      {props.seq.map((seq, index) => {
        if (index % 2 === 0) {
          return (
            <Row key={index} className="my-2">
              <Col>
                <Bid
                  text={seq.bidName}
                  goBack={() => props.controller(props.seq.slice(0, index))}
                />
              </Col>
              <Col>
                {props.seq[index + 1]?.bidName ? (
                  <Bid
                    text={props.seq[index + 1].bidName}
                    goBack={() =>
                      props.controller(props.seq.slice(0, index + 1))
                    }
                  />
                ) : null}
              </Col>
            </Row>
          );
        }
        return null;
      })}
    </>
  );
}
