import Schedule from "../../models/schedule.model.js";
// import {
//   fetchCourseApi,
//   fetchInstructorApi,
// } from "../services/api.services.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//creating the schedule..
const createSchedule = asyncHandler(async (req, res) => {
  //here we destructing
  const { CourseId, InstructorId, ClassDate, StartTime, EndTime } = req.body;

  if (
    ![CourseId, InstructorId, ClassDate, StartTime, EndTime].every(
      (field) => typeof field === "string" && field.trim() !== ""
    )
  ) {
    res.status(400).json({ message: "could not found" });
  }
  try {
    const schedule = await Schedule.create({
      CourseId,
      InstructorId,
      ClassDate,
      StartTime,
      EndTime,
    });
    res.status(200).json({ message: "Schedule created successfully" });
    // console.log(schedule);
  } catch (error) {
    console.log(error); // for error
    res.status(400).json({ message: "Schedule could not created" });
  }
});

const getAllSchedule = asyncHandler(async (req, res) => {
  try {
    const schedule = await Schedule.findAll({});
    res
      .status(200)
      .json({ result: schedule, message: "schedule read successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const getSpecificSchedule = async (req, res) => {
  const id = req.params.id;
  try {
    const schedule = await Schedule.findByPk(id);

    if (!schedule) {
      return res.status(400).json({ message: "Could not found schedule" });
    } else {
      res.status(200).json({ message: "Schedule get successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Schedule read unsuccessful" });
  }
};

const updateSchedule = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { CourseId, InstructorId, ClassDate, StartTime, EndTime } = req.body;

  try {
    const schedule = await Schedule.findByPk(id);

    if (!schedule) {
      return res.status(400).json({ message: "could not found" });
    } else {
      //update the schedule here..
      schedule.ClassDate = ClassDate || schedule.ClassDate;
      schedule.StartTime = StartTime || schedule.StartTime;
      schedule.EndTime = EndTime || schedule.EndTime;
      schedule.CourseId = CourseId || schedule.CourseId;
      schedule.InstructorId = InstructorId || schedule.InstructorId;

      //save the changes

      await schedule.save();

      //send the response

      res.status(200).json({ message: "Schedule updated successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: "Schedule update unsuccessful" });
  }
});

//delete
const deleteSchedule = asyncHandler(async (req, res) => {
  let id = req.params.id;

  try {
    const schedule = await Schedule.findByPk(id);

    if (!schedule) {
      return res.status(400).json({ message: "could not found" });
    } else {
      await schedule.destroy();
      res.status(200).json({ message: "Schedule deleted successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: "Schedule delete unsuccessful" });
  }
});

export {
  createSchedule,
  getAllSchedule,
  getSpecificSchedule,
  updateSchedule,
  deleteSchedule,
};
