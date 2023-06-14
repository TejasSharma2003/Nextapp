import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import FilterSection from '@/components/Header/components/FilterSection';
import BlogContainer from '@/components/BlogContainer';

import Container from '@/ui/Container';

import Para from '@/components/Para';

import { getAllBlogs, getAllTags } from '@/utils/blog-util';

const BlogsPage = ({ blogs, tags }) => {
  const [filteredBlogs, setFilterdBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getBlogBySearch = (val) => {
    let searchedBlogs = blogs.filter((blog) => {
      return blog.slug.toLowerCase().includes(val.toLowerCase());
    });

    setFilterdBlogs(searchedBlogs);
    setSearchValue(val);
  };

  let content;
  if (filteredBlogs.length === 0 && searchValue) {
    content = (
      <div className="text-center text-4xl leading-snug">
        Nothing here but Crickets.
      </div>
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

        <Para className="mt-10">
          This should be a paragraph which should eventually include something
          just to fill the gap.
        </Para>
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
