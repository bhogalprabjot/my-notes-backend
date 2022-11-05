import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    // id - automatic
    
    // title
    title: String,
    // noteBody
    noteBody: String,
    // createdAt - automatic
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Note = mongoose.model("Note", noteSchema);
export default Note;