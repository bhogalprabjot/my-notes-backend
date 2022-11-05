import mongoose from "mongoose";
import Note from "../models/Note.js";


//  get all notes
export const getNotes = async (req, res) => {
    // res.send("This is all the notes")
    console.log("GET /notes");
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }catch(error){
        console.log(error);
        res.status(404).json({message: error.message});
    }

}

// add note

export const createNote = async (req, res) => {
    // res.send("This is all the notes")
    console.log("POST /notes");


    const note = req.body;
    const newNote = new Note(note);

    try{
        await newNote.save();
        res.status(201).josn(newNote);

    }catch(error){
        console.log(error);
        res.status(409).json({message: error.message});
    }

}

// update note
export const updateNote = async (req, res) => {
    // res.send("This is all the notes")
    
    const {id: _id} = req.params;
    const note = req.body;
    
    console.log(`PATCH /notes/${_id}`);

    // check if the ID is valid
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json({"message": `Note with id ${_id} not found!!`});
    
    try{
        const updatedNote = await Note.findByIdAndUpdate(_id, note, {new:true});
        res.status(201).json(updateNote);

    }catch(error){
        console.log(error);
        res.status(404).json({message: error.message});
    }

}


// delete note
export const deleteNote = async (req, res) =>{
    const {id: _id} = req.params;
    console.log(`DELETE /notes/${_id}`);
    

    // check if the ID is valid
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json({"message": `Note with id ${_id} not found!!`});

    try {
        await Note.findByIdAndDelete(_id); 
        res.status(200).json({"message": `Note with id ${_id} deleted successfully!!`});
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
}