import mongoose from "mongoose";

// schema
const boardSchema = new mongoose.Schema({
    writer: String,
    title: String,
    contents: String
})

// collection
export const Board = mongoose.model("Board", boardSchema)