import { quizModel } from "../models/quiz-model.js";
import { categoriesModel } from "../models/categories-model.js";
export const quiz = [];

export const getQuiz = async (req, res) => { 
    const quizData = await quizModel.find({});
    res.status(200).json({ quiz: quizData })
}

export const createQuiz = async (req, res) => {
    const body = req.body;

  await quizModel.create({
   question: body.question,
   answers: body.answers,
   category: body.category
  })
   res.status(200).json({ quiz: quiz })
}

export const getCategories = async (req, res) => {
    try { 
        const categories = await categoriesModel.find();
        res.status(202).json({categories})
    } catch (error) {
        res.status(403).json({error: "error"})
    }
}

export const getOneQuiz = async (req, res) => {
    const params = req.params;
    try {
        const getOneQuiz = await quizModel.find({ category: params.quizCategory});
        res.status(205).json({ getOneQuiz: getOneQuiz})
    } catch (error) {
        res.status(403).json({error: "error"})
    }
}

