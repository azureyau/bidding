/* eslint-disable react/react-in-jsx-scope */
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'

export default function MainNav() {
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark navbar-expand-sm" expand="sm">
        <Container>
          <Navbar.Brand>Bridge Conventions</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
              </Link>
              <div className="d-none d-md-block">
                <Link href="/player/standard" passHref legacyBehavior>
                  <Nav.Link>Standard</Nav.Link>
                </Link>
              </div>
              <div className="d-none d-md-block">
                <Link href="/player/test" passHref legacyBehavior d>
                  <Nav.Link>test</Nav.Link>
                </Link>
              </div>
              <Link href="/conventions" passHref legacyBehavior>
                <Nav.Link>Conventions</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  )
}
