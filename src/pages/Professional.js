import React from "react";
import Nav from '../Components/Nav'
import '../styles/Professional.css'

const Professional = () => {
    return (
        <div>
            <Nav />
            <article>
                <div class="row g-0">
                    <div class="col-md-2">

                    </div>
                    <div class="card-body">
                        <h5 className="header-about">Professional Life</h5>
                        <p className="card-text"> In My professional life, I am a fullstack software developer.
                        I have completed an immersive fellowship with General Assembly, where
                        I challenged myself, and I learned so much.
                        I developed the ability to build webapps, and I developed my skills in new
                        technologies, such as JavaScript, HTML, HTML5, CSS, React.js, Node.js, Python, PostgreSQL,
                        and more.
                        </p>
                        <p className="card-text">I have a certificate in fullstack software engineer, I have a BA in Psychology,
                        and a Masters degree in Early Childhood Education and Special Education
                        from Pace University.
                        I also have an advanced certificate in Bilingual Education K-12 from LIU Brooklyn.
                        and an advanced certificate in Childhood Education.
                        </p>
                        <p className="card-text"> Being in Education for more than 10 years, I also have a NYS License in Early Childhood
                        Education, an NYS license in Early Childhood Special Education, and a NYS License for Bilingual Education k-12.
                        </p>
                    </div>

                </div>
            </article>
        </div>
    )
}

export default Professional