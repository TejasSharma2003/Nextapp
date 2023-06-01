import React, { useState, forwardRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import FilterSection from "@/components/Header/components/FilterSection";
import BlogContainer from "@/components/BlogContainer";

import PageTransition from "@/ui/PageTransition";

import Container from "@/ui/Container";

import { fetchAPI } from "@/lib/strapi";

const BlogsPage = ({ blogs, tags, ref }) => {
  const [filteredBlogs, setFilterdBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getBlogBySearch = val => {
    let searchedBlogs = blogs.filter(blog => {
      return blog.attributes.slug.includes(val);
    });

    setFilterdBlogs(searchedBlogs);
    setSearchValue(val);
  };

  let content;
  if (filteredBlogs.length === 0 && searchValue) {
    content = (
      <span className="ro absolute text-4xl">Nothing here but Cricket.</span>
    );
  } else if (filteredBlogs.length > 0) {
    content = <BlogContainer blogs={filteredBlogs} />;
  } else {
    content = <BlogContainer blogs={blogs} />;
  }

  return (
    <PageTransition ref={ref}>
      <Container>
        <div className="mx-auto max-w-large-w">
          <SectionHeading>blogs.</SectionHeading>
          <p className="mt-5 text-2xl text-white-100">
            This should be a paragraph which should eventually include something
            just to fill the gap.
          </p>
        </div>
        <FilterSection tags={tags} getBlogBySearch={getBlogBySearch} />
        <div className="relative">{content}</div>
      </Container>
    </PageTransition>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [blogsRes, tagsRes] = await Promise.all([
    fetchAPI("/blogs", { populate: ["image", "tags"] }),
    fetchAPI("/tags"),
  ]);

  return {
    props: {
      blogs: blogsRes.data,
      tags: tagsRes.data,
    },
    revalidate: 1,
  };
}

export default forwardRef(BlogsPage);
