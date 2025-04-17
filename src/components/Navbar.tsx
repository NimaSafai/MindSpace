import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <h2>MindSpace</h2>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/mood">Mood</Link>
        <Link to="/login">Login</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
