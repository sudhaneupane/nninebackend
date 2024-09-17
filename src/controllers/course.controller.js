import Course from "../../models/course.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//creating the data for course
const createCourse = asyncHandler(async (req, res) => {
  const { Name, Description, Category } = req.body;

  if (
    ![Name, Description, Category].every(
      (field) => typeof field === "string" && field.trim() !== ""
    )
  ) {
    res.status(400).json({ success: false, message: "All field is required" });
  }

  try {
    const course = await Course.create({
      Name,
      Description,
      Category,
    });
    res
      .status(200)
      .json({ success: true, message: "CourseData created successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while created the data ",
    });
    console.log(error);
  }
});

//findAll gave all the data that are created
const getAllCourse = async (req, res) => {
  try {
    const course = await Course.findAll({});
    res
      .status(200)
      .json({ result: course, message: "All courses read  successfully" });

    // console.log(course);
  } catch (error) {
    res.status(404).json({ message: "Could not read all courses" });
  }
};

const getSpecificCourse = async (req, res) => {
  const id = req.params.id; // Use params for URL parameters

  try {
    // Read a single course using `findByPk`
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      result: course,
      message: "Course read successfully",
    });
    console.log(course);
  } catch (error) {
    console.error("Error:", error); // Log the error for debugging
    res
      .status(500)
      .json({ message: "An error occurred while reading the course" });
  }
};

//updating the course
const updateCourse = async (req, res) => {
  //getting the id from parameter
  const id = req.params.id;
  const { Name, Description, Category } = req.body;
  try {
    // Find the course by primary key using `findByPK`
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: "Course not Found" });
    }

    //update the course here
    course.Name = Name || course.Name;
    course.Description = Description || course.Description;
    course.Category = Category || course.Category;

    //save changes to the database
    await course.save();

    //send the response
    res
      .status(200)
      .json({ result: course, message: "Course updated successfully" });
    console.log(course);
  } catch (error) {
    console.log(error); //log the error for debugging purpose
    res
      .status(400)
      .json({ message: "An error occurred while updating the Course" });
  }
};

//deleting the courses
const deleteCourse = async (req, res) => {
  const id = req.params.id; // Extract ID from URL parameters

  try {
    // Find the course by primary key
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Delete the course
    await course.destroy();

    res
      .status(200)
      .json({ result: course, message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error:", error); // Log error details for debugging
    res
      .status(500)
      .json({ message: "An error occurred while deleting the course" });
  }
};

export {
  createCourse,
  getAllCourse,
  getSpecificCourse,
  updateCourse,
  deleteCourse,
};
