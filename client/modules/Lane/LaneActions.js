import callApi from '../../util/apiCaller';
import uuid from 'uuid/v4';
import { _lanes } from '../../util/schema';
import { normalize } from 'normalizr';
import { createNotes } from '../Note/NoteActions';

// Export Constants
export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const CREATE_LANES = 'CREATE_LANES';


// Export Actions
export function createLane(lane) {
  return (dispatch) => {
    return callApi('lanes', 'post', lane).then(res => {
      dispatch(createLanes({
        type: CREATE_LANE,
        lane: res
      }));
    });
  };
};

export function createLanes(lanes) {
  return {
    type: CREATE_LANES,
    lanes
  };
};

export function updateLane(lane) {
  return {
    type: UPDATE_LANE,
    ...lane
  };
};

export function deleteLane(id) {
  return {
    type: DELETE_LANE,
    id
  };
};

export function fetchLanes() {
  return (dispatch) => {
    return callApi('lanes').then(res => {
      console.log(res.lanes);
      const normalized = normalize(res.lanes, _lanes);
      const { lanes, notes } = normalized.entities;

      dispatch(createLanes(lanes));
      dispatch(createNotes(notes));
    });
  };
}