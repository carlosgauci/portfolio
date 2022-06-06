import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import NavModal from "../components/NavModal";
import { AnimatePresence } from "framer-motion";
import { base } from "../utils/airtable";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { InView } from "react-intersection-observer";
import { getPlaiceholder } from "plaiceholder";

export default function Home({ about, skills, projects }) {
  const [navOpen, setNavOpen] = useState(false);
  const [navItemSelected, setNavItemSelected] = useState(0);

  useEffect(() => {
    //disable scroll when nav is open
    const html = document.querySelector("html");
    navOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible");
  }, [navOpen]);

  return (
    <div>
      <Head>
        <title>Carlos Gauci | Web Developer</title>
        <meta
          name="description"
          content="Web developer specializing in Javascript/React, Node.js, and Python"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header
        setNavOpen={setNavOpen}
        navItemSelected={navItemSelected}
        setNavItemSelected={setNavItemSelected}
      />

      <main>
        {/* About / Skills */}
        <InView
          threshold={0.5}
          as="section"
          onChange={(inView) => inView && setNavItemSelected(1)}
        >
          <About about={about} />
        </InView>
        <Skills skills={skills} />

        {/* Projects */}
        <InView
          threshold={0.2}
          as="section"
          onChange={(inView) => inView && setNavItemSelected(2)}
        >
          <Projects skills={skills} projects={projects} />
        </InView>

        {/* Contact */}
        <InView
          threshold={0.8}
          as="section"
          onChange={(inView) => inView && setNavItemSelected(3)}
        >
          <Contact />
        </InView>
      </main>
      <Footer />
      {/* Nav */}
      <AnimatePresence>
        {navOpen && (
          <NavModal
            setNavOpen={setNavOpen}
            navItemSelected={navItemSelected}
            setNavItemSelected={setNavItemSelected}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export async function getStaticProps() {
  let about = await base("About").select({}).firstPage();
  about = about.map((r) => ({
    title: r?.fields?.title,
    role: r?.fields?.role,
    description: r?.fields?.description,
    image: { url: r?.fields?.image[0].url },
  }))[0];
  const { base64 } = await getPlaiceholder(about.image.url);
  about.image.blur = base64;

  let skills = await base("Skills").select({}).firstPage();
  skills = skills
    .filter((s) => s?.fields?.published)
    .map((s) => ({ id: s?.id, fields: s?.fields }));

  let projects = await base("Projects").select({}).firstPage();
  projects = projects
    .filter((p) => p?.fields?.enabled)
    .map((r) => ({
      id: r?.id,
      title: r?.fields?.title,
      description: r?.fields?.description,
      image: { url: r?.fields?.image[0].url },
      skills: r?.fields?.skills,
      order: r?.fields?.order,
      url: r?.fields?.url,
    }));

  for (let i in projects) {
    const { base64 } = await getPlaiceholder(projects[i].image.url);
    projects[i].image.blur = base64;
  }

  return {
    props: {
      about,
      skills,
      projects,
    },
  };
}
