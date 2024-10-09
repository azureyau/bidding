import Auction from "./Auction";
import { useState, useEffect } from "react";
import BiddingBox from "./BiddingBox";
import { Container } from "react-bootstrap";

//https://biddingapi.onrender.com
export default function MainFrame(props) {
  const [auctionSeq, setAuctionSeq] = useState([]);

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
    auctionSeq,
    props.data.agreement.response
  );

  function handleBid(bid) {
    setAuctionSeq((previousSeq) => [...previousSeq, bid]);
  }
  return (
    <>
      <Container className="container-md ">
        <div className="row justify-content-start">
          <div className="col-3">
            <Auction bids={auctionSeq} controller={setAuctionSeq} />
          </div>
          <div className="col-md-9">{explain && <p>meaning: {explain}</p>}</div>
        </div>
      </Container>
      <BiddingBox response={currentResponses} onBid={handleBid} />
    </>
  );
}
