import React, { Component } from 'react';
import axios from 'axios'
import {url} from '../../config'

class ViewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {}
        }
    }
    
    async componentDidMount() {
        const res = await axios.get(`${url}/view/${this.props.match.params.id}`,{
            headers:{
                'x-auth-token': localStorage.getItem('token')
            }
        })
        this.setState({user:res.data.data})
    }
    

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ViewEmployee;