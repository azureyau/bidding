import { useState } from "react";
import Bid from "./bid";

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
    </>
  );
}
