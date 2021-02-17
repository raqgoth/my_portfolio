import React from "react"
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'

const NavBar = (props) => {
    return (
        <div>   
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md colors">
                    <NavLink classname="navbar-brand" exact to='/'>
                        Home
                    </NavLink>
                    <NavLink classname="navbar-brand" exact to='/about'>
                        About me
                    </NavLink>
                    <NavLink classname="navbar-brand" exact to='/career'>
                        Professional Experience 
                    </NavLink>
                    <NavLink classname="navbar-brand" exact to='/projects'>
                        Projects
                    </NavLink>
                    <NavLink classname="navbar-brand" exact to = '/contact'>
                        Contact 
                    </NavLink>
                    </div>
                
              
                </nav>

        </div>
    )
}
export default NavBar
