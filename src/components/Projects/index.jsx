import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ChallengeCard from "../ChallengeCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import work1 from "../../assets/Images/twitter.jpg";
import work2 from "../../assets/Images/summarist.jpg";
import work3 from "../../assets/Images/NFT.jpg";
import work4 from "../../assets/Images/library.jpg";
import madam from "../../assets/Images/madam.jpg";
import sky from "../../assets/Images/skyview.jpg";
import butterfly from "../../assets/Images/butterfly.jpg";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [project, showProject] = useState(true);
  const [chalenges, showchalenges] = useState(false);

  const handleProjects = () => {
    showProject(true);
    showchalenges(false);
  };
  const handlechalenges = () => {
    showProject(false);
    showchalenges(true);
  };

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const chalenge = [
    {
      client: "Madam",
      img: madam,
      git: "https://github.com/Khosroshariat/madam",
      web: "https://khosroshariat.github.io/madam/",
    },
    {
      client: "SkyView",
      img: sky,
      git: "https://github.com/Khosroshariat/skyview",
      web: "https://skyview-rosy.vercel.app/",
    },
    {
      client: "Butterflies",
      img: butterfly,
      git: "https://github.com/Khosroshariat/Butterflies",
      web: "https://khosroshariat.github.io/Butterflies/",
    },
  ];

  const works = [
    {
      title: "Twitter clone",
      img: work1,
      tech: "Tech : Next.js, Redux Toolkit, Firebase Authentication, Material-UI, Tailwind CSS",
      detail:
        "This project aims to replicate the core functionality of Twitter, allowing users to post tweets, and engage with content through likes and comments. It utilizes Next.js for server-side rendering, Material UI for styling components, Firebase for real-time database and authentication, and Tailwind CSS for additional styling and layout.",
      git: "https://github.com/Khosroshariat/twitter",
      web: "https://twitter-two-chi.vercel.app/",
    },
    {
      title: "Summarist",
      img: work2,
      tech: "Tech : Next.js, Redux Toolkit, Firebase Authentication, Material-UI, Tailwind CSS",
      detail:
        "This project aims to create an online book library using Next.js, incorporating various modern web development technologies for seamless user experience and efficient management of resources. The key features include user authentication using Firebase Authentication, state management with Redux Toolkit, dynamic routing for individual book pages, skeleton loading for smoother UI transitions, Material-UI for styling, and integrating an audio player for audiobooks. Additionally, it utilizes API methods to fetch book data for display.",
      git: "https://github.com/Khosroshariat/advanced-inter",
      web: "https://summarist-omega.vercel.app/",
    },
    {
      title: "NFT Marketplace",
      img: work3,
      tech: "Tech : React.js, Axios, React Router for dynamic page routing, Skeleton Loading, CSS 3",
      detail:
        "This project aims to create an online NFT marketplace using React.js for building a dynamic and responsive user interface, enhance user experience by displaying skeleton loading screens while fetching data to reduce perceived loading times, create dynamic routes for each item to allow users to view detailed information and interact with individual items seamlessly, and utilize Axios, a popular HTTP client for JavaScript, to efficiently fetch data.",
      git: "https://github.com/Khosroshariat/khosro-internship",
      web: "https://khosro-internship.vercel.app/",
    },
    {
      title: "Book Store",
      img: work4,
      tech: "Tech : React.js, React Router for dynamic page routing, Skeleton Loading, CSS 3",
      detail:
        "This project is a web application designed to allow users to browse and explore a collection of books online. It utilizes React.js for its frontend development, providing a smooth and responsive user experience. Instead of fetching data from an external API, the app uses internal fake data to simulate a bookstore's inventory. This allows for rapid development and testing without relying on external services. When the app is fetching book data or transitioning between pages, skeleton loading placeholders are displayed to indicate that content is loading. This provides a smoother user experience and reduces perceived loading times.",
      git: "https://github.com/Khosroshariat/newlibrary",
      web: "https://newlibrary.vercel.app/",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              04
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Projects & Challenges
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="flex justify-center items-center mt-4 space-y-6">
            <ul className="flex justify-center items-center gap-6 font-semibold">
              <li
                onClick={handleProjects}
                className={`${
                  project
                    ? "text-rose-500  border-rose-500 "
                    : "text-gray-400 border-gray-500  "
                } 
          duration-300 border-b-2 pb-1  cursor-pointer hover:bg-slate-400 hover:bg-opacity-30 p-2 rounded-md
          `}
              >
                Projects
              </li>
              <li
                onClick={handlechalenges}
                className={`${
                  chalenges
                    ? "text-rose-500 border-rose-500"
                    : "text-gray-400 border-gray-500"
                } 
          duration-300 border-b-2 pb-1  cursor-pointer hover:bg-slate-400 hover:bg-opacity-30 p-2 rounded-md
          `}
              >
                Challenges
              </li>
            </ul>
          </div>
          <div className="projects--grid--content--works">
            {project && (
              <div>
                {works.map((item, index) => {
                  return <WorkCard item={item} key={index} />;
                })}
              </div>
            )}
          </div>
          <div className="projects--grid--content--works">
            {chalenges && (
              <div>
                {chalenge.map((item, index) => {
                  return <ChallengeCard item={item} key={index} />;
                })}
              </div>
            )}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
