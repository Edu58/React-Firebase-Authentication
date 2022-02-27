import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useAuth } from '../Context/AuthContext';
import { Link } from "react-router-dom"; 

const Dashboard = () => {
    const {currentUser, logout} = useAuth();

    async function handleLogout() {

        try {
            await logout()
            Navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <Navbar bg="primary" expand="lg">
            <Container fluid>
              <Navbar.Brand href="/" className="text-light fw-bolder">ReactFire Auth</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                </Nav>

                <p className="text-light mx-5">{currentUser.email}</p>
                <Link className='btn btn-info text-light mx-2' to={'/update-profile'}>Update Profile</Link>
                <Button className="bg-secondary" onClick={handleLogout}>Log Out</Button>

              </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Dashboard;