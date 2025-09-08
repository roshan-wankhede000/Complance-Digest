let express = require("express")
let multer = require("multer")
let path = require("path");
let route = express.Router()
let {addInsurance,getInsurance,adminAboutData, aboutdata} = require("../controller/insController")

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')); // absolute path
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

let upload = multer({storage:storage})

route.post("/addInsurance",addInsurance)
route.get("/getInsurance",getInsurance)
route.post("/adminAboutData",upload.single("csvfile"),adminAboutData)
route.get("/get-aboutdata",aboutdata)

module.exports = route
