// Import Actions
import {CREATE_LANE, UPDATE_LANE, DELETE_LANE } from './LaneActions';

// Initial State
const initialState = {};

export default function lanes(state = initialState, action) {
  switch (action.type) {

  	case CREATE_LANE:
  	  return [...state, action.lane];

  	case UPDATE_LANE:
	  return state.map((lane) => {
	    if(lane.id === action.id) {
	      return Object.assign({}, lane, action.updatedLane); //jezeli klucze w lane i updated lane sa takie same to jest obiekty sa laczone i przypisane do pustego obiektu {}
	    }
	    return lane;
	  });

	case DELETE_LANE:
  		return state.filter((lane) => lane.id !== action.id); //filter tak jak i map tworzy nowa tablice
    
    default:
      return state;
  }
};

