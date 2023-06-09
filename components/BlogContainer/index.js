import Blog from './Blog';

const BlogContainer = props => {
  const blogs = props.blogs.map(blog => {
    return <Blog key={blog.slug} blog={blog} />;
  });

  return (
    <div className="mx-auto grid  max-w-large-w gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs}
    </div>
  );
};

export default BlogContainer;
