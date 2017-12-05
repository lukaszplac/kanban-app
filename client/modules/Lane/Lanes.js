import React, { PropTypes } from 'react';
import Lane from './LaneContainer.js';

const Lanes = ({ lanes }) => { //lanes jest tutaj tablica obiektow
  return (
    <div className="lanes">{lanes.map(lane => 
      <Lane className="lane" key={lane.id} lane={lane} />//lane jest obiektem
    )}</div>
  );
};


Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;