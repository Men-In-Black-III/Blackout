import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
// import "../../..assets/stylesheets/header.scss"


const Header = (props) => {
  const {logged_in, current_user} = props
  return (
    <div style={{backgroundColor:'black'}}>
      <Nav>
        <NavItem>
          <NavLink href="/" style={{color:'whitesmoke'}}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/AboutUs" style={{color:'whitesmoke'}}>About</NavLink>
        </NavItem>
        {
          logged_in ? 
          <>
            <NavItem>
              <NavLink href="/users/sign_out" style={{color:'whitesmoke'}}>Logout</NavLink>
            </NavItem>
          </> : 
          <>
            <NavItem>
              <NavLink href="/users/sign_in" style={{color:'whitesmoke'}}>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users/sign_up" style={{color:'whitesmoke'}}>Sign up</NavLink>
            </NavItem>
          </> 
        }
        {
          logged_in && 
            <NavItem>
              <NavLink href="/drinks_list" style={{color:'whitesmoke'}}>Favorites</NavLink>
            </NavItem>
        }
      </Nav>
      <hr />
    </div>
  );
};

export default Header;
