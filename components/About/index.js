import React from 'react';
import * as classes from './about.module.css';
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';

import me from '@/public/images/site/me.jpg';

const techs = [
  'JavaScript',
  'ReactJS',
  'NodeJS',
  'NextJs',
  'Tailwind',
  'UI/UX',
];

import works from './works';
import Para from '../Para';

const About = () => {
  return (
    <div className=" mx-auto max-w-large-w px-5">
      <SectionHeading>About.</SectionHeading>
      <div className="mb-40 flex flex-col justify-between md:flex-row ">
        <div className="md:max-w-4xl">
          <Para className="mt-16 pr-10 leading-10 md:mt-28">
            Tejas Sharma is a highly skilled full stack web developer with
            extensive experience in building robust web applications. With a
            Bachelor&apos;s degree in Computer Science and Engineering, Tejas
            has been working in the software development industry for over 5
            years
          </Para>
          <Para className="mt-5">
            Here are a few technologies I&lsquo;ve been working with recently:
          </Para>
          <div className="mt-5 grid grid-cols-3  grid-rows-2 gap-y-2">
            {techs.map((tech, idx) => {
              return (
                <span
                  key={idx}
                  className="flex items-center text-2xl text-white/[.7]"
                >
                  <BsDot className="h-10 w-10" />
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
        <div className="relative mt-32 self-center md:mt-0">
          <div
            className={`relative  overflow-hidden rounded-3xl ${classes.me}`}
          >
            <Image
              src={me}
              width={300}
              height={369}
              placeholder="blur"
              alt="me"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span className={`${classes.border} rounded-3xl`}></span>
        </div>
      </div>
      <SectionHeading>What I do.</SectionHeading>
      <div className="mt-16 flex flex-col  gap-x-16  sm:grid sm:grid-cols-2 md:mt-28 lg:grid-cols-4">
        {works.map((work, id) => {
          return (
            <div
              key={id}
              className={` animate-card relative mb-20 flex  flex-col items-center rounded-3xl bg-black-100  px-5 py-12 `}
            >
              <Image
                src={work.image}
                className="mb-20"
                width={70}
                height={70}
                alt="work"
              />
              <div className="text-center">
                <h3 className="mb-5  text-[2.2rem]">{work.job}</h3>
                <Para className="leading-10">{work.description}</Para>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
