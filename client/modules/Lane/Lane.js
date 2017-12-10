import React, { PropTypes } from 'react';
import NotesContainer from '../Note/NotesContainer';
import Edit from '../../components/Edit'

import styles from './Lane.css';

const Lane = (props) => {
  const {connectDropTarget, lane, laneNotes, updateLane, addNote, deleteLane, editLane } = props;
  const laneId = lane.id;

  return connectDropTarget(
    <div className={styles.lane}>
      <div className={styles.laneHeader}>
        <div className={styles.laneAddNote}>
          <button onClick={() => addNote({ task: 'New Note'}, laneId)}>Add Note</button>
        </div>
        <div className={styles.laneDelete}>
          <button onClick={() => deleteLane(laneId)}>Remove Lane</button>
        </div>
        <div className={styles.valueContainer}>
          <Edit
            editing={lane.editing}
            value={lane.name}
            onValueClick={() => editLane(lane.id)}
            onUpdate={name => updateLane({ ...lane, name, editing: false })}
          />
        </div>
      </div>
      <NotesContainer
        notes={laneNotes}
        laneId={laneId}
      />
    </div>
  );
};

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
  editLane: PropTypes.func
};

export default Lane;
