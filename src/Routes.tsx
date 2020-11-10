import React from 'react'
import { Switch, Route } from 'react-router-dom'

import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Leisure from './components/Leisure'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path='/About' component={About} />
    <Route exact path='/Stack' component={Stack} />
    <Route exact path='/Projects' component={Projects} />
    <Route exact path='/Work Experience' component={WorkExperience} />
    <Route exact path='/Leisure' component={Leisure} />
    <Route exact path='/Contact' component={Contact} />   
       
    <Route path='/' component={NotFound} /> 
   
  </Switch>
)
export default Routes
