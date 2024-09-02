import Instructor from "../../models/instructor.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//creating the instructor data
const createInstructor = asyncHandler(async (req, res) => {
  const { Name, Email, Phone } = req.body;

  if (
    ![Name, Email, Phone].every(
      (field) => typeof field === "string" && field.trim() !== ""
    )
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const instructor = await Instructor.create({
      Name,
      Email,
      Phone,
    });
    res
      .status(200)
      .json({ result: instructor, message: "Instructor created successfully" });
  } catch (error) {
    console.error("Error creating instructor:", error); // Log the error for debugging
    res
      .status(500)
      .json({ message: "An error occurred while creating the instructor" });
  }
});

//read all the instructors data
const getAllInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findAll({});

    res.status(200).json({ message: "All Instructor read successfully" });
  } catch (error) {
    res.status(400).json({ message: "All user could not read successfully" });
  }
};

// read individual data of instructor
const getSpecificInstructor = asyncHandler(async (req, res) => {
  const id = req.params.id; // getting the id .of instructor from params
  // console.log(id);
  try {
    const instructor = await Instructor.findByPk(id);
    // console.log(instructor);

    if (!instructor) {
      return res.status(404).json({ message: "instructor not found" });
    } else {
      res
        .status(200)
        .json({ result: instructor, message: "Instructor read successfully" });
    }
  } catch (error) {
    // console.log(error);

    res.status(400).json({ message: "Instructor could not read successfully" });
  }
});

// updating the instructor deatils if needed
const updateInstructor = async (req, res) => {
  const id = req.params.id;
  const { Name, Email, Phone } = req.body;
  // destructing when you want to get multiple data from a body

  try {
    const instructor = await Instructor.findByPk(id);

    if (!instructor) {
      return res.status(404).json({ message: "could not found" });
    } else {
      //update the course here
      instructor.Name = Name || instructor.Name;
      instructor.Email = Email || instructor.Email;
      instructor.Phone = Phone || instructor.Phone;

      //save changes
      await instructor.save();

      //send the response
      res.status(200).json({
        result: instructor,
        message: "Instructor updated successfully",
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Instructor could not update succesfully" });
  }
};

//deleting the whole details  about your instructors
const deleteInstructor = async (req, res) => {
  let id = req.params.id; //getting the id of instructor from URL parameter

  try {
    const instructor = await Instructor.findByPk(id); //using this to find the id

    //if instructor is not Available

    if (!instructor) {
      return res
        .status(404)
        .json({ message: "Could not found the instructor" });
    } else {
      //sending the respond

      //deleting the instructor
      await instructor.destroy();
      res.status(200).json({
        result: instructor,
        message: "Instructor deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Instructor could not deleted" });
  }
};

export {
  createInstructor,
  getAllInstructor,
  getSpecificInstructor,
  updateInstructor,
  deleteInstructor,
};
