import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { projectAnimation } from "../framer/variants";
import { InView } from "react-intersection-observer";

export default function Projects({ projects, skills }) {
  return (
    <InView threshold={0} triggerOnce={true}>
      {({ ref, inView }) => (
        <section id="projects" className="mb-4 lg:mb-14" ref={ref}>
          <div className="container py-6 flex flex-col items-center">
            {/* Title */}
            <motion.h2
              className="text-3xl inline-block relative mb-6 text-white"
              variants={projectAnimation}
              initial="initialTitle"
              animate={inView && "animateTitle"}
            >
              Latest Projects
              <div className="absolute w-full border-b-2 border-primary"></div>
            </motion.h2>

            {/* Projects */}
            <motion.section
              className="w-full flex flex-row flex-wrap justify-center"
              variants={projectAnimation}
              initial="hidden"
              animate={inView && "show"}
            >
              {projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.id}
                    project={project.fields}
                    skills={skills}
                  />
                );
              })}
            </motion.section>
          </div>
        </section>
      )}
    </InView>
  );
}
