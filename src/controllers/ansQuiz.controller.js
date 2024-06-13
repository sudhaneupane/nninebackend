import ansQuiz from "../../models/answerQuiz.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const writeAns = asyncHandler(async (req, res) => {
  const { questionId, INA1, INA2, INA3, CA } = req.body;
  try {
    const li = await ansQuiz.create({
      questionId,
      INA1,
      INA2,
      INA3,
      CA,
    });
    res.status(200).json("Quiz question added succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Error occured while saving quiz answer");
  }
});

const viewAns = asyncHandler(async (req, res) => {
  try {
    const getAnswer = await ansQuiz.findAll({});
    res.status(200).json(getAnswer);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving quiz answer");
  }
});

export { writeAns, viewAns };
