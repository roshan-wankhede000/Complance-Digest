require("dotenv").config(); // load env first

let express = require("express");
let app = express();
let cors = require("cors");
let router = require("./router/router");
let path = require("path");

let port = process.env.PORT || 5000;

// absolute path to project root
let rootDir = path.resolve();

app.use(cors({
  origin: "https://complance-digest.onrender.com",
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// backend routes
app.use("/", router);

// serve frontend build
app.use(express.static(path.join(rootDir, "frontend", "dist")));

// ✅ fix: catch-all route
app.get("/*", (req, res) => {
  res.sendFile(path.join(rootDir, "frontend", "dist", "index.html"));
});

app.listen(port, () => console.log(`🚀 Server started on ${port}`));
