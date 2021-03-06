import { CREATE_LANE, CREATE_LANES, UPDATE_LANE, DELETE_LANE, EDIT_LANE, MOVE_BETWEEN_LANES } from './LaneActions';
import { DELETE_NOTE, CREATE_NOTE, MOVE_WITHIN_LANE } from '../Note/NoteActions';
import omit from 'lodash/omit';

function moveNotes(array, sourceNoteId, targetNoteId) {
 const sourceIndex = array.indexOf(sourceNoteId);
 const targetIndex = array.indexOf(targetNoteId);
 const arrayCopy = [...array];

 arrayCopy.splice(targetIndex, 0, arrayCopy.splice(sourceIndex, 1)[0]);
 return arrayCopy;
}

const initialState = {};

export default function lanes(state = initialState, action) {
 switch (action.type) {
   case CREATE_LANE:
   case UPDATE_LANE:
     return { ...state, [action.lane.id]: action.lane };
   case EDIT_LANE: {
     const lane = { ...state[action.lane], editing: true };
     return { ...state, [action.lane]: lane };
   }
   case CREATE_LANES:
     return { ...action.lanes };
   case DELETE_NOTE: {
     const newLane = { ...state[action.laneId] };
     newLane.notes = newLane.notes.filter(noteId => noteId !== action.noteId);
     return { ...state, [action.laneId]: newLane };
   }
   case CREATE_NOTE: {
     const newLane = { ...state[action.laneId] };
     newLane.notes = newLane.notes.concat(action.note.id);
     return { ...state, [action.laneId]: newLane };
   }

   case MOVE_WITHIN_LANE: {
     const newLane = { ...state[action.laneId] };
     newLane.notes = moveNotes(newLane.notes, action.sourceId, action.targetId);
     return { ...state, [action.laneId]: newLane };
  }
   case DELETE_LANE: {
     return omit(state, action.laneId);
   }
   case MOVE_BETWEEN_LANES: { 
     const targetLane = { ...state[action.targetLaneId] };;
     targetLane.notes = [...targetLane.notes, action.sourceNoteId]; 
     const sourceLane = { ...state[action.sourceLaneId] }; 
     sourceLane.notes = sourceLane.notes.filter(noteId => noteId !== action.sourceNoteId); 
     return { ...state, [action.targetLaneId]: targetLane, [action.sourceLaneId]: sourceLane }; }
   default:
     return state;
 }
}