import React from "react";

const BarBlank = ()=>{
    return(
        <div className="bar1-blank page">
            <h2>Welcome to ChatApp</h2>
            <img src="/chatAppicon.png" alt="Chat App logo"></img><br/>
            Copy and share link below to get more friends online
            <div><input value={window.location.href} readOnly style={{"width":"80%"}} /></div>
        </div>
    )
}
export default BarBlank;