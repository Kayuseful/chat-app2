import { NavLink } from "react-router-dom";

const Bar1 = ({unreadMsgs, setUnreadMsgs, users})=>{

    function elemCount(arr, elem){
        return arr.filter(e=>e===elem).length;
    }
    const id=window.location.pathname.split('/dms/')[1] || "";

    if(id!=="" && elemCount(unreadMsgs, id)>0){setUnreadMsgs(unreadMsgs.filter(e=>e!==id))}
   
    return(
        <>
        <div className="bar1">
            <div className="header">
                <input type="search" name="" className="search-bar" id="" placeholder="Search.."/>

            </div>
            <div className="bar1-body">

                {users.map(user=>{
                    return(
                        <NavLink to={"/dms/"+user.id} className="box" key={user.id}>
                            <img src={user.dp} alt="pic" className="dp-icon"></img>
                            <div className="chat-name">{user.name} </div>
                            <div>{elemCount(unreadMsgs,user.id)>0 && <div className="unread-count"> {elemCount(unreadMsgs,user.id)} </div>}</div>
                        </NavLink>
                    )
                })}
                
            </div>
        </div>
        </>
    )
}
export default Bar1;