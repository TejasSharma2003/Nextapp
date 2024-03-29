import React from 'react';
import * as classes from './hightlightHeading.module.css';

const HightlightHeading = (props) => {
  return <span className={`${classes.hightlight}`}>{props.children}</span>;
};

export default HightlightHeading;
