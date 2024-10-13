import Footer from './Footer'
import MainNav from './MainNav.jsx'

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <br />
      <br />
      {props.children}
      <br />
      <br />
      <Footer />
    </>
  )
}
