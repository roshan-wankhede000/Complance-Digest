let express = require("express")
let route = express.Router()
let {addInsurance,getInsurance} = require("../controller/insController")

route.post("/addInsurance",addInsurance)
route.get("/getInsurance",getInsurance)

module.exports = route