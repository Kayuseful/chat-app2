import './App.css';
import socketIO from 'socket.io-client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dms from './components/Dms';
import Dm from './components/Dm';
import Room from './components/Room';
import {useState, useEffect} from 'react';
import Welcome from './components/Welcome';
import Help from './components/Help';
const socket = socketIO.connect('http://localhost:4000');

function App() {

  const [conversations, setConversations] = useState([]) ;
  const [unreadMsgs, setUnreadMsgs] = useState([]);
  const [users, setUsers] = useState([]);
  const [myProfile, setMyProfile] = useState("");


  useEffect(()=>{
      socket.on('dmResp', (msg)=>{
        setUnreadMsgs([...unreadMsgs, msg.from]);
        setConversations([...conversations, {'msg':msg.msg, 'to':msg.to, from:msg.from, time:msg.time}]) ;

      })
  },[conversations, unreadMsgs]);

  useEffect(()=>{
      socket.on('onlineUsersUpdate', (data)=>{
          setMyProfile(data.find(e=>e.id===socket.id));//me
          data = data.filter(e=>e.id!==socket.id);//i should not appear on online users to myself
          setUsers(data)})
  },[users]);

  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route exact path='/me' element={<Home myProfile={myProfile} setMyProfile={setMyProfile} socket={socket} />}></Route>
          <Route exact path='/dms' element={<Dms socket={socket} conversations={conversations} setConversations={setConversations} unreadMsgs={unreadMsgs} setUnreadMsgs={setUnreadMsgs} users={users} />}></Route>
          <Route exact path='/dms/:id' element={<Dm socket={socket} conversations={conversations} setConversations={setConversations} unreadMsgs={unreadMsgs} setUnreadMsgs={setUnreadMsgs} users={users} myProfile={myProfile} />}></Route>
          <Route exact path='/groups' element={<Room />}></Route>
          <Route exact path='/help' element={<Help />}></Route>

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
