import uuid from 'uuid/v4';
// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';

// Export Actions
export function createNote(note) {
  return {
    type: CREATE_NOTE,
    note: {
      id: uuid.v4(),
      ...note
    }
  };
};

export function createNotes(notes) {
  return {
    type: CREATE_NOTES,
    notes
  };
};


export function updateNote(updatedNote) {
  return {
    type: UPDATE_NOTE,
    ...updatedNote
  };
};

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  };
};