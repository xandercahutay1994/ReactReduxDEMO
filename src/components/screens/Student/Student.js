import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Student extends Component{

    studentDetails(){
        return (
            <tr className="table-striped text-center">
                <th> ID # </th>
                <th> FULLNAME </th>
                <th> COURSE </th>
                <th> ACTION </th>
            </tr>
        )
    }

    addLink(){
        return(
            <Link className="btn btn-primary" to="/addStudent">
                <i className="fa fa-plus"></i> ADD 
            </Link>
        )
    }

    render(){
        return(
            <div>
                <div className="p-3">
                    <this.addLink />
                </div>
                <table className="table">
                    <tbody>
                        <this.studentDetails />
                    </tbody>
                </table>
            </div>
        )
    }
}