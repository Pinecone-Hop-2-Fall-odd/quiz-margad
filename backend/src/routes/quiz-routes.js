import express from "express";
import {
  createQuiz,
  getQuizzes,
  getCategories,
  getOneQuiz,
  checkQuiz,
} from "../controllers/quiz-controllers.js";
import { verifyToken } from "../middleware/auth.js";

export const quizRouter = express.Router();

quizRouter.post("/quiz", verifyToken, createQuiz);
quizRouter.get("/quiz", verifyToken, getQuizzes);
quizRouter.get("/categories", getCategories);
quizRouter.get("/quiz/:category", verifyToken, getOneQuiz);
quizRouter.post("/quizPage/:category", verifyToken, checkQuiz);
