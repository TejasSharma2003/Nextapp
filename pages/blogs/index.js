import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import FilterSection from '@/components/Header/components/FilterSection';
import BlogContainer from '@/components/BlogContainer';

import Container from '@/ui/Container';

import { getAllBlogs, getAllTags } from '@/utils/blog-util';

const BlogsPage = ({ blogs, tags }) => {
  const [filteredBlogs, setFilterdBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getBlogBySearch = (val) => {
    let searchedBlogs = blogs.filter((blog) => {
      return blog.slug.includes(val);
    });

    setFilterdBlogs(searchedBlogs);
    setSearchValue(val);
  };

  let content;
  if (filteredBlogs.length === 0 && searchValue) {
    content = (
      <span className="absolute left-1/2 top-10 -translate-x-1/2 text-4xl">
        Nothing here but Crickets.
      </span>
    );
  } else if (filteredBlogs.length > 0) {
    content = <BlogContainer blogs={filteredBlogs} />;
  } else {
    content = <BlogContainer blogs={blogs} />;
  }

  return (
    <Container>
      <div className="mx-auto max-w-large-w">
        <SectionHeading>blogs.</SectionHeading>
        <p className="mt-5 text-2xl text-white-100">
          This should be a paragraph which should eventually include something
          just to fill the gap.
        </p>
      </div>
      <FilterSection tags={tags} getBlogBySearch={getBlogBySearch} />
      <div className="relative min-h-[30vh]">{content}</div>
    </Container>
  );
};

export function getStaticProps() {
  const blogs = getAllBlogs();
  const tags = getAllTags();

  return {
    props: {
      blogs,
      tags,
    },

    revalidate: 1,
  };
}

export default BlogsPage;
