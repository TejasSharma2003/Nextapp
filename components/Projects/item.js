import React from "react";
import * as classes from "./projects.module.css";
import Image from "next/image";

import Button from "@/elements/Button";

const Item = ({ project }) => {
  return (
    <div className="mb-40 flex flex-col justify-between last:mb-0 md:flex-row md:items-center">
      <div className=" py-10 pb-28 text-2xl md:pr-8">
        <span className="inline-block font-semibold uppercase tracking-[.32em] text-primary">
          Latest work
        </span>
        <h1 className="mb-8 mt-5 text-6xl font-semibold">{project.name}</h1>
        
        <div className="my-4 flex flex-wrap items-center">
          {project.skills.map((skill, idx) => {
            return (
              <span
                key={idx}
                className="mb-5 mr-5 rounded-full bg-black-100 px-6  py-2 text-caption last:mr-0"
              >
                {skill}
              </span>
            );
          })}
        </div>

        <p className="mb-16 max-w-[500px]  text-white-100">
          {project.description}
        </p>
        <div className="flex">
          <Button type="ghost" className="w-auto px-10 ">
            Github Repo
          </Button>
          <Button type="fill" className="ml-8 w-auto px-10">
            Watch Live
          </Button>
        </div>
      </div>
      <div className="relative self-center ">
        <div className={`${classes.project}  overflow-hidden rounded-3xl `}>
          <Image
            src={`/images/site/${project.slug}.jpg`}
            width={350}
            height={300}
            alt="project"
            className=" aspect-square"
          />
        </div>
        <span className={`${classes.border} rounded-3xl`}></span>
      </div>
    </div>
  );
};

export default Item;
