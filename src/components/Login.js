
import {  Link,useHistory } from "react-router-dom";
import './style.css'
import React , {useState} from 'react'



function Login() {
    const lEmail = "admin@admin.com"
    const lNumber = "01234567"
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [loginerror, setloginerror] = useState("")
    const history = useHistory();
    const handlelogin = (e) => {
        e.preventDefault()
        if(email == lEmail && number == lNumber){
            
            history.push("/login")
        }
        else{
           setloginerror("Details do not match")
        }
        
    }

    return (
        <form onSubmit= {handlelogin}>
        <h3>LogIn Page</h3>
        <p>{loginerror}</p>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" value = {email}
            onChange={(e) => {setemail(e.target.value)}}/>
        </div>

        <div className="form-group">
            <label>Number</label>
            <input type="number" className="form-control num" placeholder="Enter Mobile Number" value = {number} 
             onChange={(e) => {setnumber(e.target.value)}} />
        </div>


        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
              <Link to="/forgotpass">Forgot Password?</Link>
        </p>
        <p className="forgot-password ">
             <Link to="/signup">SignUp</Link>
        </p>
        
    </form>
    )
}

export default Login
