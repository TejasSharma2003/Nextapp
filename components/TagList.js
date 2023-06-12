import React from 'react';

import Link from 'next/link';

const TagList = props => {
  return (
    <ul className={`${props.wrapperClassName || ''} flex flex-wrap`}>
      {props.children.map((tag, idx) => {
        return (
          <li className="mb-10 mr-5" key={idx}>
            <Link
              href={`/tags/${tag}`}
              key={idx}
              className="underline-offset-4 first:ml-0 hover:underline"
            >
              <span
                className={`rounded-full bg-black-100 px-6 py-4 text-caption ${
                  props.className || ''
                }`}
              >
                {tag}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TagList;
