let dotenv = require("dotenv") 
let express = require("express")
let app = express()
let cors = require("cors")
let router = require("./router/router")
let path = require("path")

dotenv.config()
let port = process.env.PORT || 5000

let _dirname = path.resolve()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/", router)

app.use(express.static(path.join(_dirname, "/frontend/dist")))

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(rootDir, "frontend", "dist", "index.html"))
})

app.listen(port, () => console.log(`server started on ${port}`))
