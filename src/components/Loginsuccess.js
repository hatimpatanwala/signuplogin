import React from 'react'
import { useHistory } from 'react-router-dom';

function Loginsuccess() {
    const history = useHistory()
    const handlelogout = (e) => {
        e.preventDefault();
        history.push("/")
    }
    return (
        <div>
            <h1>Weclome you have successfully logged in</h1>
            <button  className="btn btn-primary btn-block" onClick = {handlelogout}>Logout</button>
        </div>
    )
}

export default Loginsuccess
