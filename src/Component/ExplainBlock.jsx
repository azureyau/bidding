export default function ExplainBlock(props) {
  console.log("explain", props);
  return (
    <div className="overflow-auto">
      {props.seq.slice(-3).map((seq, index) => (
        <p key={index}>
          {seq.bidName}: {seq.explain}
        </p>
      ))}
    </div>
  );
}
