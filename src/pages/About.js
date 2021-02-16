import React from "react";
import { NavLink, Router } from "react-router-dom";
import Nav from '../components/Nav'
import '../styles/About.css'

const About = () => {
    return (
        <div>
            <Nav />
            <article>
                <div class="row g-0">
                    <div class="col-md-2">

                    </div>
                    <div class="card-body">
                        <h5 className="header-about">Personal Life</h5>
                        <p className="card-text">I was born and raised in Barranquilla, Colombia.
                        I came to New York when I was 17 to go to college,
                        and start my dream life.
                        I have always been a hard-worker and a dreamer, with goals to make my dreams come true.
                    </p>
                        <p className="card-text">I have always believed in following your dreams, working for a goal and to help people,
                        and right now, with covid-19 that can't be more true. We need eachother now more than ever.
                        We need to help our communities to build, and survive in the new normal.
                    </p>
                        <p className="card-text">With the rise of covid-19, like many of us, I started re-evaluating
                        my life. I started evaluating if I was truly living the life I always dreamed to live, and
                        doing everything I always dreamed of. I love teaching, I love special education children,
                        and I am really passionate about education.
                    </p>
                        <p className="card-text">As you all know, this year was really hard for teachers across the world as we tried to do
                        the impossible and teach remotely. With that, I started reading and discovering more about edtech,
                        and the different technologies teachers were using for teaching. And my love for technology,
                        particularly for software development came out.
                    </p>
                        <p className="card-text"> It was then I decided to pursue my dream, my love, and my passion of becoming a software engineer.
                        I just completed an immersive fullstack software engineer course with General Assembly.
                    </p>
                        <p className="card-text">To view my professional experience please click <NavLink exact to="/career"> here </NavLink>
                        </p>
                    </div>

                </div>
            </article>
        </div>


    )
}

export default About