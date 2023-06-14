import BlogGrid from '@/ui/BlogGrid';
import Blog from './Blog';

const BlogContainer = (props) => {
  const blogs = props.blogs.map((blog) => {
    return <Blog key={blog.slug} blog={blog} />;
  });

  return <BlogGrid>{blogs}</BlogGrid>;
};

export default BlogContainer;
