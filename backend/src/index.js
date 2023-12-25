import express from "express";
import cors from "cors"
import { userRouter } from "./routes/user-routes.js";
import mongoose from "mongoose";
import { quizRouter } from "./routes/quiz-routes.js";

const app = express();
const port = 8000;  

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(quizRouter);

const connectUserDB = async () => {
    await mongoose.connect("mongodb+srv://M4UL:ihatekenobi123@margad-quiz.yjdbud6.mongodb.net/")
    console.log("database1 connected")
};
const connectQuizDB = async () => {
    await mongoose.connect("mongodb+srv://M4UL:ihatekenobi123@margad-quiz.yjdbud6.mongodb.net/")
    console.log("database2 connected")
};
connectUserDB();
connectQuizDB();

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});