let inc = require("../model/insModel")

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

let getInsurance = async(req,res)=>{
  try {
    let data = await inc.find()
    
    return res.status(200).json({ message: "Insurance Find successfully", data: data });
  } catch (err) {
    return res.status(500).json({ error: "Finding failed", details: err.message });
  }
}


module.exports = {addInsurance, getInsurance}