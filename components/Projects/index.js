import React from "react";
import * as classes from "./projects.module.css";
import SectionHeading from "../SectionHeading";
import Item from "./item";

import { projects as projectArray } from "./projects";

const Projects = () => {
  return (
    <div className="mx-auto max-w-large-w px-5">
      <SectionHeading>Projects.</SectionHeading>

      {projectArray.map((project, idx) => {
        return <Item key={idx} project={project} />;
      })}
    </div>
  );
};

export default Projects;
