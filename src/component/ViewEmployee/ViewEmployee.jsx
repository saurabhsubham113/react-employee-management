import React, { Component } from 'react';
import axios from 'axios'
import { url } from '../../config'

class ViewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        const res = await axios.get(`${url}/view/${this.props.match.params.id}`, {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        })
        this.setState({ user: res.data.data })
    }


    render() {
        const data = this.state.user
        return (
            <div className='view-employee'>
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>Emp Id:</th>
                            <td>{data.empid} </td>
                        </tr>
                        <tr>
                            <th>Name:</th>
                            <td>{data.fname} {data.lname} </td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>{data.email} </td>
                        </tr>
                        <tr>
                            <th>Role:</th>
                            <td>{data.role} </td>
                        </tr>
                        <tr>
                            <th>Status:</th>
                            <td>{data.status} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewEmployee;