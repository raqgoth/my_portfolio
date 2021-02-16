import React from "react";
import Nav from '../components/Nav'
import '../styles/Nav.css'
import '../styles/Home.css'
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Nav />
            <h2>Raquel Gothardt</h2>
            <article>
        
  <div class="row g-0">
    <div class="col-md-2">
     
    </div>
      <div class="card-body">
      
        <p className="card-text">Welcome to my website! </p>
        <p className="card-text">Come on in and Find out how this Colombian lady made her way from Special Education Teacher
                to Fullstack Software Developer. </p>
        <p className="card-text"> I am Fluent in both Spanish as well as English.</p>
        <p className="card-text">I am passionate about using my skills to better people's lives.  </p>
       
      </div>
     
      </div>    
      <img src="https://i.imgur.com/IvsPRSl.jpg" alt="me"/>
      </article>
  </div>
    )
}

export default Home