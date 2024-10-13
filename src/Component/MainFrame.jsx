import Auction from './Auction'
import { useState, useEffect } from 'react'
import BiddingBox from './BiddingBox'
import { Container } from 'react-bootstrap'
import ExplainBlock from './ExplainBlock'

//https://biddingapi.onrender.com
export default function MainFrame(props) {
  const [auctionSeq, setAuctionSeq] = useState([])

  function getBidOptionsList(auctionSeq, responses) {
    let currentBidOptionsList = responses
    let explain = ''
    for (const auction of auctionSeq) {
      const next = currentBidOptionsList.find((resp) => resp.bid === auction.bidName)

      if (next && next.response) {
        explain = next.meaning
        currentBidOptionsList = next.response
      } else {
        currentBidOptionsList = []
        break
      }
    }
    return [currentBidOptionsList, explain]
  }
  const [currentResponses, explain] = getBidOptionsList(auctionSeq, props.data?.agreement?.response)

  function handleBid(bid) {
    setAuctionSeq((previousSeq) => [...previousSeq, bid])
    console.log(auctionSeq)
  }
  return (
    <>
      <Container className="container-fluid " style={{ margin: '10px' }}>
        {auctionSeq[0] ? (
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Auction seq={auctionSeq} controller={setAuctionSeq} />
            </div>

            <div className="col-md-9 col-sm-6">
              <ExplainBlock seq={auctionSeq} />
            </div>
          </div>
        ) : (
          <h2> Start bidding by clicking the options below</h2>
        )}
      </Container>
      <BiddingBox response={currentResponses} onBid={handleBid} />
    </>
  )
}
