import React from "react";
import * as classes from "./about.module.css";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { headers } from "next/dist/client/components/headers";

import { BsDot } from "react-icons/bs";

const techs = [
  "javaScript",
  "ReactJS",
  "NodeJS",
  "NextJs",
  "Tailwind",
  "UI/UX",
];

import works from "./works";

const About = () => {
  return (
    <div className=" mx-auto max-w-large-w px-5">
      <SectionHeading>About.</SectionHeading>
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <div className="pb-28 pt-10 text-2xl leading-10   text-white-100  md:max-w-4xl">
          <p className="pr-10">
            Tejas Sharma is a highly skilled full stack web developer with
            extensive experience in building robust web applications. With a
            Bachelor's degree in Computer Science and Engineering, Tejas has
            been working in the software development industry for over 5 years
          </p>
          <p className="mt-5">
            Here are a few technologies I've been working with recently:
          </p>
          <div className="mt-5 grid grid-cols-3  grid-rows-2 gap-y-2">
            {techs.map((tech, idx) => {
              return (
                <p className="flex items-center">
                  <span>
                    <BsDot />
                  </span>
                  {tech}
                </p>
              );
            })}
          </div>
        </div>
        <div className="relative self-center">
          <div className={`overflow-hidden rounded-3xl ${classes.me}`}>
            <Image
              src="/images/site/me.jpg"
              width={300}
              height={300}
              alt="me"
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className={`${classes.border} rounded-3xl`}></span>
        </div>
      </div>
      <SectionHeading>What I do.</SectionHeading>
      <div className="mt-24 flex  flex-col gap-x-16 sm:grid  sm:grid-cols-2 lg:grid-cols-4">
        {works.map((work, id) => {
          return (
            <div
              className={`animate-card mb-20  flex flex-col items-center rounded-3xl bg-black-100  px-5 py-12`}
            >
              <Image
                src={work.image}
                className="mb-20"
                width={70}
                height={70}
                alt="editing"
              />
              <div className="text-center">
                <h3 className="mb-5 font-primary text-4xl">{work.job}</h3>
                <p className="text-2xl leading-9 text-white-100">
                  {work.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;