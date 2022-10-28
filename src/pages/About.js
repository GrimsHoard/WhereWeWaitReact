import {Button, Form, InputGroup, Image, Row, Container, Col} from 'react-bootstrap';
import Me from "../images/about1.jpg";
import We from "../images/about2.jpg";
import Lore from "../images/about3.png";
import Walk from "../images/about4.png"
import { Link } from "react-router-dom";


const About = () => {
    
  return (
      <>
      <FunFacts />
     <Behind />
     <Contact />
     </>
      )
 
  
};


const FunFacts = () => {
  
  return (
    <div className = "color">
    
    <div className = "midTitle">
            <h1>Venture through a shattered world</h1>
        </div>
        
        
      <div className = "wrapper"> 
      
          <div className="container" >
            <div className="row">
              <div className="col-sm">
                <img id = "hand" alt = "hand" src={Me}/>
              </div>
              <div className="col-sm" id ="text">
                <h3>A Brief Preface</h3>
          			<p>Where We Wait is a text based adventure game designed to lead your through a series of introspective 
          			puzzles in This Place. A broken fragment of a world you think you might have once known but can’t quite 
          			remember….</p>
          			<p>If your interested in more lore and concept art, visit our <Link id = "link" to = "/about">About</Link> page!</p>
              </div>
            </div>
          </div>
          
          <div className="container" id = "bottom-image">
            <div className="row">
              <div className="col-sm order-sm-2">
                <img id = "star" alt = "star" src={We}/>
              </div>
              <div className="col-sm" id="text">
                <h3>Play Demo</h3>
          			<p>The first version of Where We Wait takes the format of a text based adventure game. For now this is all that is offered, 
          			but one day an interactive graphic novel will take its place.</p>
          			<p>Play <Link id = "link" to = "/demo">Demo</Link> now!</p>
              </div>
            </div>
          </div>
          
      </div>
    </div>
    
    )
}

const Behind = () => {
    return (
            <>
            

    <Container id="about_container">
      <Row>
        <Col md id="about_cols">
            <img id = "image" alt = "hand" src={Lore}/>
            <h1 id="about_text">Lore</h1>
            <p id="about_link_text"><Link id = "about_link" to = "/about">Read More</Link></p>
        </Col>
        <Col md>
            <img id = "image" alt = "hand" src={Walk}/>
            <h1 id="about_text" >Walkthrough</h1>
            <p id="about_link_text"><Link id = "about_link" to = "/about">Read More</Link></p>
        </Col>
      </Row>
      <Row>
        <Col md id="about_cols">
            <img id = "image" alt = "hand" src={Walk}/>
            <h1 id="about_text" >Artwork</h1>
            <p id="about_link_text"><Link id = "about_link" to = "/about">Read More</Link></p>
        </Col>
        <Col md>
            <img id = "image" alt = "hand" src={Lore}/>
            <h1 id="about_text" >Updates</h1>
            <p id="about_link_text"><Link id = "about_link" to = "/about">Read More</Link></p>
        </Col>
      </Row>
    </Container>
            
            </>
        )
}

const Contact = () => {
  
  return (
      
      <div className = "contact-wrapper">
        <div className="contact border-0">
          <div className="contact-body">
            <h5 className="contact-title">Contact Us</h5>
            <p className="contact-text">Found a bug? Want to get involved? Please feel free to contact us!</p>
            <Button variant="dark" id="about_button">
              Get in touch
            </Button>
          </div>
        </div>
    </div>

    )
}

export default About;