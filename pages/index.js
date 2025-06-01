export default function Home() {
  return (
    <div className='container mt-4'>
      <h2>Release Notes</h2>

      <h4 className='mt-4'>June 1, 2025</h4>
      <ul>
        <li>
          New feature: Restricted access to certain pages (only accessible by
          approved user after logged in)
        </li>
        <li>
          New feature: User stays logged in after app refresh / closed and
          re-open
        </li>
      </ul>

      <h4 className='mt-4'>Nov 16, 2024</h4>
      <ul>
        <li>New feature: Log in feature</li>
        <li>
          Revised feature: Add bidding button available only after logged in
        </li>
        <li>
          Revised feature: Editing bidding button available only after logged in
        </li>
      </ul>

      <h4 className='mt-4'>Nov 15, 2024</h4>
      <ul>
        <li>New feature: Add bidding button</li>
        <li>New feature: Revise bidding button</li>
        <li>Object structure of bidding revised</li>
      </ul>
    </div>
  )
}
