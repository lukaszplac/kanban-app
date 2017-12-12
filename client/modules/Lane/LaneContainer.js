import { connect } from 'react-redux';
import Lane from './Lane';
import { deleteLaneRequest, updateLaneRequest, editLane, moveBetweenLanesRequest } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

const noteTarget = {
 drop(targetProps, monitor) {
   const sourceProps = monitor.getItem();
   const { id: noteId, laneId: sourceLaneId } = sourceProps;
   if (!targetProps.lane.notes.find(note => note === noteId)) {
     targetProps.moveNoteTo(
       targetProps.lane.id,
       noteId,
       sourceLaneId
     )
   }
 },
};

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
		moveNoteTo: moveBetweenLanesRequest,
		editLane
	};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, noteTarget, (dragConnect) => ({
    connectDropTarget: dragConnect.dropTarget()
  }))
)(Lane);

