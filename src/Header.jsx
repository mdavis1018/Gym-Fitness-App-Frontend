import { LogoutLink } from "./Logout";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function Header(props) {
  return (
    <header>
      <Navbar className="btn btn-secondary">
        <Container>
          <Navbar.Brand href="http://localhost:5173/categories" className="text-white">
            Fitness-App
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              Signed in as:{" "}
              <a href="http://localhost:5173/profile" className="text-primary">
                {props.user.name}
              </a>
              <img src={props.user.image_url} style={{ borderRadius: "50%", height: "100px", width: "100px" }} />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
        <LogoutLink />
      </Navbar>
    </header>
  );
}
