import { biddingSeqAtom } from '@/store'
import { useAtom } from 'jotai'

export default function ExplainBlock(props) {
  const [biddingSeq, setBiddingSeq] = useAtom(biddingSeqAtom)
  return (
    <div className='container overflow-auto' style={{ padding: '0px 3em' }}>
      <p>
        {biddingSeq?
          .filter((seq) => !seq?.universal)
          .map((seq, index) => (
            <>
              <span key={index}>
                {seq.bidName} : {seq.meaning}
              </span>
              <br />
            </>
          ))}
      </p>
    </div>
  )
}
