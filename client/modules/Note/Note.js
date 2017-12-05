import React, { PropTypes } from 'react';
import styles from './Note.css';
import Note from '../../components/Edit'

const Notes = ({ notes, laneId, onValueClick, onUpdate, deleteNote})  =>
	  <Note
	  id={note.id}
	  key={note.id}
	  editing={note.editing}>
	  <Edit
	    editing={note.editing}
	    value={note.task}
	    onValueClick={() => onValueClick(note.id)}
	    onUpdate={(task) => onUpdate({
	        ...note,
	        task,
	        editing: false,
	      }
	    )}
	    onDelete={() => deleteNote(note.id, laneId)}
	  />
	</Note>

Notes.propTypes = {
  deleteNote: PropTypes.func,
  onUpdate: PropTypes.func,
  laneId: PropTypes.string,
  onValueClick: PropTypes.func,
  notes: PropTypes.array,
};

export default Note;