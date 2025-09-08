let inc = require("../model/insModel")
let csv = require("../model/cvsModel")

let addInsurance = async (req, res) => {
  try {
    let { compony, hospital, address, state, place, pincode } = req.body;

    await inc.create({
      compony, hospital, address, state, place, pincode
    });

    res.status(201).json({ message: "Insurance data saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save insurance data" });
  }
};

let getInsurance = async (req, res) => {
  try {
    let data = await inc.find()
    return res.status(200).json({ message: "Insurance Find successfully", data: data });
  } catch (err) {
    return res.status(500).json({ error: "Finding failed", details: err.message });
  }
}

let adminAboutData = async (req, res) => {
  try {
    let { desc } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "CSV file is required" });
    }

    await csv.create({
      desc,
      csvfile: `/uploads/${req.file.filename}`  // URL that matches express.static
    });

    res.status(201).json({ message: "About Data saved successfully" });
  } catch (err) {
    console.error("adminAboutData error:", err);
    res.status(500).json({ error: "Failed to save about data" });
  }
};


let aboutdata = async(req,res)=>{
  try{
    let data = await csv.find()
  return res.status(201).json({message:"Files Fetched Successfully", data:data})
  }catch(err){
    return res.stat(500).json({message:err})
  }
}


module.exports = { addInsurance, getInsurance, adminAboutData, aboutdata }