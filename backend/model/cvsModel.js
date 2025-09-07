let mongoose = require("mongoose")

let csvShema = mongoose.Schema({
    desc:{
        type:String
    },    
    csvfile:{
        type:String
    }
})

module.exports = mongoose.model("csvFile",csvShema)