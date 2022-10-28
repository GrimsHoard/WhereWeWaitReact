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
            <h1>Explore a shattered world where memory and nightmare are one in the same</h1>
        </div>
        
        
      <div className = "wrapper"> 
      

          <div className="container" >
            <div className="row">
              <div className="col-sm">
                <img id = "hand" alt = "hand" src={Me}/>
              </div>
              <div className="col-sm" id ="text">
          			<h3>Join US</h3>
          			<p>This where some nice text and taglines will go to explain some features and puzzles of the story in a vague 
          			but interesting way...hopefully that is. One day thsi entire website will be finished being built but that day is
          			not today apparenatly. Writing an entire story is hard.</p>
              </div>
            </div>
          </div>
          
          <div className="container" id = "bottom-image">
            <div className="row">
              <div className="col-sm order-sm-2">
                <img id = "star" alt = "star" src={We}/>
              </div>
              <div className="col-sm" id="text">
          		<h3>Venture through This Place</h3>
          			<p>This where some nice text and taglines will go to explain some features and puzzles of the story in a vague 
          			but interesting way...hopefully that is. One day thsi entire website will be finished being built but that day is
          			not today apparenatly. Writing an entire story is hard.</p>
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
            
    <div class = "lowerTitle">
        <h1>Behind the Scenes</h1>
    </div>
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