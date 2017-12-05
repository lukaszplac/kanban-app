import React from 'react';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';
import { createLane, fetchLanes } from '../Lane/LaneActions';

class Kanban extends React.Component {
  render() {
    const { lanes, createLane } = this.props;

    return (
      <div>
        <button className="add-lane"
  				onClick={() => createLane({
    			name: 'New lane'})}>
  		  </button>
        <Lanes lanes={lanes} />
      </div>
    );
  }
}

//Kanban.need = [() => { return fetchLanes(); }];

const mapStateToProps = state => ({
lanes: Array.isArray(state.lanes) ? Object.values(state.lanes) : []
});

const mapDispatchToProps = {
  createLane
}

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);