let dotenv = require("dotenv") 
let express = require("express")
let app = express()
let cors = require("cors")
let router = require("./router/router")
let mongoose = require("mongoose")
let path = require("path")

dotenv.config()
let port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Database Connected ...")).catch((err) => console.error("❌ Database Connection Failed:", err));

let _dirname = path.resolve()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use("/uploads",express.static("uploads"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/",router)

// serve frontend build
app.use(express.static(path.join(_dirname, "/frontend/dist")))

// ✅ fix: catch-all route
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(_dirname, "frontend", "dist", "index.html"));
});

app.listen(port,()=>console.log(`server started on ${port}`))