var generate_message=function(from,text){

    return{
        from,
        text,
        createdAt:new Date().getTime()
    }
}

module.exports={generate_message};