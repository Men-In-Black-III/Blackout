import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Header = (props) => {
  return (
    <div>
      <p>List Based</p>
      <Nav>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Sign up</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
};

export default Header;
