import React, { PropTypes } from 'react';
import styles from './Note.css';
import {DragSource, DropTarget} from 'react-dnd';
import { compose } from 'redux';
import ItemTypes from '../Kanban/ItemTypes';

const noteSource = {
  beginDrag(props) {
    return {
      id: props.id,
      laneId: props.laneId,
    };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    if(targetProps.id !== sourceProps.id && targetProps.laneId === sourceProps.laneId) {
      targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
    }
  }
};

class Note extends React.Component {
  render() {
    const {connectDragSource,
    	   connectDropTarget,
    	   isDragging,
           editing,
           children} = this.props;

    const dragSource = editing ? a => a : connectDragSource;

    return dragSource(connectDropTarget(
      <li className={styles.note}
        style={{
        opacity: isDragging ? 0 : 1
      }} >{children}</li>
    ));
  }
}

Note.propTypes = {
  children: PropTypes.any,
};

export default compose(
	DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
  		connectDragSource: connect.dragSource(),
  		isDragging: monitor.isDragging()})),
	DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
	    connectDropTarget: connect.dropTarget()
	 }))
	)(Note)
