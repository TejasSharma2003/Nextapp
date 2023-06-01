import { fetchAPI } from "@/lib/strapi";
import DetailBlog from "@/components/DetailBlog";

const DetailBlogPage = ({ blog }) => {
  return <DetailBlog blog={blog} />;
};

export async function getStaticPaths() {
  const blogsRes = await fetchAPI("/blogs", { fields: ["slug"] });

  return {
    paths: blogsRes.data.map(blog => ({
      params: {
        slug: blog.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogsRes = await fetchAPI("/blogs", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "author.picture", "tags"],
  });

  return {
    props: { blog: blogsRes.data[0] },
    revalidate: 1,
  };
}

export default DetailBlogPage;
