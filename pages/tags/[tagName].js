import React from "react";
import { useRouter } from "next/router";
import { fetchAPI } from "@/lib/strapi";

import Blog from "@/components/BlogContainer/Blog";
import BlogGrid from "@/ui/BlogGrid";

import Container from "@/ui/Container";

const TaggedBlogsPage = ({ blogs }) => {
  const router = useRouter();

  return (
    <>
      <Container className="my-20 max-w-large-w">
        <h3 className="py-5 font-primary text-6xl capitalize">
          <span className="mr-2 font-bold">#</span>
          {router.query.tagName}
        </h3>
      </Container>
      <BlogGrid>
        {blogs.map((blog, idx) => {
          return <Blog key={idx} blog={blog} />;
        })}
      </BlogGrid>
    </>
  );
};

export async function getStaticPaths() {
  const tagsRes = await fetchAPI("/tags", { fields: ["tagName"] });

  return {
    paths: tagsRes.data.map(tag => ({
      params: {
        tagName: tag.attributes.tagName.toLowerCase(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tagsRes = await fetchAPI("/tags", {
    filters: {
      tagName: params.tagName,
    },
    populate: {
      blogs: {
        populate: ["image", "tags"],
      },
    },
  });

  return {
    props: { blogs: tagsRes.data[0].attributes.blogs.data },
    revalidate: 1,
  };
}

export default TaggedBlogsPage;
