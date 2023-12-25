import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: Date,
    email: {type: String, required: true},
    password: {type: String, required: true},
});

export const userModel = mongoose.model("user", userSchema);