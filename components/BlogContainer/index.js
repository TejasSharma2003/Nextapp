import BlogGrid from '@/ui/BlogGrid';
import Blog from './Blog';

const BlogContainer = props => {
  return (
    <BlogGrid>
      {props.blogs.map((blog, idx) => {
        return <Blog key={idx} blog={blog} />;
      })}
    </BlogGrid>
  );
};

export default BlogContainer;
