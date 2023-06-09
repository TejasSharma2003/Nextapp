import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import slugify from 'slugify';

const blogsDirectory = path.join(process.cwd(), 'blogs');

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

export const getAllFiles = () => {
  return fs.readdirSync(blogsDirectory);
};

export const getBlogData = (fileName) => {
  //if fileName consist of without md extention then add it
  let file;
  if (!fileName.includes('.md')) {
    file = `${fileName}.md`;
  } else {
    file = fileName;
  }
  //Create file path
  const filePath = path.join(blogsDirectory, `${file}`); //read from post-1.md
  //React content of file from the supplied path
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  //formating markdown file
  const { data, content } = matter(fileContent);
  //creating slug
  const fileNameWithExt = file.replace('.md', '');
  const slug = slugify(fileNameWithExt, { lower: 'true' });

  const blogData = {
    ...data,
    slug,
    content,
  };

  return blogData;
};

export const getAllTags = () => {
  const blogs = getAllBlogs({ sort: false });

  const tagsArray = blogs.flatMap((blog) => blog.tags);
  return removeDuplicates(tagsArray);
};

//By default the function will sort the blogs
export const getAllBlogs = ({ sort = true } = {}) => {
  const blogFiles = getAllFiles();

  const allBlogs = blogFiles.map((blogFile) => {
    return getBlogData(blogFile);
  });

  if (!sort) return allBlogs;

  const sortedBlogs = allBlogs.sort((blogA, blogB) =>
    blogA.data > blogB.data ? -1 : 1
  );

  return sortedBlogs;
};

export const getBlogsByTagName = (tagName) => {
  return getAllBlogs({ sort: false }).filter((blog) =>
    blog.tags.includes(tagName)
  );
};
