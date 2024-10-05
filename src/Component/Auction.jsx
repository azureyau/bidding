import { useState } from "react";
import Bid from "./Bid";

export default function Auction(props) {
  return (
    <>
      {props.bids.map((bid, index) => {
        return (
          <Bid
            key={index}
            text={bid}
            goBack={() => props.controller(props.bids.slice(0, index))}
          />
        );
      })}
      <p>{}</p>
    </>
  );
}
