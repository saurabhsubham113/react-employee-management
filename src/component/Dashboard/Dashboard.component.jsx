import React, { Component } from 'react';
import  './Dashboard.style.css'
import axios from 'axios'
import {url} from '../../config'
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
        }
    }
    
    async componentDidMount() {
        const res = await axios.get(`${url}/list`,{
            headers:{
                'x-auth-token':localStorage.getItem('token')
            }
        })
        
        if(res.data.status === 'success'){
            this.setState({users : res.data.data})
        }else{
            alert('something went wrong')
        }
    }
    

    render() {
        return (
            <>
               <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>s.no</th>
                            <th>Emp ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {this.state.users.map((user,index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <Link to={`/view/${user._id}`}>
                                    {user.empid} 
                                    </Link>   
                                </td>
                                <td>{user.fname} {user.lname} </td>
                                <td>{user.email} </td>
                                <td>{user.role} </td>
                                <td>{user.status} </td>
                            </tr>
                        ))}
                    </tbody>
               </table>
            </>
        );
    }
}

export default Dashboard;