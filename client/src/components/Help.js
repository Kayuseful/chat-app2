import React from "react";

const Help = ()=>{
    return(
        <div className="help page">
            <h2>Using ChatApp</h2>
            <p>Open the app and go to http://localhost/dms or whatever the path to /dms is after it's deployed
</p>
            <p>You may link to share the link to your friends so they can come online
            You won't see anyone on dms page except there are other viewers of the app elsewhere.
</p>
            <p>A name and email is automatically assigned to every user that joins. A random user details (using faker-js) for testing purposes. You may change this later by clicking the profile icon.
</p>
            <p>On /dms page, you will see all online friends. Click on any to start a chat.
</p>            
            <h3>Unread Messages</h3>
            <p>You will see a red icon showing how many unread messages you have waiting for you reply
</p>
            <h3>Group Chats</h3>
            <p>This has not been activated yet. Watch out for future releases.
</p>
        </div>
    )
}
export default Help;