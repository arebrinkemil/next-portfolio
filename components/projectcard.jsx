import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          className={`bg-white rounded-lg p-4 text-text ${
            isInView ? "shadow-pop-tl" : ""
          }`}
        >
          <h2 className=" text-lg md:text-xl font-bold mb-2 text-text overflow-hidden text-overflow-ellipsis whitespace-nowrap">
            {project.title}
          </h2>
          <p className=" overflow-hidden overflow-ellipsis whitespace-nowrap">
            {project.description}
          </p>{" "}
          <p className=" hidden md:block">
            Languages: {project.languageArray.join(", ")}
          </p>
          <p className="hidden md:block">
            Technologies: {project.technologyArray.join(", ")}
          </p>
          <p className=" md:hidden">{project.technologyArray.join(", ")}</p>
          <div>
            <Image
              className="w-full object-cover mt-2 hidden md:block rounded-lg"
              src={project.image}
              alt={project.title}
            />
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-scroll overflow-x-hidden scrollable-content">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-row justify-between items-center">
              <h2>{project.title}</h2>
              <div className="flex flex-row gap-2 mr-2">
                {project.finished && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mr-2"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                )}
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </DialogTitle>

          <Image
            className="w-full object-cover"
            src={project.image}
            alt={project.title}
          />

          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="flex w-full">
          <div className="flex flex-col gap-2 w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="w-full">
                <AccordionTrigger>Languages</AccordionTrigger>
                <AccordionContent>
                  <p> {project.languageArray.join(", ")}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="w-full">
                <AccordionTrigger>Technologies</AccordionTrigger>
                <AccordionContent>
                  <p> {project.technologyArray.join(", ")}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
