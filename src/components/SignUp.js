
import { Link } from "react-router-dom";

import React , {useState} from 'react'

function SignUp() {
    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [registered, setregistered] = useState("")
    const handleregister = (e) => {
        e.preventDefault()
        setregistered("Successfully registered check console ")
        console.log({email})
        console.log({name})
        console.log({password})
        
    }
    return (
        <form onSubmit={handleregister}>
                <h3>Sign Up</h3>
                <p>{registered} </p>

                <div className="form-group">
                    <label> Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" value = {name}
                    onChange = {(e)=> {setname(e.target.value)}}  />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  value = {email}
                    onChange = {(e)=> {setemail(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  value = {password}
                    onChange = {(e)=> {setpassword(e.target.value)}} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/">Login</Link>
                </p>
            </form>
    )
}

export default SignUp
