import BidOptions from "./BidOptions";
export default function BiddingBox(props) {
  let respList = props.response.sort((a, b) => a.bidName - b.bidName);
  return (
    <>
      <hr />
      <ul className="list-group">
        {respList.map((e) => (
          <li
            className="list-group-item list-group-item-action"
            key={e.bid}
            onClick={() => props.onBid({ bidName: e.bid, explain: e.meaning })}
            style={{ cursor: "pointer" }}
          >
            <BidOptions response={e} />
          </li>
        ))}
      </ul>
    </>
  );
}
