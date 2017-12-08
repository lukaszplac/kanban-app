import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Lanes from '../Lane/Lanes';
import styles from './Kanban.css';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Kanban extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetch();
  }

  render() {
  return(
    <div className={styles.container}>
      <button
        className={styles.AddLane}
        onClick={() => this.props.createLane({
          name: 'New lane',
        })}
      >Add lane</button>
      <Lanes lanes={this.props.lanes} />
    </div>
    );
  }
}

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
 createLane: createLaneRequest,
 fetch: fetchLanes
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
  )(Kanban);