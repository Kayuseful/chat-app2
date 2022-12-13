import React from "react";
import { Link } from "react-router-dom";

const Welcome = ()=>{
    return(
        <div className="welcome page">
            <h2>Welcome to ChatApp</h2>
            <img src="/chatAppicon.png" alt="Chat App logo"></img><br/>
            Click <Link to="/dms">Here</Link> to see friends online
        </div>
    )
}
export default Welcome;