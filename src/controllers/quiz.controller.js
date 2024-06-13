import QuizQuestion from "../../models/questionQuiz.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const questionCreate = asyncHandler(async (req, res) => {
  const { question, sub } = req.body;
  try {
    const ques = await QuizQuestion.create({
      question,
      sub,
    });
    res
      .status(201)
      .json({ success: true, msg: "Quiz question created succesfully" });
  } catch (error) {
    res.status(500).json("Error occured while saving quiz");
    console.log(error);
  }
});

const viewQuestion = asyncHandler(async (req, res) => {
  try {
    const getQuestion = await QuizQuestion.findAll({});
    res.status(200).json(getQuestion);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving question");
  }
});

export { questionCreate, viewQuestion };
