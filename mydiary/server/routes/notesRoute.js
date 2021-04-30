import express from 'express';
import {
    getNotes,
    postNotes,
    patchNotes,
    deleteNotes,
  } from "../controller/NotesController.js";

const router = express.Router();

router.get('/',getNotes);
router.post('/',postNotes);
router.patch('/:id', patchNotes);
router.delete('/:id',deleteNotes);

export default router;

