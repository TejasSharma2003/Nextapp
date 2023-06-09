import DetailBlog from '@/components/DetailBlog';
import { getAllFiles, getBlogData } from '@/utils/blog-util';

const DetailBlogPage = ({ blog }) => {
  return <DetailBlog blog={blog} />;
};

export function getStaticPaths() {
  const blogFilesNames = getAllFiles();

  const slugs = blogFilesNames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const blogData = getBlogData(slug);

  return {
    props: {
      blog: blogData,
    },
  };
}

export default DetailBlogPage;
