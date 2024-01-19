import { quizModel } from "../models/quiz-model.js";
import { categoriesModel } from "../models/categories-model.js";
// export const quiz = [];

export const getQuizzes = async (req, res) => {
  try {
    const allQuiz = await quizModel.find();
    res.status(200).json({ allQuiz });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

export const createQuiz = async (req, res) => {
  try {
    const body = req.body;

    const quiz = await quizModel.create({
      question: body.question,
      answers: body.answers,
      category: body.category,
    });
    res.status(200).json({ quiz });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await categoriesModel.find();
    res.status(200).json({ categories });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};

export const getOneQuiz = async (req, res) => {
  try {
    const params = req.params;
    const oneQuiz = await quizModel.find({ category: params.category });
    res.status(200).json({ oneQuiz });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};
export const checkQuiz = async (req, res) => {
  try {
    const { answers } = req.body;
    const params = req.params;

    let isPassed = true;

    const quiz = await quizModel.find({ category: params.category });

    Object.keys(answers).map((question) => {
      const answersQuestion = quiz.filter((q) => q.question === question)[0];
      const answer = answersQuestion.answers.find(
        ({ answer }) => answer === answers[question]
      );

      if (!answer.isCorrect) {
        isPassed = false;
      }
    });

    if (isPassed) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "failed" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "err" });
  }
};
