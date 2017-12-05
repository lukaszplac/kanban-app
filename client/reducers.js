/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
//import posts from './modules/Post/PostReducer';
import kanban from './modules/Kanban/KanbanReducer';
import lane from './modules/Lane/LaneReducer';
import note from './modules/Note/NoteReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  //posts,
  kanban,
  lane,
  note,
  intl,
});
