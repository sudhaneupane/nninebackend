import { asyncHandler } from "../utils/asyncHandler.js";
import Enroll from "../../models/enroll.model.js"; // Adjust path based on your project structure

const enrollUser = asyncHandler(async (req, res) => {
    const { email, name, phone, levelOfEducation, courses, schoolCollegeName, message } = req.body;
    if (![email, name, phone].every((field) => typeof field === 'string' && field.trim() !== "")) {
        console.log(`All fields required error`);
        return res.status(400).json({ success: false, msg: "All fields are required" });
    }

    if (!Array.isArray(courses) || courses.length === 0) {
        console.log(`Courses are required error`);
        return res.status(400).json({ success: false, msg: "Courses are required" });
    }
    try {
        const user = await Enroll.create({
            email,
            name,
            phone,
            levelOfEducation,
            courses,
            schoolCollegeName,
            message
        });
        res.status(201).json({ msg: "Course registered successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "An error occurred while saving user data" });
    }
});

export { enrollUser };
