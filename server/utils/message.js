var generate_message=function(from,text){

    return{
        from,
        text,
        createdAt:new Date().getTime()
    }
}

var generateLocation_message=function(from,lat,lon){
    return{
        from,
        url:`https://www.google.com/maps?q=${lat},${lon}`,
        createdAt:new Date().getTime()
    }
}


module.exports={generate_message,generateLocation_message};