import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from '../../components/Edit'

const Notes = ({ notes, laneId, editNote, updateNoteRequest, deleteNoteRequest}) => {
  return (<ul className="notes">{notes.map((note) =>
    <Note
	  id={note.id}
	  key={note.id}
	  //editing={note.editing}
		>
	  <Edit
	    editing={note.editing}
	    value={note.task}
	    onValueClick={() => editNote(note.id)}
	    onUpdate={(task) => updateNoteRequest({
	        ...note,
	        task,
	        laneId,
	        editing: false,
	      }
	    )}
	    onDelete={() => deleteNoteRequest(note.id, laneId)}
	  />
	</Note>
  )}</ul>);
};

Notes.propTypes = {
  deleteNoteRequest: PropTypes.func,
  updateNoteRequest: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;