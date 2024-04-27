import { useRef } from "react";
import { useInView } from "framer-motion";

function ProjectCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg p-4 h-[33vh] ${
        isInView ? "shadow-pop-tl" : ""
      }`}
    >
      <h2 className="text-xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-16 mx-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
