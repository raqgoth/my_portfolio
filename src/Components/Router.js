import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Professional from '../pages/Professional'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'

const Routes = (props) => {
    return (
        <div>
            <Switch>
                  <Route exact path = "/" component={Home}/>
                  <Route exact path = "/about" component = {About} />
                  <Route exact path = "/career" component = {Professional} />
                  <Route exact path = "/contact" component = {Contact}/>
                  <Route exact path = "/projects" component = {Projects} />
            </Switch>

           
                  
        </div>
    )

}
export default Routes