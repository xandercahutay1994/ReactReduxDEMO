import React, {Component} from 'react';
<<<<<<< HEAD
import {
    BrowserRouter as Router, 
    Route, 
    browserHistory
} from 'react-router-dom';
import Payment from './screens/Payment/Payment';
import Student from './screens/Student/Student';
import AddStudent from './screens/Student/AddStudent';
import NavigationHeader from './screens/Navigation';

export default class App extends Component{
=======
import Login from './screens/Login';

class App extends Component{

    constructor(){
        super()

        this.state = {
            message: 1
        }
    }
>>>>>>> 508c4d6981de5155089e06601028d887b29c6a8d

    click = () => {
        console.log(this);
        this.setState({
            message: 53
        })
    }

    render(){
        return( 
<<<<<<< HEAD
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
=======
            <div className="container">
                <Login />
            </div>
>>>>>>> 508c4d6981de5155089e06601028d887b29c6a8d
        )
    }
}