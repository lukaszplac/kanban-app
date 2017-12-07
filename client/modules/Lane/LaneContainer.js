import { connect } from 'react-redux';
import Lane from './Lane';
import { deleteLaneRequest, updateLaneRequest, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
	var obj = ownProps.lane;
	var stateNotesArray = Object.values(state.notes);
  return {
    laneNotes: (obj.notes.length > 0 && stateNotesArray.length > 0) ? obj.notes.map(noteId => stateNotesArray.find(note => note.id === noteId)) : []
  };
};

const mapDispatchToProps = { 
		deleteLane: deleteLaneRequest, 
		updateLane: updateLaneRequest, 
		addNote: createNoteRequest,
		editLane
	};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);

