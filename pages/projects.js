import React, { forwardRef } from "react";

import Projects from "@/components/projects";
import PageTransition from "@/ui/PageTransition";

const ProjectsPage = ref => {
  return (
    <PageTransition ref={ref}>
      <Projects />
    </PageTransition>
  );
};

export default forwardRef(ProjectsPage);
