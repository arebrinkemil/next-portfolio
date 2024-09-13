import ProjectCard from "./projectcard";
import Image from "next/image";
import { ComingSoonCard } from "./morecoming.";

import carapp from "../public/carapp.png";
import chat from "../public/chat.png";
import event from "../public/event.png";
import langdle from "../public/langdle.png";
import portfolio from "../public/portfolio.png";
import protech from "../public/protech.png";
import waterworks from "../public/waterworks.png";
import mp3stream from "../public/mp3stream.png";
import minify from "../public/minify.png";

export default function Portfolio() {
  const projects = [
    {
      title: "MP3 Streamer",
      description:
        "A spotify clone built with Next.js and Supabase. The diffrence is that you can upload your own music and stream it from the cloud. The app is built with Next.js and Supabase. The app is still in development and will be finished soon",
      link: "",
      repository: "https://github.com/arebrinkemil/mp3streamer",
      image: mp3stream,
      finished: false,
      languageArray: ["JavaScript", "Typescript"],
      technologyArray: ["Next.js", "Supabase", "Tailwind CSS"],
      date: "2024-07-15",
    },
    {
      title: "Minify",
      description:
        "This is a URL shortener application built with Next.js, TypeScript and for validation Zod. All urls are saved in a Vercel Postgres database and the ui is using Shadcn with Tailwind.",
      link: "https://www.arebr.ink/",
      repository: "https://github.com/arebrinkemil/minify",
      image: minify,
      finished: true,
      languageArray: ["JavaScript", "Typescript"],
      technologyArray: [
        "Next.js",
        "Zod",
        "Vercel postgres",
        "Shadcn",
        "Tailwind CSS",
      ],
      date: "2024-04-15",
    },

    {
      title: "PORTFOLIO",
      description:
        "This is my personal portfolio website. It is built with Next.js and Tailwind CSS. This is the site your are currently visiting.",
      link: "https://www.arebr.ink",
      repository: "https://github.com/arebrinkemil/next-portfolio",
      image: portfolio,
      finished: true,
      languageArray: ["JavaScript", "CSS"],
      technologyArray: ["React", "Next.js", "Tailwind CSS"],
      date: "2022-05-10",
    },
    {
      title: "LANGDLE",
      description:
        "This i a clone of the popular game wordle. The game is built with React and Tailwind CSS. The game is a word puzzle game where you have to guess a 5 letter word in 6 tries. The diffrence is that the words are generated from the ChatGPT API and it lets you pick between swedish and english.",
      link: "https://langdle.vercel.app/",
      repository: "https://github.com/arebrinkemil/langdle",
      image: langdle,
      finished: true,
      languageArray: ["JavaScript", "CSS"],
      technologyArray: ["React", "Tailwind CSS", "ChatGPT API"],
      date: "2022-06-25",
    },

    {
      title: "WATERWORKS",
      description:
        "This was a group project and we built an application that utilizes the Gothenburg RiverService API to fetch water levels and elevation data for various lakes and rivers around Gothenburg",
      link: "https://waterworks-azure.vercel.app/",
      repository: "https://github.com/vojtechlevi/waterworks",
      image: waterworks,
      finished: true,
      languageArray: ["JavaScript", "CSS"],
      technologyArray: ["vite", "tailwindcss", "js modules", "threejs"],
      date: "2022-08-30",
    },
    {
      title: "LIA EVENT",
      description:
        "This MERN stack application is designed to provide companies with essential information about upcoming events and allows them to create descriptive posts about their involvement. Developed collaboratively by Emil Årebrink and Anton Bernhardsson Yttring as part of a group project, this platform bridges the gap between companies and event participants.",
      link: "https://liaevent.arebr.ink/",
      repository: "https://github.com/arebrinkemil/LIA-EVENT",
      image: event,
      finished: true,
      languageArray: ["JavaScript", "CSS", "Mongoose"],
      technologyArray: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      date: "2022-03-15",
    },
    {
      title: "RENT A CAR",
      description:
        "RentACar is a collaborative school assignment project built using Laravel with a theme related to cars. The website serves as a car rental platform where users can sign up, log in, search for cars based on start date, end date, pickup location, and the number of passengers. Users can then proceed to book the desired car. Additionally, users can view their booked cars, edit bookings, and delete them as needed.",
      link: "",
      repository: "https://github.com/hugosandsjo/rentacar",
      image: carapp,
      finished: false,
      languageArray: ["PHP", "BLADE", "CSS", "JavaScript"],
      technologyArray: ["Laravel", "MySql"],
      date: "2022-03-15",
    },
    {
      title: "CHAT APP",
      description:
        "A simple chat app made with React and firebase. You can sign in with google and chat with other users by entering a chat room with the same name.",
      link: "https://react-chat-lac.vercel.app",
      repository: "https://github.com/arebrinkemil/reactChat",
      image: chat,
      finished: true,
      languageArray: ["JavaScript", "CSS"],
      technologyArray: ["React", "Firebase"],
      date: "2022-04-20",
    },
    {
      title: "PROTECH",
      description:
        "Protech is a group project with the design class. The goal was to build a website for a fictional company. The website is built with HTML, CSS and JavaScript. The website is a landing page for a company that sells protective gear for sports. The website is responsive and has a clean design.",
      link: "https://github.com/arebrinkemil/ProTech-gruppProjekt",
      repository: "https://pro-tech-three.vercel.app/",
      image: protech,
      finished: true,
      languageArray: ["JavaScript", "CSS"],
      technologyArray: [""],
      date: "2022-07-12",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-background">
        <h1 className="text-4xl font-bold font-poppins mt-16 text-text">
          PORTFOLIO
        </h1>
        <p className="text-xl text-text mt-4">
          Here are some of the projects I have worked on.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mx-8 xl:max-w-6xl">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          <ComingSoonCard />
        </div>
      </div>
    </>
  );
}
