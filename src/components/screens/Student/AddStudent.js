import React, { Component } from "react";
import { Form, Text } from 'react-form';

export default class AddStudent extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        const { firstname, lastname, id, gender, size, course} = this.props;
        return(
            <div className="mt-4 col-lg-12">
                <h2 className="text-center"> ADD STUDENT </h2>

                <div className="form-group mt-5 justify-content-center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <label className="col-md-6">
                                ID #:
                                <input type="text" 
                                    className="form-control" 
                                    name="id"
                                    value={id}
                                />
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-md-6">
                                Firstname:
                                <input type="text" 
                                    className="form-control" 
                                    ref={(input) => this.input = input} 
                                    name="firstname"
                                    value={firstname}
                                />
                            </label>
                            <label className="col-md-6">
                                Lastname:
                                <input type="text" 
                                    className="form-control" 
                                    ref={(input) => this.input = input} 
                                    value={lastname}
                                />
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-md-3">
                                Gender:
                                <select className="form-control" value={gender}>
                                    <option> Male </option>
                                    <option> Female </option>
                                </select>
                            </label>
                            <label className="col-md-3">
                                T-shirt Size:
                                <select className="form-control" value={size}>
                                    <option> Small </option>
                                    <option> Medium </option>
                                    <option> Large </option>
                                </select>
                            </label>
                            <label className="col-md-6">
                                Course:
                                <select className="form-control" value={course}>
                                    <option> Bachelor of Science in Information Technology </option>
                                    <option> Associate in Computer Technology</option>
                                </select>
                            </label>
                        </div>
                        <div className="d-flexjustify-content-center offset-md-3">
                            <button 
                                className="btn btn-primary mt-4 btn-block col-md-8"
                            > SAVE </button>     
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}