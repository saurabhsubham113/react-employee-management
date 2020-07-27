import React, { Component } from 'react';
import './AddEmployee.style.css'
import axios from 'axios'
import {url} from '../../config'

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empid: '',
            email:'',
            fname:'',
            lname:'',
            role:'default'
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]:event.target.value})
        
    }
    handleSubmit = async (event) => {
        event.preventDefault()

        let res = await axios.post(`${url}/add`,this.state ,{
            headers:{
                'x-auth-token':localStorage.getItem('token')
            },
            
        })
        if(res.data.status === 'success'){
            alert('successfully added')
            this.setState({
                empid: '',
                email:'',
                fname:'',
                lname:'',
                role:'default'
            })
        }else{
            alert('something went wrong')
            this.setState({
                empid: '',
                email:'',
                fname:'',
                lname:'',
                role:'default'
            })
        }
    }
    
    handleReset = e => {
        this.setState({
            empid: '',
            email:'',
            fname:'',
            lname:'',
            role:'default'
        })
    }

    render() {
        return (
            <>
            <h2 className='text-center caption'>Add Employee</h2>
            <div className='add-employee-container'>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
    {/* ----------------Employee id -------------------------------*/}
                        <label htmlFor="empid">Emp Id:</label>
                        <input type="text"
                            name='empid'
                            value={this.state.empid}
                            onChange={this.handleChange}
                            placeholder='Enter employee Id'
                            className="form-control" />
                    </div>
    {/* ------------employee email------------------------------ */}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email"
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder='Enter email'
                            className="form-control" />
                    </div>
{/* ----------------employee names-------------------------------- */}
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
    {/* -------------------employee first name--------------------------- */}
                            <div className="form-group">
                                <label htmlFor="fname">First Name:</label>
                                <input type="text"
                                    name='fname'
                                    value={this.state.fname}
                                    onChange={this.handleChange}
                                    placeholder='Enter First Name'
                                    className="form-control" />
                            </div>
                        </div>
    {/* ----------------------employee last name -----------------------------*/}
                        <div className="col-md-6 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="lname">Last Name:</label>
                                <input type="text"
                                    name='lname'
                                    value={this.state.lname}
                                    onChange={this.handleChange}
                                    placeholder='Enter Last Name'
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
    {/* ---------------------employee eole----------------------------------- */}
                    <div className="form-group">
                        <label htmlFor="role">Role:</label>
                        <select onChange={this.handleChange}  value={this.state.role} name="role" id="role" className="form-control">
                            <option value='default' disabled >Select a role</option>
                            <option value="HR">HR</option>
                            <option value="guest">Guest</option>
                        </select>
                    </div>
                    <button type='submit' className="btn btn-success">Save</button>
                    <button  type='button' onClick={this.handleReset} className="btn btn-primary float-right">Cancel</button>
                </form>
            </div>
            </>
        );
    }
}

export default AddEmployee;