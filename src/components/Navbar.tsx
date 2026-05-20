'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BoxArrowRight,
  Lock,
  PersonFill,
  PersonPlusFill,
  ShieldLockFill,
} from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();

  if (status === 'loading') return null;

  const currentUser = session?.user?.email;
  const role = session?.user?.role;

  return (
    <Navbar expand="lg" className="molokai-navbar">
      <Container fluid className="molokai-navbar-container">
        <Navbar.Brand href="/" className="molokai-brand">
          <Image
            src="/img/MolokaiPlumeriasLogoTransparent.png"
            alt="Molokai Plumerias logo"
            width={72}
            height={72}
            className="molokai-navbar-logo"
            priority
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="molokai-navbar-toggle" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="molokai-center-nav">
            <Nav.Link
              href="/"
              active={pathName === '/'}
              className="molokai-nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              active={pathName === '/about'}
              className="molokai-nav-link"
            >
              About
            </Nav.Link>

            <Nav.Link
              href="/care-instructions"
              active={pathName === '/care-instructions'}
              className="molokai-nav-link"
            >
              Care Instructions
            </Nav.Link>

            <Nav.Link
              href="/flowers"
              active={pathName === '/flowers'}
              className="molokai-nav-link"
            >
              Flowers
            </Nav.Link>
            <Nav.Link
              href="/events"
              active={pathName === '/events'}
              className="molokai-nav-link"
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="/contact-us"
              active={pathName === '/contact-us'}
              className="molokai-nav-link"
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <Nav className="molokai-auth-nav">
            {session ? (
              <NavDropdown
                id="login-dropdown"
                title={currentUser}
                align="end"
                className="molokai-auth-dropdown"
              >
                {role === 'ADMIN' && (
                  <NavDropdown.Item id="login-dropdown-admin" href="/admin">
                    <ShieldLockFill className="me-2" />
                    Admin
                  </NavDropdown.Item>
                )}

                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock className="me-2" />
                  Change Password
                </NavDropdown.Item>

                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight className="me-2" />
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown
                id="login-dropdown"
                title="Login"
                align="end"
                className="molokai-auth-dropdown"
              >
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill className="me-2" />
                  Sign in
                </NavDropdown.Item>

                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill className="me-2" />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
