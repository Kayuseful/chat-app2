import React, {useState} from "react";
import { Link } from "react-router-dom";

const ChatForm = ({socket, recipientID, conversations, setConversations, myProfile})=>{
    const [msg, setMsg] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(msg.trim()!==""){
            setConversations([...conversations, {msg:msg, from:socket.id, to:recipientID}]) ;
            socket.emit('dm', {msg:msg, rec:recipientID} );
        }
        
        setMsg('');
    }

    return(
        <form className="bar2-footer" autoComplete="off" onSubmit={(e)=>handleSubmit(e)}>
            <Link to="/me"> <img className="dp-icon" src={myProfile.dp} alt="dp" title={myProfile.name}></img></Link>
            <textarea
            value={msg} onChange={(e)=>setMsg(e.target.value)} className="chat-box" 
            id="chat-text" placeholder="Type Chat message.." name="chat-text"></textarea>
            <button type="submit" className="fly-send"><span className="material-icons md-36">send</span></button>
            
        </form>
    )
}
export default ChatForm;