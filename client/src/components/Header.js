import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';


const Header = () => {

    const common={
        marginRight:15,
        fontSize:17,
        letterSpacing:"0.5px"
    }
  return (

    <>
     <Navbar bg="light" data-bs-theme="light">
        <Container>
            <div>
                <h2 className='mt-2 h2_right' style={{color:"#6c63ff"}}><Nav.Link href="#home">Rushikesh Kathar</Nav.Link></h2>
            </div>
          
          <Nav className="mt-2">
            <div>
            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
            <NavLink to="/playlist" className="text-decoration-none" style={common}>Projects</NavLink>
            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
           
            
            </div>
            <div className='mb-3'>
            <Button variant="danger"
             style={{
              background: "#6c63ff",
              letterSpacing: "1px",
              border: "none",
              borderRadius: 4,
              // marginRight: 24,
            }}
            >
                            <a href={"https://www.linkedin.com/in/rushikesh-kathar-529708222/"} target="_blank" className='text-decoration-none text-light'>Linkedin</a>
                          </Button>
            </div>
          
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header