import Image from "next/image";
import { motion } from "framer-motion";
import { projectCardAnimation } from "../framer/variants";
import dynamic from "next/dynamic";

const ReactTooltip = dynamic(() => import("@huner2/react-tooltip"), {
  ssr: false,
});

export default function ProjectCard({ project, skills }) {
  const {
    title,
    description,
    site,
    // github,
    skills: projectSkills,
    image,
  } = project;

  // Skill icons needed for this project
  const skillIcons = skills.filter((item) => {
    return projectSkills.includes(item.fields.name);
  });

  return (
    <motion.article
      className="w-full max-w-sm bg-gray-800 my-6 rounded-lg overflow-hidden lg:mx-6"
      variants={projectCardAnimation}
    >
      {/* Image */}
      <a href={site} target="_blank" rel="noopener noreferrer">
        <Image
          src={image[0].url}
          alt={title}
          layout="responsive"
          width="400"
          height="200"
          className="w-full h-full"
        />
      </a>

      {/* Text */}
      <section className="p-4 flex flex-col">
        <h3 className="text-white mb-2 text-xl">{title}</h3>
        <p className="text-white mb-4">{description}</p>

        {/* Icons */}
        <section className="flex flex-row flex-wrap">
          {skillIcons
            .sort((a, b) => a.fields.cardOrder - b.fields.cardOrder)
            .map((icon) => {
              const { order, link, name, svg } = icon.fields;
              return (
                <a
                  key={order}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  tabIndex={-1}
                >
                  <motion.div
                    className="w-10 h-10 flex justify-center items-center mr-2 sm:mr-3 my-1 bg-gray-700 rounded-full p-2 cursor-pointer duration-100 focus:outline-none"
                    data-tip={name}
                    variants={projectCardAnimation}
                    initial="initial"
                    whileHover="hover"
                    whileFocus="hover"
                    tabIndex={0}
                    dangerouslySetInnerHTML={{ __html: svg }}
                  />

                  <ReactTooltip
                    place="bottom"
                    type="dark"
                    effect="solid"
                    offset={{ bottom: -5 }}
                    className="react-tooltip"
                    backgroundColor="#111"
                  />
                </a>
              );
            })}
        </section>
      </section>
    </motion.article>
  );
}
