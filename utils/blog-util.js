import fs from "fs";
import path from "path";
import matter from "gray-matter";
import slugify from "slugify";

const blogsDirectory = path.join(process.cwd(), "blogs");

export const getAllFiles = () => {
  return fs.readdirSync(blogsDirectory);
};

export const getBlogData = fileName => {
  const segregateExtension = fileName.split(".")[0]; //post-1.md -> post-1
  const filePath = path.join(blogsDirectory, `${segregateExtension}.md`); //read from post-1.md
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const slug = slugify(segregateExtension, { lower: "true" });

  const blogData = {
    ...data,
    slug,
    content,
  };

  return blogData;
};

export const getAllBlogs = () => {
  const blogFiles = getAllFiles();

  const allBlogs = blogFiles.map(blogFile => {
    return getBlogData(blogFile);
  });

  const sortedBlogs = allBlogs.sort((blogA, blogB) =>
    blogA.data > blogB.data ? -1 : 1
  );

  return sortedBlogs;
};
