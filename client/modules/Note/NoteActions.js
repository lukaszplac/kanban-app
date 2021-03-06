import callApi from '../../util/apiCaller';

export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const MOVE_WITHIN_LANE = 'MOVE_NOTES';

export function moveWithinLane(laneId, targetId, sourceId) {
 return {
   type: MOVE_WITHIN_LANE,
   laneId,
   targetId,
   sourceId,
 };
}

export function createNote(note, laneId) {
 return {
   type: CREATE_NOTE,
   laneId,
   note,
 };
}

export function createNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi('lanes/'+laneId+'/notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}


export function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    notes: notesData,
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note,
  };
}

export function updateNoteRequest(note) {
  return (dispatch) => {
    var path = 'lanes/'+note.laneId+'/notes/'+note.id;
    return callApi(path, 'put', {"task": note.task}).then(() => {
      dispatch(updateNote(note));
    });
  };
}

export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    noteId,
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}

export function deleteNoteRequest(noteId, laneId) {
  return (dispatch) => {
    var path = 'lanes/'+laneId+'/notes/'+noteId;
    return callApi(path, 'delete').then(() => {
      dispatch(deleteNote(noteId, laneId));
    });
  };
}


