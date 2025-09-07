let express = require("express")
let multer = require("multer")
let route = express.Router()
let {addInsurance,getInsurance,adminAboutData, aboutdata} = require("../controller/insController")

let storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./uploads')
    },
    filename: function (req,file,cb){
        cb(null,file.originalname)
    }
})

let upload = multer({storage:storage})

route.post("/addInsurance",addInsurance)
route.get("/getInsurance",getInsurance)
route.post("/adminAboutData",upload.single("csvfile"),adminAboutData)
route.get("/aboutdata",aboutdata)

module.exports = route