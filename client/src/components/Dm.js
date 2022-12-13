import Bar1 from "./Bar1";
import Bar2 from "./Bar2";
import { useParams } from "react-router-dom";

const Dm = ({socket, conversations, setConversations, unreadMsgs, setUnreadMsgs, users, myProfile})=>{

    const {id:recipientID} = useParams();
    const myChats = conversations.filter(e=>(e.from===recipientID && e.to===socket.id) || (e.from===socket.id && e.to===recipientID))

    return(
        <>
            <Bar1 socket={socket} unreadMsgs={unreadMsgs} setUnreadMsgs={setUnreadMsgs} users={users} ></Bar1>
            <Bar2 recipientID={recipientID} socket={socket} conversations={myChats} setConversations={setConversations} users={users} myProfile={myProfile} />
        </>
    )
}
export default Dm;