import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Blog from '@/components/BlogContainer/Blog';
import BlogGrid from '@/ui/BlogGrid';

import Container from '@/ui/Container';
import { getAllTags, getBlogsByTagName } from '@/utils/blog-util';

const TaggedBlogsPage = ({ blogs }) => {
  const router = useRouter();

  return (
    <Container>
      <div className="mx-auto mb-20 max-w-large-w">
        <h3 className="py-5 font-primary text-6xl capitalize">
          <span className="mr-2 font-bold">#</span>
          {router.query.tag}
        </h3>
      </div>
      <BlogGrid>
        {blogs.map((blog, idx) => {
          return <Blog key={idx} blog={blog} />;
        })}
      </BlogGrid>
    </Container>
  );
};

export function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { params } = context;

  const blogs = getBlogsByTagName(params.tag);

  return {
    props: {
      blogs,
    },
  };
}

export default TaggedBlogsPage;
