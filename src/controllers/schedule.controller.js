import Schedule from "../../models/schedule.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const scheduleData = asyncHandler(async (req, res) => {
  const {
    CourseID,
    ScheduleData,
    ClassDate,
    StartTime,
    EndTime,
    InstructorID,
  } = req.body;
  if (
    ![
      CourseID,
      ScheduleData,
      ClassDate,
      StartTime,
      EndTime,
      InstructorID,
    ].every((field) => typeof field === "string" && field.trim() !== "")
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All field are required" });
  }
  try {
    const schedule = await Schedule.create({
      CourseID,
      ScheduleData,
      ClassDate,
      StartTime,
      EndTime,
      InstructorID,
    });
    res.status(201).json({ message: "Data created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the data" });
  }
});

const getScheduleData = async (req, res) => {
  try {
    const scheduleData = await Schedule.findAll({});
    res.status(200).json(scheduleData);
  } catch (error) {}
};

const updateSchedule = async (req, res) => {
  const { id } = req.params;
  const { StartTime, EndTime } = req.body;
  try {
    //find the user by ID
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      return res.status(400).json({ message: "schedule is not correct" });
    }

    //update the user
    Schedule.StartTime = StartTime || Schedule.StartTime;
    Schedule.EndTime = EndTime || Schedule.EndTime;
    //save changes to  the database
    await Schedule.save();

    //send the response

    res.status(200).json({ message: "Schedule updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the schedule" });
  }
};

const deleteSchedule = async (req, res) => {
  const { id } = req.params;
  const schedule =await Schedule.findByPk(id)
  await schedule.destroy();
  
};

export { scheduleData, getScheduleData, updateSchedule };
