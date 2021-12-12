import React from 'react';
import {BrowserRouter as Router,Switch} from 'react-router-dom'
export class RoutingClass extends React.Component{
    render(){
        <Router>
            <Switch>
                <Route exact path="./page2" component={Home} />
            </Switch>
        </Router>
    }
}