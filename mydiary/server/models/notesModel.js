import mongoose from 'mongoose';
import user from './userModel.js';

const Schema = mongoose.Schema

const noteSchema=new Schema({
    title:{
        type:String,
        default:null,
    },
    body:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: user,
    },
})

const Note = mongoose.model('Note',noteSchema)
export default Note;