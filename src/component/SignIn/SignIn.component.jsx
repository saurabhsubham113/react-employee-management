import React, { Component } from 'react'
import './SignIn.style.css'
import axios from 'axios'
import { url } from '../../config'

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    
    handleChange = event => {
        
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const body = {
            email : this.state.email,
            password: this.state.password
        }
        let res = await axios.post(`${url}/login`,body)

        if(res.data.status === 'success'){
            localStorage.setItem('token',res.data.data.token)
            this.props.history.push('/dashboard')
        }else{
            alert(res.data.error)
        }
        this.setState({email: '',password: ''})
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>

                                <form className="form-signin" onSubmit={this.handleSubmit}>
                                    <div className="form-label-group">
                                        <input type="email" 
                                        id="inputEmail" 
                                        className="form-control"
                                        name='email'
                                        onChange={this.handleChange}
                                        placeholder="Email address"
                                        required
                                        autoFocus />
                                    <label htmlFor="inputEmail">Email address</label>
                                    </div>

                                    <div className="form-label-group">
                                    <input type="password" 
                                    id="inputPassword" 
                                    name='password'
                                    onChange={this.handleChange}
                                    className="form-control" 
                                    placeholder="Password" 
                                    required />
                                                <label htmlFor="inputPassword">Password</label>
                                        </div>
                                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default SignIn