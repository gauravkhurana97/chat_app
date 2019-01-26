 
var socket = io();

socket.on("connect",function(){
    console.log("Connected to server");
});


socket.on("newMessage",function(message){
    console.log("Got it",message)
})

//Acknowledgment  
socket.emit("createMessageEvent",{
    from:"frank",
    text:"Hii" 
},function(msg){
    console.log(msg);
})

socket.on("disconnect",function(){
    console.log("Disconnected from server");
})
