 
var socket = io();

socket.on("connect",function(){
    console.log("Connected to server");
});



socket.on("newMessage",function(message){
    console.log("Got it",message)
    var li = jQuery("<li></li>");
    li.text(`${message.from}:${message.text}`);
    jQuery("#messages").append(li);
})

socket.on("newLocationMessage",function(message){
    var li = jQuery("<li></li>");
    var a = jQuery(`<a target="_blank">My Current location</a>`);

    li.text(`${message.from}`);
    a.attr('href',message.url);
    li.append(a);
    jQuery("#messages").append(li);
})
socket.on("disconnect",function(){
    console.log("Disconnected from server");
})



var message_text=jQuery('[name=message]');
socket.on("disconnect",function(){
    console.log("Disconnected from server");
})

jQuery("#message_form").on("submit",function(e){
    e.preventDefault();

    socket.emit("createMessageEvent",{
        from:"User",
        text:message_text.val()
    },function(){
        message_text.val("");

    })
})


var locationbutton = jQuery("#send_location");

locationbutton.on("click",function(){
        if(!navigator.geolocation){
            return alert("Geolocation not suppourted by your browser")
        }
        
        locationbutton.attr("disabled","disabled").text("Sending location...") ;       
        navigator.geolocation.getCurrentPosition(function(position){
            locationbutton.removeAttr("disabled").text("Send location");
            socket.emit("create_location_message",{
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
        })
    }),function(){
        locationbutton.removeAttr("disabled").text("Send location");
            alert("Unable to fetch location")
    };
});   