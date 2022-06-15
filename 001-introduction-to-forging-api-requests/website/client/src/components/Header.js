import { Link } from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
    return (
    <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/" className="unstyle_link">{process.env.REACT_APP_WEBSITE_NAME}</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/" className="unstyle_link">Feed</Link></Nav.Link>
                    <Nav.Link><Link to="/discover" className="unstyle_link">Discover</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
};

export default Header;