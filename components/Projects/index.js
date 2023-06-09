import React from "react";
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
