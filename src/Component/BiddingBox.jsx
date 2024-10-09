import BidOptions from "./BidOptions";
import { useState } from "react";
export default function BiddingBox(props) {
  let respList = props.response.sort((a, b) => a.bidName - b.bidName);
  let [selection, setSelection] = useState(null);
  return (
    <>
      <hr />
      <ul className="list-group">
        {respList.map((e, index) => (
          <BidOptions
            key={index}
            id={index}
            selected={index == selection}
            response={e}
            onBid={props.onBid}
            setSelection={setSelection}
          />
        ))}
      </ul>
    </>
  );
}
