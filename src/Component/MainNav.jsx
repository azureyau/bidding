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

            <Link href="/player" passHref legacyBehavior>
              <Nav.Link>Daniel</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  )
}
