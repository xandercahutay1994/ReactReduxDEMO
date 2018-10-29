import React, {Component} from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    browserHistory
} from 'react-router-dom';
import Payment from './screens/Payment/Payment';
import Student from './screens/Student/Student';
import AddStudent from './screens/Student/AddStudent';
import NavigationHeader from './screens/Navigation';
import Login from './screens/Login';

export default class App extends Component{

    render(){
        return( 
            <Router history={browserHistory}>
                <div className="container">
                    {/* Header for all pages */}
                    <NavigationHeader />

                    {/* Route list */}
                    <Route path="/" component={Student} exact/> 
                    <Route path="/payment" component={Payment}/>
                    <Route path="/addStudent" component={AddStudent}/>
                </div>
            </Router>
        )
    }
}