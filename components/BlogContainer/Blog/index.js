import * as classes from './blog.module.css';
import Image from 'next/image';

import Avatar from '@/components/Avatar';

import LikeIcon from '@/ui/LikeIcon';
import SaveIcon from '@/ui/SaveIcon';

import Link from 'next/link';
import formatDate from '@/utils/formateDate';
import Para from '@/components/Para';

const POST_COVER_IMG_URL = '/images/posts';

const Blog = ({ blog }) => {
  return (
    <div
      className={` flex h-full max-w-3xl flex-col overflow-hidden  rounded-2xl bg-black-100 lg:max-w-blog-container ${classes.blog} animate-card`}
    >
      <Link href={`/blogs/${blog.slug}`}>
        <div className={`${classes.image}`}>
          <Image
            src={`${POST_COVER_IMG_URL}/${blog.coverImage}`}
            alt={`${blog.slug}`}
            width={370}
            height={246}
            style={{ objectFit: 'cover' }}
            className=" h-full w-full"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-5">
        <ul className={` mt-5 flex overflow-x-auto ${classes.tagsWrapper}`}>
          {blog.tags.map((tagName, idx) => {
            return (
              <li
                key={idx}
                className="ml-4 rounded-full  bg-black-200 px-6 py-2 text-caption first:ml-0"
              >
                <Link
                  href={`/tags/${tagName}`}
                  className="underline-offset-4 first:ml-0 hover:underline"
                >
                  {tagName}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className=" flex flex-1 flex-col">
          <div className="mt-5 flex items-center justify-between">
            <Link href={`/about`} className=" flex items-center">
              <Avatar
                imageSrc="/images/site/avatar.jpg"
                width={40}
                height={40}
              />
              <span className="ml-4 text-2xl font-medium ">Tejas</span>
            </Link>
            <span className="ml-auto  text-caption">
              {formatDate(blog.date)}
            </span>
          </div>
          <Link href={`/blogs/${blog.slug}`}>
            <h2
              className={`${classes.splitTwo} mb-3 mt-5 text-3xl  leading-10`}
            >
              {blog.title}
            </h2>
            <Para className={`${classes.splitTwo} mb-10`}>{blog.excerpt}</Para>
          </Link>
          <div className="mb-5 mt-auto flex items-center justify-between ">
            <LikeIcon />
            <SaveIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
