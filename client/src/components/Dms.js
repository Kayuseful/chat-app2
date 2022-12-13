import Bar1 from "./Bar1";
import BarBlank from "./BarBlank";

const Dms = ({socket, unreadMsgs, setUnreadMsgs, users})=>{

    return(
        <>
            <Bar1 socket={socket} unreadMsgs={unreadMsgs} setUnreadMsgs={setUnreadMsgs} users={users} />
            <BarBlank />
        </>
    )
}
export default Dms;