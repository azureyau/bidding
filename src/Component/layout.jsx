import { Container } from 'react-bootstrap'
import Footer from './Footer'
import MainNav from './MainNav.jsx'

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <br />
      <br />
      <Container fluid>{props.children}</Container>
      <br />
      <br />
      <Footer />
    </>
  )
}
