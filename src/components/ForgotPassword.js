import React, { useState } from 'react'
import {  Link } from "react-router-dom";

function ForgotPassword() {
    const [password, setpassword] = useState("")
    const [confirmpass, setconfirmpass] = useState("")
    const [passchange, setpasschange] = useState("")
    const handlepass = (e) =>{
         e.preventDefault(); 
         if(password == confirmpass){
             setpasschange("Password Changed")
             setpassword("")
             setconfirmpass("")
         }
         else{
             setpasschange("Password do not match")
         }

    }
    return (
        <div>
            <form onSubmit={handlepass}>
                <h3>Reset Password</h3>
                <p>{passchange}</p>

                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter New Password" value= {password} 
                    onChange = {(e) => setpassword(e.target.value)  }/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control num" placeholder="Enter Confirm Password" value = {confirmpass} value={confirmpass}
                    onChange = {(e) => setconfirmpass(e.target.value)}
                    />
                </div>


                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right ">
                     <Link to="/">Login</Link>
                </p>
                </form>
        </div>
    )
}

export default ForgotPassword
