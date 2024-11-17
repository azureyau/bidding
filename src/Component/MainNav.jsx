/* eslint-disable react/react-in-jsx-scope */
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { loggedInAtom } from '@/store'
import { removeToken } from '@/lib/authenticate'

export default function MainNav() {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom)
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      <Navbar
        className='fixed-top navbar-dark bg-dark navbar-expand-md'
        expand='sm'
        expanded={isExpanded}
      >
        <Container>
          <Link href='/' passHref legacyBehavior>
            <Navbar.Brand className='ms-3' onClick={() => setIsExpanded(false)}>
              Bridge Conventions
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={() => setIsExpanded(!isExpanded)}
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link href='/player/daniel' passHref legacyBehavior>
                <Nav.Link
                  active={router.asPath === '/player/daniel'}
                  onClick={() => setIsExpanded(false)}
                >
                  Daniel
                </Nav.Link>
              </Link>
              <Link href='/player/rani' passHref legacyBehavior>
                <Nav.Link
                  active={router.asPath === '/player/rani'}
                  onClick={() => setIsExpanded(false)}
                >
                  Rani
                </Nav.Link>
              </Link>
              <Link href='/player/jacky' passHref legacyBehavior>
                <Nav.Link
                  active={router.asPath === '/player/jacky'}
                  onClick={() => setIsExpanded(false)}
                >
                  Jacky
                </Nav.Link>
              </Link>

              <Link href='/player/standard' passHref legacyBehavior>
                <Nav.Link
                  active={router.asPath === '/player/standard'}
                  onClick={() => setIsExpanded(false)}
                >
                  Standard
                </Nav.Link>
              </Link>

              <div className='d-none d-md-block'>
                <Link href='/player/test' passHref legacyBehavior d>
                  <Nav.Link
                    active={router.asPath === '/player/test'}
                    onClick={() => setIsExpanded(false)}
                  >
                    test
                  </Nav.Link>
                </Link>
              </div>
              <Link href='/conventions' passHref legacyBehavior>
                <Nav.Link
                  active={router.asPath === '/conventions'}
                  onClick={() => setIsExpanded(false)}
                >
                  Conventions
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Nav className='me-auto' style={{ width: '60px' }}>
          {loggedIn === null ? (
            <Link href='/login' passHref legacyBehavior>
              <Nav.Link
                active={router.asPath === '/login'}
                onClick={() => setIsExpanded(false)}
              >
                Log in
              </Nav.Link>
            </Link>
          ) : (
            <NavDropdown title={loggedIn} id='basic-nav-dropdown'>
              <NavDropdown.Item
                onClick={() => {
                  removeToken()

                  setLoggedIn(null)
                  router.push('/')
                }}
              >
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar>
      <br />
      <br />
    </>
  )
}
