import Avatar from '@/components/Avatar';
import style from './markdown.module.css';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import { getStrapiMedia, getStrapiThumbnailImage } from '@/lib/media';
import ImageLoader from '../ImageLoader';

import { RxEyeOpen } from 'react-icons/rx';
import formatDate from '@/utils/formateDate';
import TagList from '@/components/TagList';
import HightlightHeading from '@/ui/HightlightHeading';

const DetailBlog = ({ blog }) => {
  const placeholderImageUrl = getStrapiThumbnailImage(blog.attributes.image);

  //Using hash as name of the image
  const imageName = blog.attributes.image.data.attributes.hash;

  const imageUrl = getStrapiMedia(blog.attributes.image);

  const tags = blog.attributes.tags.data;

  const formattedDate = formatDate(blog.attributes.publishedAt);
  return (
    <div>
      <h2 className="mx-auto max-w-[70rem] py-16 text-center font-primary text-6xl font-bold">
        <HightlightHeading>{blog.attributes.title}</HightlightHeading>
      </h2>

      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between text-[1.3rem] text-white-100">
          <div className="flex items-center ">
            <Avatar width={45} height={45} />
            <div className="ml-5 flex flex-col ">
              <span className="text-white">{blog.attributes.author}</span>
              <span className="inline-block">{formattedDate}</span>
            </div>
          </div>
          <span className="flex items-center">
            <RxEyeOpen className="mr-3 text-4xl" />
            {blog.attributes.readingTime} min read
          </span>
        </div>
        <TagList>{tags}</TagList>
        <div className="relative mb-16 aspect-video max-h-[500px]  overflow-hidden rounded-lg">
          <ImageLoader
            name={imageName}
            orginalPath={imageUrl}
            placeHolderPath={placeholderImageUrl}
          />
        </div>
        <ReactMarkdown
          className={style.reactMarkDown}
          children={blog.attributes.content}
        />
      </div>
    </div>
  );
};

export default DetailBlog;
