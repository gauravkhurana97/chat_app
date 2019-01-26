 
var socket = io();

// io is the method available to us by above library to initaite the request and when it calls we initiang the req
// we are making the req from client to server to open up web socket and keep that connection open
// what we get back is responsible for emit and listen the events

socket.on("connect",function(){
    console.log("Connected to server");
});

//io on to listen to custom events

//emit let us to register the event 
//in 1st agrumnet -> we send event name
//in 2nd argument -> we send custom data  


// socket.emit("createEmail",{
//     to:"gaurav khurana",
//     text:"Hey. this is from gaurav"
// })

 


//it is not the realistic example 
//in general client will make send the form with some custom data

// socket.on("newEmail",function(email){
//     console.log("New email",email);
// })


socket.on("newMessage",function(message){
    console.log("Got it",message)
})

socket.emit("createMessageEvent",{
    from:"gauravKhurana",
    text:"Helloo"

})

//disconnect events=which lets u do something when server and client drops
socket.on("disconnect",function(){
    console.log("Disconnected from server");
})
//disconnect is fire when server goes down 
