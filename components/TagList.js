import React from 'react';

import Link from 'next/link';

const TagList = props => {
  return (
    <div className={`py-10 ${props.wrapperClass || ''}`}>
      {props.children.map((tag, idx) => {
        return (
          <Link
            href={`/tags/${tag}`}
            key={idx}
            className="ml-4 underline-offset-4 first:ml-0 hover:underline"
          >
            <span
              className={`rounded-full bg-black-100 px-6 py-4 text-caption ${
                props.className || ''
              }`}
            >
              {tag}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default TagList;
