import { quizModel } from "../models/quiz-model.js";
import { categoriesModel } from "../models/categories-model.js";
// export const quiz = [];

export const getQuizzes = async (req, res) => { 
    try {
          const allQuiz = await quizModel.find();
    res.status(200).json({ allQuiz })
    } catch (error) {
        res.status(405).json({ message: "error"})
    }
}

export const createQuiz = async (req, res) => {
    try {
         const body = req.body;

 const quiz = await quizModel.create({
   question: body.question,
   answers: body.answers,
   category: body.category
  })
   res.status(200).json({ quiz })
    } catch (error) {
        res.status(405).json({ message: "error"})
    }
}

export const getCategories = async (req, res) => {
    try { 
        const categories = await categoriesModel.find();
        res.status(200).json({categories})
    } catch (error) {
        res.status(403).json({error: "error"})
    }
}

export const getOneQuiz = async (req, res) => {
    try {
        const params  = req.params;
        const oneQuiz = await quizModel.find({ category: params.category });
        res.status(200).json({ oneQuiz })
    } catch (error) {
        res.status(403).json({ message: "error"})
    }
}
// export const deleteQuiz = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteQuiz = await quizModel.findByIdAndDelete(id);
//         res.status(200).json({ deleteQuiz })
//     } catch (error) {
//         res.status(403).json({ message: "error"})
//     }
// }
