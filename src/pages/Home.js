import {Button, Form, InputGroup} from 'react-bootstrap';
import arrow from "../images/down.png";
import hand from "../images/concept_hand.jpg";
import star from "../images/concept_star.jpg";
import { Link } from "react-router-dom";


const Home = () => {
  return (
      
        <>
        
          <Caption />
          <FunFacts />
          <Quote />
          <Subscribe />
          
        </>
    )
};

const Caption = () => {
  
  return (
    
      <div className="bgimg-1" id="home_back">
        <div className="caption">
          <span className="title">Where We Wait</span><br />
          <p className="lead">A thriller text based adventure game.</p>
          <Link to = "/demo"><Button variant="dark">Play Demo</Button></Link>
          <Link to = "/about"><Button variant="outline-dark">Learn More</Button></Link><br />
          <img id = "arrow" alt = "arrow" src={arrow}/>
        </div>
      </div>
    )
    
}

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
                <img id = "hand" alt = "hand" src={hand}/>
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
                <img id = "star" alt = "star" src={star}/>
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

const Quote = () => {
  
  return (
    
    <div className="container-quote">
      <div id="quote">
        "All there is, is fragments, becuase a man, even the loneliest of species, 
        is divided among several persons, animals, worlds. To know a man more than
        slightly it be neccessary to gather him together from all those quarters, 
        each last scrap of him..."
        </div>
      <div id="author">
          -Coleman Dowell
      </div>
    </div>
    
    )
  
}

const Subscribe = () => {
  
  return (
    <div className="card border-0">
      <div className="card-body">
        <h5 className="card-title">Subscribe</h5>
        <p className="card-text">If you'd like to keep up with the latest updates and release times, please enter your email!</p>
        <InputGroup className="mb-3" id = "email">
        <Form.Control
          placeholder="Your email"
          label="email"
          describedby="basic-addon2"
        />
        <Button variant="dark" id="button-addon2">
          Submit
        </Button>
      </InputGroup>
      </div>
    </div>

    )
}

export default Home;