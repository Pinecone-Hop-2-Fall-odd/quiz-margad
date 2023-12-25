import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    title: String
});

export const categoriesModel = mongoose.model("categories", categoriesSchema);