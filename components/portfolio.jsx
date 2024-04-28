import ProjectCard from "./projectcard";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu nec eros vestibulum condimentum. Integer id ligula convallis, vulputate nisl at, malesuada mi",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: false,
      languageArray: ["JavaScript", "HTML", "CSS"],
      technologyArray: ["React", "Redux", "Node.js"],
      date: "2022-03-15",
    },
    {
      title: "Task Management App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit nisi. Nullam eu massa ac tellus iaculis consequat non nec dui. Integer nec leo et q.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "Python"],
      technologyArray: ["Vue.js", "Django"],
      date: "2022-04-20",
    },
    {
      title: "Portfolio Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisi sollicitudin, vehicula nisi vel, scelerisque erat. Duis nec nunc at nisi varius suscipit.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: false,
      languageArray: ["JavaScript", "HTML", "CSS"],
      technologyArray: ["React", "Gatsby"],
      date: "2022-05-10",
    },
    {
      title: "Recipe Sharing App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque aliquam ante, vitae tempus sapien rhoncus vel. Aliquam erat volutpat. Aenean vehinia.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "Ruby"],
      technologyArray: ["Angular", "Ruby on Rails"],
      date: "2022-06-25",
    },
    {
      title: "Blog Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet fermentum augue non gravida. In hac habitasse platea dictumst. Proin vehicula hendrerittique.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: false,
      languageArray: ["JavaScript", "PHP"],
      technologyArray: ["React", "Laravel"],
      date: "2022-07-12",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed urna diam. Donec et aliquam metus. Curabitur viverra auctor lacus. Nam id odio non ligula ",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: false,
      languageArray: ["JavaScript", "Python"],
      technologyArray: ["Vue.js", "Flask"],
      date: "2022-08-30",
    },
    {
      title: "Online Learning Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, velit eu cursus convallis, nunc felis faucib.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "Java"],
      technologyArray: ["Angular", "Spring Boot"],
      date: "2022-09-18",
    },
    {
      title: "Finance Tracker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id quam a ex facilisis vulputate. Morbi fringil",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "Ruby"],
      technologyArray: ["React", "Ruby on Rails"],
      date: "2022-10-05",
    },
    {
      title: "Weather Forecast App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet est at felis vehicula blandit.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "Python"],
      technologyArray: ["React", "Django"],
      date: "2022-11-20",
    },
    {
      title: "Event Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae enim sed odio facilisis cursus. Nulla facilisi. Duis vel fermentum orci",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "PHP"],
      technologyArray: ["Vue.js", "Laravel"],
      date: "2022-12-10",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold font-poppins mt-16">Portfolio</h1>
        <p className="text-gray-600 mt-4">
          Here are some of the projects I have worked on.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-16 mx-8 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
}
