 
var socket = io();

socket.on("connect",function(){
    console.log("Connected to server");
});


// socket.on("newMessage",function(message){
//     console.log("Got it",message)
// })

socket.on("newMessage",function(message){
    console.log("Got it",message)
    var li = jQuery("<li></li>");
    li.text(`${message.from}:${message.text}`);
    jQuery("#messages").append(li);

})

// //Acknowledgment  
// socket.emit("createMessageEvent",{
//     from:"frank",
//     text:"Hii" 
// },function(msg){
//     console.log(msg);
// })

socket.on("disconnect",function(){
    console.log("Disconnected from server");
})

jQuery("#message_form").on("submit",function(e){
    e.preventDefault();

    socket.emit("createMessageEvent",{
        from:"User",
        text:jQuery('[name=message]').val()
    },function(){
        
    }
    )
})
