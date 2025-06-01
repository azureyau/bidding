import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [markdown, setMarkdown] = useState('Loading...')

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/azureyau/bidding/main/README.md')
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split('\n')
        const filtered = lines.slice(1).join('\n')
        setMarkdown(filtered)
      })
      .catch((err) => {
        console.error('Failed to fetch README:', err)
        setMarkdown('Failed to load README')
      })
  }, [])

  return (
    <div className='container mt-4'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
