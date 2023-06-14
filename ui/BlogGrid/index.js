import React from 'react';

const BlogGrid = (props) => {
  return (
    <div className="mx-auto grid max-w-large-w justify-center gap-y-20  sm:grid-cols-2 sm:gap-x-20  sm:gap-y-0 lg:grid-cols-3">
      {props.children}
    </div>
  );
};

export default BlogGrid;
