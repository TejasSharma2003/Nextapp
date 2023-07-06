import { useEffect, useState } from 'react';
import Logo from '../Logo';
import Input from '../Form/Input';
import Button from '@/elements/Button';
import Link from 'next/link';

const Footer = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch('/api/latest-blogs');

        if (res.status !== 200) {
          throw new Error('Something went wrong.');
        }
        const { blogs } = await res.json();

        setRecentBlogs(blogs);
      } catch (err) {
        console.log(err);
      }
    };

    getBlogs();
  }, []);

  return (
    <footer className="relative mt-40 rounded-t-[50px] border border-black-100 bg-black-300 px-5 py-28 xl:px-0">
      <div className=" mx-auto grid max-w-large-w gap-x-20 gap-y-20 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-4 ">
        <div className="flex flex-col items-start">
          <Logo />
          <span className="mt-10 max-w-sm text-[1.2rem] text-white-100 sm:mt-auto">
            Design and Develop by Tejas Sharma 2023
          </span>
        </div>

        <div>
          <h3 className="mb-10 text-[1.4rem] font-semibold uppercase tracking-wide text-white-100">
            About
          </h3>
          <p className="max-w-2xl text-2xl leading-9 text-white sm:max-w-full">
            Tejas Sharma is a skilled web developer with over 5 years of
            experience in the industry. He specializes in front-end development,
            with expertise in HTML, CSS, and JavaScript.
          </p>
        </div>

        <div>
          <h3 className="mb-10 text-[1.4rem] font-semibold uppercase tracking-wide text-white-100">
            Recent Post
          </h3>
          <ul>
            {recentBlogs.map((blog, idx) => {
              return (
                <li
                  key={idx}
                  className="decoration-3 mb-3 mt-5 text-2xl text-white first:mt-0"
                >
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className=" underline underline-offset-4"
                  >
                    {blog.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="mb-10 text-[1.5rem] font-semibold uppercase tracking-wide text-white-100">
            News letter
          </h3>
          <div className=" max-w-2xl sm:max-w-full">
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              className="!px-6"
            />
            <Button type="fill" className="w-full">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
