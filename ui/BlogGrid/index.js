import React from 'react';
import classes from './blogGrid.module.css';

const BlogGrid = props => {
  return (
    <div
      className={`mx-auto grid max-w-large-w gap-10 sm:grid-cols-2 lg:grid-cols-3 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default BlogGrid;
