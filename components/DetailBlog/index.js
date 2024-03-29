import Avatar from '@/components/Avatar';
import style from './markdown.module.css';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import ImageLoader from '../ImageLoader';

import { RxEyeOpen } from 'react-icons/rx';
import formatDate from '@/utils/formateDate';
import TagList from '@/components/TagList';
import HightlightHeading from '@/ui/HightlightHeading';

const POST_COVER_IMG_URL = '/images/posts';

const DetailBlog = ({ blog }) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mx-auto max-w-[70rem] mb-16 text-center font-primary text-5xl sm:text-6xl font-bold !leading-[1.3]">
          {blog.title}
        </h1>
        <div className="flex items-center justify-between text-[1.3rem] text-white-100">
          <div className="flex items-center ">
            <Avatar width={40} height={40} />
            <div className="ml-5 flex flex-col ">
              <span className="text-white">{blog.author}</span>
              <span className="inline-block">{formatDate(blog.date)}</span>
            </div>
          </div>
          <span className="flex items-center">
            <RxEyeOpen className="mr-3 text-4xl" />
            {blog.readingTime} min read
          </span>
        </div>
        <TagList wrapperClassName="pt-10">{blog.tags}</TagList>
        <div className="relative mb-16 aspect-video max-h-[500px]  overflow-hidden rounded-lg">
          <ImageLoader
            name={blog.slug}
            orginalPath={`${POST_COVER_IMG_URL}/${blog.coverImage}`}
            placeHolderPath={`${POST_COVER_IMG_URL}/${blog.coverImage}`}
          />
        </div>
        <ReactMarkdown
          className={style.reactMarkDown}
          children={blog.content}
        />
      </div>
    </div>
  );
};

export default DetailBlog;
