/* eslint-disable react/react-in-jsx-scope */
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MainNav() {
  const router = useRouter()
  return (
    <>
      <Navbar
        className='fixed-top navbar-dark bg-dark navbar-expand-sm'
        expand='sm'
      >
        <Container>
          <Navbar.Brand>Bridge Conventions</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link href='/' passHref legacyBehavior>
                <Nav.Link active={router.pathname === '/'}>Home</Nav.Link>
              </Link>
              <Link href='/player/daniel' passHref legacyBehavior>
                <Nav.Link active={router.asPath === '/player/daniel'}>
                  Daniel
                </Nav.Link>
              </Link>
              <Link href='/player/rani' passHref legacyBehavior>
                <Nav.Link active={router.asPath === '/player/rani'}>
                  Rani
                </Nav.Link>
              </Link>
              <Link href='/player/jacky' passHref legacyBehavior>
                <Nav.Link active={router.asPath === '/player/jacky'}>
                  Jacky
                </Nav.Link>
              </Link>
              <div className='d-none d-md-block'>
                <Link href='/player/standard' passHref legacyBehavior>
                  <Nav.Link active={router.asPath === '/player/standard'}>
                    Standard
                  </Nav.Link>
                </Link>
              </div>
              <div className='d-none d-md-block'>
                <Link href='/player/test' passHref legacyBehavior d>
                  <Nav.Link active={router.asPath === '/player/test'}>
                    test
                  </Nav.Link>
                </Link>
              </div>
              <Link href='/conventions' passHref legacyBehavior>
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
