var moment  = require(moment);

var generate_message=function(from,text){

    return{
        from,
        text,
        createdAt:moment().valueof()
    }
}
var generateLocation_message=function(from,lat,lon){
    return{
        from,
        url:`https://www.google.com/maps/q${lat},${lon}`,
        createdAt:moment().valueof() 
    }
}

module.exports={generate_message,generateLocation_message};