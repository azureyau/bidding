import Auction from "./Auction";
import { useState, useEffect } from "react";
import BiddingBox from "./BiddingBox";

//https://biddingapi.onrender.com
export default function MainFrame(props) {
  const [seqArr, setSeqArr] = useState([]);

  function findCurrentResponse(sequence, responses) {
    let current = responses;
    for (const bid of sequence) {
      const next = current.find((resp) => resp.bid === bid);
      if (next && next.response) {
        current = next.response; // Navigate to the next nested response
      } else {
        current = []; // No further responses found
        break;
      }
    }
    return current;
  }
  const currentResponses = findCurrentResponse(
    seqArr,
    props.data.agreement.response
  );

  function handleBid(bid) {
    setSeqArr((previousSeq) => [...previousSeq, bid]);
  }

  return (
    <>
      <br />
      <br />
      <Auction bids={seqArr} controller={setSeqArr} />
      <br />
      <br />
      <BiddingBox response={currentResponses} onBid={handleBid} />
    </>
  );
}
