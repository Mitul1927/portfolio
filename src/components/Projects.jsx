import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import FitnessClub from "/Fitness-club.png";
import AddressBook from "/address-book.png";
import Bookify from "/bookify.png";
import LearnLynx from "/learnlynx.png";
import ShipEase from "/ShipEase.png";
import NexLearn from "/NexLearn.png";
import { CiLink } from "react-icons/ci";

const projects = [
  {
    img: ShipEase,
    title: "ShipEase (MERN Stack)",
    description:
      "ShipEase is a cargo shipment tracker built with the MERN stack, enabling users to add and track shipments with OpenStreetMap integration. It features a interactive homepage, Redux-based state management, and a responsive UI. Users can manage shipments securely, with only creators allowed to modify their shipments. The project focuses on efficient shipment visualization, ensuring smooth tracking and management. 🚀",
      links:{
        github : "https://github.com/Mitul1927/ShipEase",
        site : "https://ship-ease-smoky.vercel.app/"
      }
  },
  {
    img: LearnLynx,
    title: "LearnLynx (Full Stack)",
    description:
      "LearnLynx is a feature-rich learning management platform designed to streamline online learning with secure Google authentication using Passport and OAuth 2.0. It solves challenges like secure user access, organized course management, and a user-friendly interface for effective learning experiences.",
    links: {
      github: "https://github.com/Mitul1927/LearnLynx",
    },
  },
  {
    img: Bookify,
    title: "Bookify (Full Stack)",
    description:
      "Bookify is a MERN stack bookstore application where the admin can add, update, and delete books, while users can explore and purchase them. It includes secure Google login integration for streamlined user authentication.",
    links: {
      github: "https://github.com/Mitul1927/Bookify",
    },
  },
  {
    img: NexLearn,
    title: "NexLearn",
    description:
      "**NexLearn** is a learning platform built in just **24 hours** in a hackathon, featuring seamless course management, user authentication, and a responsive UI. Optimized with indexing and efficient APIs for fast performance. 🚀",
    links: {
      github: "https://github.com/Mitul1927/HerCareCoders",
      site: "https://her-care-coders.vercel.app/",
    },
  },
  {
    img: FitnessClub,
    title: "Fitness Club (Frontend)",
    description:
      "A responsive fitness club gym website built using React, showcasing my frontend development skills with clean UI and modern design.",
    links: {
      site: "https://react-project-jet-theta.vercel.app/",
      github: "https://github.com/Mitul1927/React-project",
    },
  },
  {
    img: AddressBook,
    title: "Address Book(HTML,CSS AND JS)",
    description:
      "A functional address book web application built using HTML, CSS, and JavaScript, designed to showcase my frontend development skills with a clean and interactive UI.",
    links: {
      site: "https://address-book-eosin.vercel.app/",
      github: "https://github.com/Mitul1927/Address_book",
    },
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <div className="max-w-[1000px] mx-auto p-6 md:my-20">
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Projects</h2>
        {projects.map((project, index) => (
          // eslint-disable-next-line react/jsx-key
          <Reveal>
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } mb-12`}
            >
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 "
                />
              </div>
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex space-x-4">
                  <a
                    href={project.links.github}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                    transition duration-300"
                  >
                    <AiOutlineGithub />
                  </a>
                  {project.links?.site && (
                    <a
                      href={project.links?.site}
                      className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                    transition duration-300"
                    >
                      <CiLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
