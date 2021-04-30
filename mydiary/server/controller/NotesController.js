import Mongoose from 'mongoose';
import Note from '../models/notesModel.js';



// @route: GET/notes
//@puropose : get all notes from db
export const getNotes = async (req, res) => {
    try {
        const notefetch = await Note.find();
        res.status(200).json(notefetch); 
    } catch (error) {
        res.status(404).json({message: error.message });
        
    }
};

//@route: POST/notes
//@purpose: : Post new note by user
export const postNotes = async (req , res ) => {
    var post = req.body;
    console.log(req.body);

    var newNotes = new Note(post);

    try {
        console.log(req.body);
        await newNotes.save();
        res.status(201).json(newNotes)
    } catch (error) {
        res.status(409).json({message:error.message});
    }
};

// @route: PATCH/notes
// @purpose: PATCH or update the notes
export const patchNotes = async (req , res) => {
    const {id: id} = req.params;
    const post = req.body;

    if(!Mongoose.Types.ObjectId.isValid(id))
        res.status(404).send("No post with that is Found");
   
    const updateNotes = await Note.findByIdAndUpdate(
        id,
        {...post,id},
        {
            new: true,
        }
    );
    res.json(updateNotes);    
};


// @route: DELETE/notes
export const deleteNotes = async (req,res) => {
    const {id: id} = req.params;
    console.log(req.params);
    if(!Mongoose.Types.ObjectId.isValid(id))
        res.status(404).send("No post with that is Found");
    try {
        await Note.findByIdAndDelete(id);
        res.status(200).json({message: "Post deleted successfully"});
    } catch (error) {
        res.status(404).json({message: error});
    }
}

