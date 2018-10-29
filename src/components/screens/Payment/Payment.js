import React, { Component } from 'react';
export default class Payment extends Component{

    paymentDetails(){
        return (
            <tr className="table-striped text-center">
                <th>ID #</th>
                <th>FULL NAME</th>
                <th>SHIRT SIZE</th>
                <th>PAYMENT</th>
                <th>ACTION</th>
            </tr>
        )
    }

    render(){
        return (   
            <div className="container">
               
                <table className="table table-responsive-lg">
                    <tbody>
                        <this.paymentDetails />
                    </tbody>
                </table>
            </div>
        )
    }
}