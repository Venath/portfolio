import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";

import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState, useEffect, useRef } from "react";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Typed from "typed.js";
import deved from "../public/venath.jpeg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [showEyes, setShowEyes] = useState(false);
  const typedRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const academicsRef = useRef(null);

  const projects = [
    {
      title: "Personal Portfolio",
      tag: "Personal · 2024",
      description:
        "The site you're looking at. A responsive portfolio with dark mode, typing effects, and scroll animations.",
      stack: ["Next.js", "React", "Tailwind CSS", "AOS"],
      repo: "https://github.com/Venath/portfolio",
      live: "https://venath.github.io/portfolio/",
    },
    {
      title: "BornToBattle",
      tag: "Academic · Full Stack",
      description:
        "A MERN-stack web platform for managing a real-world dancing competition — registrations, judging, and results.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      repo: "https://github.com/Venath/BornToBattle",
    },
    {
      title: "Online Medicine Ordering",
      tag: "Academic · Web App",
      description:
        "A web application for ordering medicine and drugs online, built on a clean MVC architecture.",
      stack: ["PHP", "MVC", "MySQL", "JavaScript"],
      repo: "https://github.com/Venath/Med",
    },
    {
      title: "Weather App",
      tag: "Personal · Frontend",
      description:
        "A clean weather dashboard that fetches live forecast data and presents it in a minimal UI.",
      stack: ["JavaScript", "HTML", "CSS", "REST API"],
      repo: "https://github.com/Venath/Weather-app",
      live: "https://venath.github.io/Weather-App/",
    },
    {
      title: "FindBirthDay",
      tag: "Personal · Python",
      description:
        "A tool that extracts gender and date of birth from a Sri Lankan NIC number — deployed live online.",
      stack: ["Python", "Flask", "PythonAnywhere"],
      repo: "https://github.com/Venath/FindBirthDay",
      live: "http://venath.pythonanywhere.com/",
    },
    {
      title: "Game Of 15",
      tag: "Academic · Mobile",
      description:
        "A classic 15-puzzle sliding tile game built as a native Android app with Kotlin.",
      stack: ["Kotlin", "Android"],
      repo: "https://github.com/Venath/GameOf15",
    },
    {
      title: "Facebook Clone",
      tag: "Personal · Frontend",
      description:
        "A front-end clone of Facebook's feed and profile UI — built to practice React component architecture.",
      stack: ["React", "JavaScript", "CSS"],
      repo: "https://github.com/Venath/facebook-clone",
    },
    {
      title: "Online Land Selling System",
      tag: "Academic · Web App",
      description:
        "A group project website for browsing and purchasing land listings online.",
      stack: ["HTML", "PHP", "CSS", "JavaScript"],
      repo: "https://github.com/Venath/LandSale",
    },
    {
      title: "URL Shortener",
      tag: "Personal · Tool",
      description:
        "A simple web tool that converts long URLs into short, shareable links.",
      stack: ["JavaScript", "Node.js"],
      repo: "https://github.com/Venath/url-shortner",
    },
    {
      title: "Tic Tac Toe",
      tag: "Personal · Java",
      description:
        "A classic two-player Tic Tac Toe game built as a Java desktop app.",
      stack: ["Java"],
      repo: "https://github.com/Venath/TicTacToe",
    },
    {
      title: "Memory Game",
      tag: "Personal · Game",
      description:
        "A card-matching memory game with a clean UI — flip cards and find pairs before the timer runs out.",
      stack: ["JavaScript", "HTML", "CSS"],
      live: "https://venath.github.io/Memory_Game/",
    },
    {
      title: "Currency Converter",
      tag: "Personal · Tool",
      description:
        "A lightweight currency converter using live exchange rates.",
      stack: ["JavaScript", "HTML", "CSS"],
      repo: "https://github.com/Venath/currency_converter",
    },
    {
      title: "Online Art Gallery",
      tag: "Academic · Mobile",
      description:
        "A native Android app for browsing and showcasing artwork in an online gallery.",
      stack: ["Kotlin", "Android"],
    },
    {
      title: "Number Guessing",
      tag: "Academic · Game",
      description:
        "A mobile game where players try to guess a hidden number within limited attempts.",
      stack: ["Kotlin", "Android"],
    },
  ];
  

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      once: true, // Whether animation should only happen once
    });
    

    const options = {
      strings: [
        "Developer.",
        "Designer.",
        "Content Creator.",
        "Athlete.",
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1800,
      startDelay: 300,
      smartBackspace: true,
      loop: true,
      cursorChar: "|",
    };

    typedRef.current = new Typed(".typed", options);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typedRef.current.destroy();
    };
  }, []);



  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section id ="home" className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Venath</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="venath.pdf"
                  download="venath.pdf"
                >
                  Resume
                </a>
              </li>{" "}
              <IoMdDownload style={{ fontSize: "30px" }} />
            </ul>
          </nav>
          <div className="text-center p-10 py-10" data-aos="fade-in">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Venath Randima
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
  I’m Venath Randima, a final-year Software Engineering undergraduate at SLIIT and a Trainee Software Engineer at IFS R&D International. I specialize in full-stack development, working with technologies like React, Java, and PL/SQL, with hands-on experience building scalable, enterprise-level applications. I’m particularly interested in AI-driven solutions and product-focused development, and I enjoy turning complex problems into efficient, user-friendly systems.

            </p>x
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="#">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/venath-randima-b3b425281/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.youtube.com/@team_ramp">
                <AiFillYoutube />
              </a>
              <a href="https://github.com/Venath">
                <AiFillGithub />
              </a>
            </div>

            <div className="flex items-center justify-center mt-20">
              <div className="flex items-center justify-center mt-20 relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-b from-teal-500">
                <Image src={deved} layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-3xl md:text-4xl lg:text-5xl font-light">
              <span className="text-gray-700 dark:text-gray-200">I'm a</span>
              <span className="typed font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent"></span>
            </div>
          </div>
        </section>
        <section>
          {/* <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div> */}

        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since embarking on my undergraduate journey in Software
              Engineering at SLIIT, I've been actively seeking opportunities to
              broaden my horizons. I've engaged in collaborative projects,
              explored various aspects of software development, and honed my
              skills in adapting to different situations. Currently, I'm open to
              collaborations and eager to connect with driven individuals who
              share a passion for growth and innovation
            </p>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p> */}
          </div>
          {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div> */}
        </section>
        <section
          id="academics"
          ref={academicsRef}
          className="py-10 relative"
        >
          <div
            aria-hidden="true"
            className={`hidden md:flex absolute top-8 right-0 gap-3 z-10 transition-all duration-700 ease-out ${
              showEyes
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3 pointer-events-none"
            }`}
          >
            <div
              ref={leftEyeRef}
              className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-100 border-[3px] border-teal-500 shadow-lg"
            >
              <div
                ref={leftPupilRef}
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-900 rounded-full will-change-transform"
                style={{ transform: "translate(-50%, -50%)" }}
              />
            </div>
            <div
              ref={rightEyeRef}
              className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-100 border-[3px] border-teal-500 shadow-lg"
            >
              <div
                ref={rightPupilRef}
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-900 rounded-full will-change-transform"
                style={{ transform: "translate(-50%, -50%)" }}
              />
            </div>
          </div>

          <div className="text-center py-10" data-aos="fade-up">
            <h3 className="text-4xl font-semibold text-teal-600 dark:text-teal-400 md:text-5xl">
              Academics
            </h3>
            <p className="text-md py-3 leading-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:text-lg">
              A semester-by-semester snapshot of my academic journey.
            </p>
          </div>

          <div data-aos="fade-up" className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full px-6 py-3 shadow-lg">
              <span className="text-xs uppercase tracking-widest opacity-90">
                Current CGPA
              </span>
              <span className="text-2xl md:text-3xl font-bold leading-none">
                3.30
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
            {[
              {
                label: "Year 1",
                avg: "3.06",
                semesters: [
                  { label: "Semester 1", gpa: 3.07 },
                  { label: "Semester 2", gpa: 3.04 },
                ],
              },
              {
                label: "Year 2",
                avg: "3.23",
                semesters: [
                  { label: "Semester 1", gpa: 3.06 },
                  { label: "Semester 2", gpa: 3.39 },
                ],
              },
              {
                label: "Year 3",
                avg: "3.06",
                semesters: [
                  { label: "Semester 1", gpa: 3.3},
                  { label: "Semester 2", gpa: 3.06 },
                ],
              },
              {
                label: "Year 4",
                avg: "3.06",
                semesters: [
                  { label: "Semester 1", gpa: 3.06 },
                  { label: "Semester 2", gpa: 3.06 },
                ],
              },
            ].map((year, i) => (
              <div
                key={year.label}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500" />
                <div className="p-5">
                  <div className="flex items-baseline justify-between mb-5">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {year.label}
                    </h4>
                    <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Avg {year.avg}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {year.semesters.map((sem) => (
                      <div key={sem.label}>
                        <div className="flex justify-between items-baseline mb-1.5">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {sem.label}
                          </span>
                          <span
                            className={`text-lg font-bold ${
                              sem.gpa >= 3.3
                                ? "text-teal-500 dark:text-teal-400"
                                : "text-gray-800 dark:text-gray-100"
                            }`}
                          >
                            {sem.gpa.toFixed(2)}
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-1000"
                            style={{ width: `${(sem.gpa / 4) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="min-h-screen py-10">
          <div className="text-center py-10" data-aos="fade-up">
            <h3 className="text-4xl font-semibold text-teal-600 dark:text-teal-400 md:text-5xl flex items-center justify-center gap-3">
              Projects
              <a
                href="https://github.com/Venath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex hover:scale-110 transition-transform"
              >
                <AiFillGithub />
              </a>
            </h3>
            <p className="text-md py-3 leading-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:text-lg">
              A selection of academic and personal projects I've built, spanning
              full-stack web apps, mobile games, and developer tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, visibleCount).map((project, i) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={(i % 6) * 100}
                className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500" />
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold mb-2">
                    {project.tag}
                  </span>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        <AiFillGithub className="text-lg" /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        <AiOutlineLink className="text-lg" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-10 pb-16">
            {visibleCount < projects.length ? (
              <button
                onClick={() =>
                  setVisibleCount((c) => Math.min(c + 6, projects.length))
                }
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Show More
                <span className="text-xs opacity-80">
                  ({projects.length - visibleCount} more)
                </span>
                <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            ) : (
              projects.length > 6 && (
                <button
                  onClick={() => setVisibleCount(6)}
                  className="inline-flex items-center gap-2 border-2 border-teal-500 text-teal-600 dark:text-teal-400 px-8 py-3 rounded-full font-medium hover:bg-teal-500 hover:text-white transition-all duration-200"
                >
                  Show Less
                </button>
              )
            )}
          </div>
        </section>

        <section id="experience" className="py-10">
          <div className="text-center py-10" data-aos="fade-up">
            <h3 className="text-4xl font-semibold text-teal-600 dark:text-teal-400 md:text-5xl">
              Leadership & Community Impact
            </h3>
            <p className="text-md py-3 leading-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:text-lg">
             Where I've led teams, built a brand, and
              helped grow a global community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto pb-16 space-y-6">
            <div
              data-aos="fade-up"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500" />
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Founder &amp; Content Lead
                    </h4>
                    <p className="text-teal-600 dark:text-teal-400 font-medium mt-1">
                      Ramp Parkour Team
                    </p>
                  </div>
                  <span className="self-start inline-block text-sm px-3 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
                    2020 – Present
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">
                      7
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">
                      Team Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">
                      26K+
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">
                      Followers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">
                      1M+
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">
                      Peak Views
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 mt-2 text-xs">●</span>
                    <span>
                      Built and led a 7-member parkour team focused on
                      movement-based content creation and community growth.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 mt-2 text-xs">●</span>
                    <span>
                      Grew social media presence to 26K+ Facebook followers,
                      with multiple viral videos reaching 100K–1M+ views.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 mt-2 text-xs">●</span>
                    <span>
                      Directed content strategy and execution, including
                     brand collaborations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 mt-2 text-xs">●</span>
                    <span>
                      Managed team coordination and overall creative direction.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href="https://www.youtube.com/@team_ramp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <AiFillYoutube className="text-lg" /> Watch on YouTube
                  </a>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500" />
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Ambassador – Sri Lanka
                    </h4>
                    <p className="text-teal-600 dark:text-teal-400 font-medium mt-1">
                      World KARDO Asia
                    </p>
                  </div>
                  <span className="self-start inline-block text-sm px-3 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
                    International
                  </span>
                </div>

                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 mt-2 text-xs">●</span>
                    <span>
                      Represented Sri Lanka on an international youth and sports
                      platform.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 mt-2 text-xs">●</span>
                    <span>
                      Contributed to global community engagement and
                      cross-cultural collaboration.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500" />
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Community Builder &amp; Workshop Organizer
                    </h4>
                    <p className="text-teal-600 dark:text-teal-400 font-medium mt-1">
                      Parkour Sri Lanka
                    </p>
                  </div>
                  <span className="self-start inline-block text-sm px-3 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
                    Ongoing
                  </span>
                </div>

                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 mt-2 text-xs">●</span>
                    <span>
                      Organized and conducted parkour workshops across Sri
                      Lanka.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-500 mt-2 text-xs">●</span>
                    <span>
                      Collaborated with international athletes to develop and
                      expand the local parkour community.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
