import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Searcher from './views/searcher'
import Home from './views/home'
import CreditHelper from './views/credit-helper'
import List from './views/list'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Searcher} exact path="/searcher" />
        <Route component={Home} exact path="/" />
        <Route component={CreditHelper} exact path="/credit-helper" />
        <Route component={List} exact path="/list" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
