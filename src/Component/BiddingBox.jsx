import BidOptions from "./BidOptions";
export default function BiddingBox(props) {
  return (
    <>
      <hr />
      {props.response.map((e) => (
        <div
          key={e.bid}
          onClick={() => props.onBid(e.bid)}
          style={{ cursor: "pointer" }}
        >
          <BidOptions response={e} />
          <br />
        </div>
      ))}

      <hr />
    </>
  );
}
