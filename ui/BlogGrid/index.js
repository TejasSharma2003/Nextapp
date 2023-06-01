import React from 'react';
import classes from './blogGrid.module.css';

const BlogGrid = props => {
  return (
    <div
      className={`mx-auto grid max-w-large-w gap-10`}
    >
      {props.children}
    </div>
  );
};

export default BlogGrid;
