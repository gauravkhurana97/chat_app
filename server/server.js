const path = require("path");
const express = require("express");
const publicPath = path.join(__dirname,"../public");
const socketIO = require("socket.io");
const http = require("http");
const PORT = process.env.PORT||3000;
const app = express();
const {generate_message} = require("./utils/message");


const server = http.createServer(app);

var io = socketIO(server);


app.use(express.static(publicPath));



io.on("connection",(socket)=>{

    
    socket.emit("newMessage",generate_message("Admin","Welcome to the chat app"));

    
    socket.broadcast.emit("newMessage",generate_message("Admin","New User Joined"));
    
    console.log("New User connected")

    socket.on("createMessageEvent",(message,callback)=>{
        console.log("New message from Client ",message)
  io.emit("newMessage",generate_message(message.from,message.text))
        callback("This is form the server");
    })

 

    socket.on("disconnect",()=>{ 
        console.log("User was disconnected")
    })
})
server.listen(3000,()=>{
    console.log(`server is up on port ${PORT}`);
})



