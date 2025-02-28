import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Row from "react-bootstrap/Row";


const root = createRoot(document.getElementById("root"));
root.render(  
    <FirstPage/>
)

function MainContent(){
    return(
            <>
                <section class="facts">
                    <h2>Fun Facts About React</h2>
                    <ul>
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100k stars on Github</li>
                        <li>Is maintainded by Meta</li>
                        <li>Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </section>
            </>
            
)
}

function HeaderForReactApp(){
    return(
        <header>
            
            <div class="image1">
                    <img  src="react-1.svg" alt="React Logo"/>
                    <h1>React Facts</h1>
            </div>
        </header>
    )
}

function NavExample() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><div class="image1">
                    <img  src="react-1.svg" alt="React Logo"/>
                    <h2>React Facts</h2>
            </div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
        </Container>
      </Navbar>
       
    );
  }
  
  function FooterForReactApp(){
    return(
        <footer className="centerthefootertext"> 
            <Container className="fixedfooter">
                &#169; 2025 developed by Ashwini Kumar. All rights reserved.
            </Container>
        </footer>
    )

  }
 
  function FirstPage(){
        return(
            <>   
                <NavExample/>
                <MainContent/>
                <FooterForReactApp/>
            </> 
        )

  }
