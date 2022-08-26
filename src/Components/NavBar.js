import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoGanyuImage from '../Assets/ch/LogoGanyu.jpg'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand> 
            <img
              src={LogoGanyuImage}
              width="40"
              height="40"   
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">My Genshin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Character">Character</Nav.Link>
            <Nav.Link href="#Senjata">Weapon</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#details">Details</NavDropdown.Item> 
              <NavDropdown.Item href="#soon">Wish Counter (Soon)</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://ebenhaezergrm.github.io/hofgi/" target="_blank">
                Old Website
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="https://github.com/EbenhaezerGRM/EbenhaezerGRM" target="_blank">
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;