export default function ExplainBlock(props) {
  console.log('explain', props)
  return (
    <div className="container overflow-auto" style={{ padding: '0px 3em' }}>
      <p>
        {props.seq.slice(-3).map((seq, index) => (
          <>
            <span key={index}>
              {seq.bidName}: {seq.explain}
            </span>
            <br />
          </>
        ))}
      </p>
    </div>
  )
}
