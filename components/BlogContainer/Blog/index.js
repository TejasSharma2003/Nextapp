import * as classes from "./blog.module.css";
import Image from "next/image";

import Avatar from "@/components/Avatar";

import LikeIcon from "@/ui/LikeIcon";
import SaveIcon from "@/ui/SaveIcon";

import { getStrapiThumbnailImage } from "@/lib/media";

import Link from "next/link";
import formatDate from "@/utils/formateDate";
import TagList from "@/components/TagList";
import BlurImage from "@/components/BlurImage";
import ImageLoader from "@/components/ImageLoader";
const Blog = ({ blog }) => {
  const { alternativeText, width, height } =
    blog?.attributes?.image?.data?.attributes;

  const formattedDate = formatDate(blog?.attributes?.publishedAt);

  const tags = blog.attributes.tags.data;

  return (
    <Link
      href={`/blogs/${blog.attributes.slug}`}
      className="flex justify-center"
    >
      <div
        className={` flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl  bg-black-100 lg:max-w-blog-container ${classes.blog} animate-card`}
      >
        <div className={`${classes.image}`}>
          <BlurImage
            src={getStrapiThumbnailImage(blog?.attributes?.image)}
            alt={alternativeText}
            width={width}
            height={height}
          />
        </div>

        <div className="flex flex-1 flex-col px-5">
          <div className="my-4 flex">
            {tags.map((tag, idx) => {
              return (
                <span
                  key={idx}
                  className="ml-4 rounded-full  bg-black-200 px-6 py-2 text-caption first:ml-0"
                >
                  {tag.attributes.tagName}
                </span>
              );
            })}
          </div>

          <div className="flex flex-1 flex-col">
            <div className="my-4 flex items-center text-white-100">
              <Avatar imageSrc="/images/site/me.jpg" width={40} height={40} />
              <span className="ml-4 text-2xl font-medium ">Tejas</span>
              <span className="ml-auto  text-caption ">{formattedDate}</span>
            </div>
            <h2 className={`${classes.splitTwo} mb-2 text-3xl  leading-10`}>
              {blog.attributes.title}
            </h2>
            <p
              className={`${classes.splitTwo} mb-8 text-2xl text-white-200/[.8]`}
            >
              {blog.attributes.description}
            </p>
            <div className="mb-5 mt-auto flex items-center justify-between ">
              <LikeIcon />
              <SaveIcon />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
