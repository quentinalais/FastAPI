/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

export default function IndexNavbar() {

  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
 
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
              <Container>
                <NavbarBrand href="/" >
                  Home
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
                <Collapse navbar isOpen={false}>
                  <Nav navbar>
                    <NavItem className="active">
                      <NavLink
                        href="/music"
                      >
                        <p>My Music</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="/upload"
                      >
                        <p>Upload Music</p>
                      </NavLink>
                    </NavItem>

                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
  );
}
