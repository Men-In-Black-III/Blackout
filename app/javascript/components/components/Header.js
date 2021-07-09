import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Header = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/AboutUs">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/users/sign_in">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/users/sign_up">Sign up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Favorites">Favorites</NavLink>
        </NavItem>

      </Nav>
      <hr />
    </div>
  );
};

export default Header;
