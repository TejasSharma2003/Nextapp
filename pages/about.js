import About from "@/components/About";

import PageTransition from "@/ui/PageTransition";
import { forwardRef } from "react";

const AboutPage = (props, ref) => {
  return (
    <PageTransition ref={ref} props={props}>
      <About />
    </PageTransition>
  );
};

export default forwardRef(AboutPage);
