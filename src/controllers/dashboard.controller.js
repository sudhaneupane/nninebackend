import Enroll from "../../models/enroll.model.js";

//get api::
const getRegisterDetails = async (req, res) => {
    try {
      const data = await Enroll.findAll(); // Use findAll for retrieving all records
      console.log(data);
      res.status(201).json(data);
    } catch (err) {
      console.error(`Error occurred while fetching data from database: ${err}`);
      res.status(500).json({ error: "Internal server error" }); // More specific error message
    }
  };
  

export {getRegisterDetails}