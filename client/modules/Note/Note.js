import React, { PropTypes } from 'react';
import styles from './Note.css';

const Note = props =>
  <li className={styles.note} {...props}>{props.children}</li>;

Note.propTypes = {
  children: PropTypes.any,
};

export default Note;