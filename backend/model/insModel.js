let mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/insurance").then(()=>console.log("Database Connected ...")).catch((err) => console.error("❌ Database Connection Failed:", err));

let schema = mongoose.Schema({
    compony:{
        type: String,
    },
    hospital:{
        type: String,
    },
    address:{
        type: String,
    },
    state:{
        type: String
    },
    place:{
        type: String
    },
     pincode:{
        type: String
    }
})

module.exports = mongoose.model("data",schema)