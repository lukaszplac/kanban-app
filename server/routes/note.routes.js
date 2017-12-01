import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router({mergeParams: true});

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Delete a new Note
router.route('/notes/:noteId').delete(NoteController.deleteNote);

export default router;
