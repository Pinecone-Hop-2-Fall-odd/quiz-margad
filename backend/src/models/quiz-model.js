import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    question: String,
    answers: [{ answer: String, isCorrect: Boolean}],
    category: String
});

export const quizModel = mongoose.model("quiz", quizSchema);

