const path = require("path");
const express = require("express");
const publicPath = path.join(__dirname,"../public");
const socketIO = require("socket.io");
const http = require("http");
const PORT = process.env.PORT||3000;
const app = express();

const server = http.createServer(app);

//configure the server to also use socketIO
//we are pass the server that we have to use with our web sockets
var io = socketIO(server);
//without this we dont get access to frontend socket library to take care for new user


//when we integrate  socket io we accept 2 things 
//we accept web socket connection 
//and js library

//what we get back web socket server
//emmiting or listening the events
//our server is ready to go
//this lets u to communicate with server and client
//we are ready to accept new connection
app.use(express.static(publicPath));
//default events that keep track of users when then connect  to server
//and when they disconnect from server
//greet the user when they make connection



//io.on is used for connection event
//we dont attacch any event other than this

io.on("connection",(socket)=>{

    //our custom events listeners are happen down below

    //on=>listen the event
    socket.on("createEmail",(newEmail)=>{
        console.log("createEmail",newEmail);
    })

    //socket =>this refers to individual socket as opposed to all of users connected to server
    //web sockets=they are persistent technology
    //meaning that client and server they both keep communicationn shell open
    //if server shut down than client has no choice
    //when i close browser server cant force to open the connection
    console.log("New User connected")




    //if u wnt to set custom data 
    // socket.emit("newEmail",{
    //     from:"gaurav khurana",
    //     text:"Hey what is going on",
    //     createdAt:123
    // });

    //Emitting New Message
    socket.emit("newMessage",{
      from:"gaurav KHurana",
      text:"Helloooo",
      createdAt:"1234"  
    })

    //listening createMessageEvent
    socket.on("createMessageEvent",function(message){
        console.log("New message from Client ",message)
    })

    socket.on("disconnect",()=>{ 
        console.log("User was disconnected")
    })
})
//it listen for new connection 
//meaning that when client connects to server
//and do something 
//when it gets registerd

//io.on let u to register the event listener
//we listen that event and do something when this event has happened
server.listen(3000,()=>{
    console.log(`server is up on port ${PORT}`);
})



//just like express ,whick makes easy to make http server
//socket io makes(dead simple) to set up server that suppotts easy to set up web sockets 
//socket io has backend and frontend library
 