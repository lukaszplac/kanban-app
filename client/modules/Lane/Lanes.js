import React, { PropTypes } from 'react';
import Lane from './LaneContainer.js';
import styles from './Lane.css';

const Lanes = ({ lanes }) => { //lanes jest tutaj tablica obiektow
  return (
    <div>{lanes.map(lane =>
      		<Lane key={lane.id} lane={lane} />
    	)}
    </div>
  );
};


Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;