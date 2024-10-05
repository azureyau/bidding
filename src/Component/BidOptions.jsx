export default function BidOptions(props) {
  return (
    <>
      <p>
        {props.response.bid}: {props.response.meaning}
      </p>
    </>
  );
}
