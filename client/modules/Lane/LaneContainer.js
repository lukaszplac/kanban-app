import { connect } from 'react-redux';
import Lane from './Lane';
import { deleteLane, updateLane, /*editLane*/ } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
	var obj = ownProps.lane;
	var stateNotesArray = Object.values(state.notes);
  return {
    laneNotes: (obj.notes.length > 0 && stateNotesArray.length > 0) ? obj.notes.map(noteId => stateNotesArray.find(note => note.id === noteId)) : []
  };
};

const mapDispatchToProps = { 
		//editLane, 
		deleteLane, 
		updateLane, 
		addNote: createNoteRequest, 
	};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);

