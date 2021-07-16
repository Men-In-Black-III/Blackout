import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";


const Header = (props) => {
  // console.log(props)
  const {logged_in, current_user} = props
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/AboutUs">About</NavLink>
        </NavItem>
        {
          logged_in ? 
          <>
            <NavItem>
              <NavLink href="/users/sign_out">Logout</NavLink>
            </NavItem>
          </> : 
          <>
            <NavItem>
              <NavLink href="/users/sign_in">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users/sign_up">Sign up</NavLink>
            </NavItem>
          </> 
        }
        {
          logged_in && 
            <NavItem>
              <NavLink href="/drinks_list">Favorites</NavLink>
            </NavItem>
        }
      </Nav>
      <hr />
    </div>
  );
};

export default Header;
