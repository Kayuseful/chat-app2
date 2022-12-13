const path = require('path');
const {faker} = require('@faker-js/faker');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
const cors = require('cors');
server.listen(PORT, (req, res)=>{
    console.log(`Server started on ${PORT}`);
})

app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(cors);

var socketio = require('socket.io');
const io = socketio(server, {
    cors: {origin: `http://localhost:3000`} 
    }
)

var onlineUsers = [];

io.on('connection', (socket)=>{
    console.log(`${socket.id} has connected`);
    onlineUsers.push({
        id:socket.id,
        name: faker.name.fullName(),
        email: faker.internet.email(), 
        'dp': faker.image.avatar()
        });
    io.emit('onlineUsersUpdate', onlineUsers);
    console.log(onlineUsers);

    //DM
    socket.on('dm', ({msg, rec})=>{
        console.log(msg+' to '+rec);
        io.to(rec).emit('dmResp', {
            msg:msg, 
            to:rec,
            from: socket.id,
            time: Date.now()
        });
    })

    //Profile Update
    socket.on('profile updated', (profile)=>{
        console.log(profile);
        onlineUsers = onlineUsers.filter(e=>e.id!==profile.id);//remove and readd with updated
        onlineUsers.push(profile);
        io.emit('onlineUsersUpdate', onlineUsers);
    })

    socket.on('disconnect', ()=>{
        console.log(`${socket.id} has disconnected`);
        //remove
        onlineUsers = onlineUsers.filter(e=>e.id!==socket.id);
        io.emit('onlineUsersUpdate', onlineUsers);
        console.log(onlineUsers)
    })
})

app.get('/', (req, res)=>{
    res.json({'msg': "Wecome"})
})