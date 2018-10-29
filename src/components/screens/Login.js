import React, { Component } from 'react';

class Login extends Component{
  
    render(){   
        return(
            <div className="container mt-5">
                <h1 className="text-center"> Login </h1>
                <div className="mt-5 col-lg-6" style={{margin:"auto"}}>
                    <div className="form-group">
                        <label className="col-xs-2">Username</label>
                        <div className="col-xs-10">
                            <input type="text" className="form-control" placeholder="Enter Username" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-2">Password</label>
                        <div className="col-xs-10">
                            <input type="text" className="form-control" placeholder="Enter Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-10">
                            <button 
                                className="btn btn-primary btn-block"
                            > Login </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login;
