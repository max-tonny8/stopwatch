"use client"
// components/Navbar.tsx
import Link from 'next/link';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 2rem;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const NavbarItem = styled.li`
  margin-right: 3rem;
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <Link href="/worldclock">
            World Clock
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/stopwatch">
            Stop Watch
          </Link>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;