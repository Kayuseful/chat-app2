import React from "react";
import { Link } from "react-router-dom";

const BarBlank = ()=>{
    return(
        <div className="bar1-blank page">
            <h2>Welcome to ChatApp</h2>
            <img src="/chatAppicon.png" alt="Chat App logo"></img><br/>
            Copy and share link below to get more friends online <br/>
            <Link to="/" >{window.location.href}</Link>
        </div>
    )
}
export default BarBlank;