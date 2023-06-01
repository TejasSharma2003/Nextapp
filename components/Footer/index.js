import React from "react";
import Logo from "../Logo";
import Input from "../Form/Input";
import Button from "@/elements/Button";
import Image from "next/image";
import Link from "next/link";

const recentPosts = [
  {
    title: "How to become a better developer.",
  },
  {
    title: "Get a sleep of 12 hours is essential.",
  },
  {
    title: "How to wake early in the morning.",
  },
  {
    title: "Get your tasks done with AI easily.",
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-40 rounded-t-[50px] border border-black-100 bg-black-300 px-5 py-28 xl:px-0">
      <div className="absolute bottom-0 left-0">
        <Image src="/images/blob1.svg" width={300} height={300} alt="blob1" />
      </div>
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
            {recentPosts.map((post, idx) => {
              return (
                <li
                  key={idx}
                  className="decoration-3 mb-3 text-2xl text-white underline decoration-white-100  underline-offset-8"
                >
                  <Link href="/">{post.title}</Link>
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
