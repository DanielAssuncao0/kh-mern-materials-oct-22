import React, { Component, useEffect } from 'react';

export class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstname: '', lastname: ''}
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    

    render() {
        return (<div>
            <h2>Registration Form</h2>
            <form onSubmit = {this.handleSubmit}>
                <div>
                    Firstname <input type = "text" name = "firstname" 
                    onChange = {this.handleChange}></input>
                </div>
                <div>
                    Lastname <input type = "text" name = "lastname"
                    onChange = {this.handleChange}></input>
                </div>
                <div>
                    <input type = "submit" value = "Register"></input>
                </div>
            </form>
            <div>
                Firstname: {this.state.firstname}, 
                Lastname: {this.state.lastname}
            </div>
        </div>)
    }
}