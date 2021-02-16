import React from "react";
import Nav from '../Components/Nav'
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div>
            <Nav />
            <article>
                <div class="row g-0">
                    <div class="col-md-2">
                    </div>
                    <div class="card-body">
                        <h5 className="header-about">Contact Information</h5>
                        <p className="card-text"> 
                            Name: Raquel Gothardt 
                        </p>
                        <p className="card-text">
                            email: raquelgothardt@gmail.com
                        </p>
                        <p className="card-text">
                            Thank you for taking your time and looking through my website.
                            have a woderful day!</p>
                                
                        <p className ="card-text">Looking forward to hearing from you soon!
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Contact