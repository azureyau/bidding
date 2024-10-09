import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Bid from "./Bid";

export default function Auction(props) {
  return (
    <>
      {props.bids.map((bid, index) => {
        // For every even index, create a row and add two bids to the row
        if (index % 2 === 0) {
          return (
            <Row key={index} className="my-2">
              {" "}
              {/* Create a new row for each pair */}
              <Col>
                <Bid
                  text={props.bids[index]}
                  goBack={() => props.controller(props.bids.slice(0, index))}
                />
              </Col>
              <Col>
                {
                  props.bids[index + 1] ? (
                    <Bid
                      text={props.bids[index + 1]}
                      goBack={() =>
                        props.controller(props.bids.slice(0, index + 1))
                      }
                    />
                  ) : null /* Handle case where there's no second bid */
                }
              </Col>
            </Row>
          );
        }
        return null; // Skip odd indices as they are handled in the even index case
      })}
    </>
  );
}
