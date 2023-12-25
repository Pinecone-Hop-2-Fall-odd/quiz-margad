import express from "express";
import { createQuiz, getQuiz, getCategories, getOneQuiz} from "../controllers/quiz-controllers.js";

export const quizRouter = express.Router();

quizRouter.post("/quiz", createQuiz);
quizRouter.get("/quiz", getQuiz);
quizRouter.get("/categories", getCategories);
quizRouter.get("/quiz/:quizCategory", getOneQuiz);