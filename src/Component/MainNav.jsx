import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'

export default function MainNav() {
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Bridge Conventions</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/player/daniel" passHref legacyBehavior>
              <Nav.Link>Daniel</Nav.Link>
            </Link>
            <Link href="/player/rani" passHref legacyBehavior>
              <Nav.Link>Rani</Nav.Link>
            </Link>
            <Link href="/player/jacky" passHref legacyBehavior>
              <Nav.Link>Jacky</Nav.Link>
            </Link>{' '}
            <Link href="/player/standard" passHref legacyBehavior>
              <Nav.Link>Standard</Nav.Link>
            </Link>
            <Link href="/player/test" passHref legacyBehavior>
              <Nav.Link>test</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  )
}
