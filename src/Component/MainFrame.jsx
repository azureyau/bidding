import Auction from "./Auction";
import { useState, useEffect } from "react";
import BiddingBox from "./BiddingBox";

//https://biddingapi.onrender.com
export default function MainFrame(props) {
  const [seqArr, setSeqArr] = useState([]);

  function findCurrentSeqInfo(sequence, responses) {
    let currentObjArr = responses;
    let explain = "";
    for (const bid of sequence) {
      const next = currentObjArr.find((resp) => resp.bid === bid);

      if (next && next.response) {
        explain = next.meaning;
        currentObjArr = next.response;
      } else {
        currentObjArr = [];
        break;
      }
    }
    return [currentObjArr, explain];
  }
  const [currentResponses, explain] = findCurrentSeqInfo(
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
      {explain && <p>meaning: {explain}</p>}
      <br />
      <BiddingBox response={currentResponses} onBid={handleBid} />
    </>
  );
}
