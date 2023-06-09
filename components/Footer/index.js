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
          <span className="mt-auto max-w-sm text-lg text-white-100">
            Copyright @ 2023 by Blog, Inc. All rights reserved.
          </span>
        </div>

        <div>
          <h3 className="mb-10 text-[1.4rem] font-semibold uppercase tracking-wide text-white-100">
            About
          </h3>
          <p className="text-2xl leading-9 text-white">
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
          <div className="flex max-w-lg items-center rounded-full bg-black-100">
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              className="h-full w-full bg-transparent !pl-8"
              wrapperClassName="!mb-0 border-0 !bg-transparent w-full"
            />
            <Button className="!w-auto bg-primary px-6 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
