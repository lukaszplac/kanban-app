import callApi from '../../util/apiCaller';
import { lanes } from '../../util/schema';
import { normalize } from 'normalizr';
import {createNotes} from '../Note/NoteActions'

export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const EDIT_LANE = 'EDIT_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const CREATE_LANES = 'CREATE_LANES';
export const MOVE_BETWEEN_LANES = "MOVE_BETWEEN_LANES";

export function moveBetweenLanes(targetLaneId, sourceNoteId, sourceLaneId) {
  return {
    type: MOVE_BETWEEN_LANES,
    targetLaneId,
    sourceNoteId,
    sourceLaneId,
  };
}

export function createLane(lane) {
  return {
    type: CREATE_LANE,
    lane: {
      ...lane,
    }
  };
}

export function createLaneRequest(lane) {
  return (dispatch) => {
    return callApi('lanes', 'post', lane).then(res => {
      dispatch(createLane(res.lane));
    });
  };
};

export function createLanes(lanesData) {
  return {
    type: CREATE_LANES,
    lanes: lanesData,
  };
}

export function updateLane(lane) {
  return {
    type: UPDATE_LANE,
    lane,
  };
}

export function editLane(lane) {
  return {
    type: EDIT_LANE,
    lane,
  };
}

export function updateLaneRequest(lane) {
  return (dispatch) => {
    var path = 'lanes/'+lane.id+'/new';
    return callApi(path, 'put', {"name": lane.name}).then(() => {
      dispatch(updateLane(lane));
    });
  };
}

export function deleteLane(laneId) {
  return {
    type: DELETE_LANE,
    laneId
  };
}

export function deleteLaneRequest(laneId) {
  return (dispatch) => {
    var path = 'lanes/'+laneId;
    return callApi(path, 'delete').then(() => {
      dispatch(deleteLane(laneId));
    });
  };
}

export function fetchLanes() {
  return (dispatch) => {
    return callApi('lanes').then(res => {
      const normalized = normalize(res.lanes, lanes);
      const { lanes: normalizedLanes, notes } = normalized.entities;
     dispatch(createLanes(normalizedLanes));
     dispatch(createNotes(notes));
    });
  };
}