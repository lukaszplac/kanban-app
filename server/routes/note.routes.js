import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router({mergeParams: true});

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Move note
router.route('/move').post(NoteController.moveNote);

// Delete a new Note
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// Edit an existing Note
router.route('/notes/:noteId').put(NoteController.updateNote);

export default router;
