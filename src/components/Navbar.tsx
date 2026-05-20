'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();

  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expanded
        && navbarRef.current
        && !navbarRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);

  if (status === 'loading') return null;

  const currentUser = session?.user?.email;

  return (
    <div ref={navbarRef}>
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        className="molokai-navbar"
      >
        <Container fluid className="molokai-navbar-container">
          <Navbar.Brand href="/" className="molokai-brand" onClick={() => setExpanded(false)}>
            <Image
              src="/img/MolokaiPlumeriasLogoTransparent.png"
              alt="Molokai Plumerias logo"
              width={56}
              height={56}
              className="molokai-navbar-logo"
              priority
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="molokai-navbar-toggle"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="molokai-center-nav" onSelect={() => setExpanded(false)}>
              <Nav.Link href="/" active={pathName === '/'} className="molokai-nav-link">
                Home
              </Nav.Link>

              <Nav.Link href="/about" active={pathName === '/about'} className="molokai-nav-link">
                About
              </Nav.Link>

              <Nav.Link
                href="/care-instructions"
                active={pathName === '/care-instructions'}
                className="molokai-nav-link"
              >
                Care Instructions
              </Nav.Link>

              <Nav.Link href="/flowers" active={pathName === '/flowers'} className="molokai-nav-link">
                Flowers
              </Nav.Link>

              <Nav.Link href="/events" active={pathName === '/events'} className="molokai-nav-link">
                Events
              </Nav.Link>

              <Nav.Link href="/contact" active={pathName === '/contact'} className="molokai-nav-link">
                Contact Us
              </Nav.Link>
            </Nav>

            <Nav className="molokai-auth-nav">
              {session ? (
                <NavDropdown
                  id="login-dropdown"
                  title={currentUser}
                  className="molokai-auth-dropdown"
                  align="end"
                >
                  <NavDropdown.Item
                    id="login-dropdown-sign-out"
                    href="/api/auth/signout"
                    onClick={() => setExpanded(false)}
                  >
                    <BoxArrowRight />
                    Sign Out
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    id="login-dropdown-change-password"
                    href="/auth/change-password"
                    onClick={() => setExpanded(false)}
                  >
                    <Lock />
                    Change Password
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  id="login-dropdown"
                  title="Login"
                  className="molokai-auth-dropdown"
                  align="end"
                >
                  <NavDropdown.Item
                    id="login-dropdown-sign-in"
                    href="/auth/signin"
                    onClick={() => setExpanded(false)}
                  >
                    <PersonFill />
                    Sign in
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    id="login-dropdown-sign-up"
                    href="/auth/signup"
                    onClick={() => setExpanded(false)}
                  >
                    <PersonPlusFill />
                    Sign up
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
