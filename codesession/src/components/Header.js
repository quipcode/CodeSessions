import React, {useState} from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavbarText} from 'reactstrap'



const Header = (props) => {
    const [toggleNav, navToggler] = useState(false)
    
    return (
        <React.Fragment>
            <div>
                <Navbar light sticky="top" color="secondary"  className=" navbar navbar-dark  navbar-expand-sm" expand="sm">
                    <NavbarBrand className="mr-auto" href="/"><img src="../codeicon.png" height="30" width="30" alt="Code Sessions" /> Code Sessions</NavbarBrand>
                    <NavbarToggler onClick={() => navToggler(!toggleNav)} />
                    <Collapse isOpen={toggleNav} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <NavbarText>{props.tallySessions ? `Over ${props.tallySessions - 1}+ Code Sessions Shared` : null} </NavbarText>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        </React.Fragment>
    );
  };

export default Header;