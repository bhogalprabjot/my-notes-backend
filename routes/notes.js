import express from "express";
import { getNotes, createNote, updateNote, deleteNote } from "../controllers/notes.js";

const router = express.Router();

// localhost:5000/notes - GET 
router.get('/', getNotes);

// localhost:5000/notes - POST
router.post('/', createNote);

// localhost:5000/notes/id - PATCH
router.patch('/:id', updateNote);


// localhost:5000/notes/id - DELETE
router.delete('/:id', deleteNote);


export default router;
