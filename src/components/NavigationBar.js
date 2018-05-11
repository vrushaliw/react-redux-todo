import React from "react"
import Index from "./Index"

import { Router, Route, Switch, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

class NavigationBar extends React.Component {
  render () {
    const history = createBrowserHistory()
    return (
        <Router history={history}>
          <div>
            <ul>
              <li>
                <Link to="/todo_lists">Todos</Link>
              </li>
            </ul>
            <Route path="/:collection_name" component={Index}/>
          </div>
        </Router>
    );
  }
};
export default NavigationBar;
