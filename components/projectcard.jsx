import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

export default function ProjectCard({ project }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          ref={ref}
          className={`bg-white rounded-lg p-4  ${
            isInView ? "shadow-pop-tl" : ""
          }`}
        >
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {project.description}
          </p>{" "}
          <p className="text-gray-600">
            Languages: {project.languageArray.join(", ")}
          </p>
          <p className="text-gray-600">
            Technologies: {project.technologyArray.join(", ")}
          </p>
          <div>
            <img
              className="w-full h-24 object-cover mt-2"
              src={project.image}
              alt={project.title}
            />
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>

          <img
            className="w-full w-1/2 object-cover"
            src={project.image}
            alt={project.title}
          />

          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <p>Languages: {project.languageArray.join(", ")}</p>
            <p>Technologies: {project.technologyArray.join(", ")}</p>
            <p>Date: {project.date}</p>
            <p>
              Link:{" "}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </p>
            <p>
              Repository:{" "}
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.repository}
              </a>
            </p>
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
