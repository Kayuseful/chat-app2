import ChatForm from "./ChatForm";
import { useRef, useEffect } from "react";

const Bar2 = ({recipientID, socket, conversations, setConversations, users, myProfile})=>{
    const lastLineRef = useRef(null);
    useEffect(()=>{
        lastLineRef.current?.scrollIntoView(true, {behavior: 'smooth'})
    }, [conversations]);

    var d = new Date();
    var now=d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
    const recipient = users.find(user=>user.id===recipientID) || {name:"", id:"", email:"", dp:""}
    
    return(
        <div className="bar2">
            <div className="header bar2-header" style={{'justifyContent':'center'}}>
                <div style={{"height": "fitContent","alignSelf": "center"}}>
                    <img className="dp-icon" src={recipient.dp} alt="dp"></img>
                </div>
                <h3>{recipient.name}</h3>
            </div>
            <div className="bar2-body">
                
                <div className="date-div">
                    {now}
                </div>
                {conversations.map((conversation,i)=>{
                    return(
                        <div className={conversation.from===socket.id ? "chat-msg right" : "chat-msg left"} key={i} >
                            {conversation.msg}
                        </div>
                    )
                }) }
                <div ref={lastLineRef} style={{'clear':'both'}}></div>
            </div>
            <ChatForm socket={socket} recipientID={recipientID} conversations={conversations} setConversations={setConversations} myProfile={myProfile} />
        </div>
    )
}
export default Bar2;