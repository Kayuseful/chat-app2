import React, {useState} from "react";


const Home = ({myProfile, setMyProfile, socket})=>{
const [success, setSuccess] = useState(false);

const handleSubmit = (e)=>{
    e.preventDefault();
    socket.emit('profile updated', myProfile);
    setSuccess(true)
    
}

    return(
        <form onSubmit={(e)=>handleSubmit(e)} className="profile">
            <h3>Edit My profile</h3>
            <div  id="dp_div">
                <img src={myProfile.dp} alt="my DP" id="dp_src" style={{'width':'250px', height:'250px', border:'1px solid black'}}></img>
            </div>
            <input 
                type="text"
                value={myProfile.name} onChange={(e)=>{setMyProfile(prev=>({...prev, name: e.target.value}))}} />

            <input type="email" value={myProfile.email} 
            onChange={(e)=>{setMyProfile(prev=>({...prev, email: e.target.value}))}}
            />
            <button>Save</button>
            {success && <div className="success">Update Successful</div> }

        </form>
    )
}

export default Home;