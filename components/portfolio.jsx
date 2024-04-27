import ProjectCard from "./projectcard";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu nec eros vestibulum condimentum. Integer id ligula convallis, vulputate nisl at, malesuada mi. Duis auctor, metus eget vehicula rhoncus, libero purus lacinia turpis, nec consequat risus purus quis purus. Nam et massa tincidunt, aliquam velit ut, feugiat risus. Sed nec ipsum quis purus rhoncus fringilla a ac libero. Vivamus eu mi sit amet arcu gravida tincidunt at ut turpis. Proin sed neque at nisi hendrerit volutpat. Nullam tempor metus ac tortor luctus auctor. Phasellus non arcu odio. Sed vel est condimentum, vestibulum turpis sit amet, sollicitudin arcu. Aenean consequat ultrices urna id aliquam.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "HTML", "CSS"],
      technologyArray: ["React", "Redux", "Node.js"],
      date: "2022-03-15",
    },
    {
      title: "Task Management App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit nisi. Nullam eu massa ac tellus iaculis consequat non nec dui. Integer nec leo et quam pharetra venenatis eget ut mauris. Morbi commodo, arcu non venenatis dignissim, nulla metus condimentum lectus, in sagittis purus orci et nulla. Quisque eleifend erat in consectetur gravida. Fusce lobortis, mi sit amet scelerisque ultricies, elit nunc malesuada magna, nec sollicitudin velit quam in lacus. Suspendisse potenti. Ut non velit quis turpis ultricies vulputate id in justo. In lacinia ligula nec augue dapibus viverra.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisi sollicitudin, vehicula nisi vel, scelerisque erat. Duis nec nunc at nisi varius suscipit. Nulla non malesuada nisi, vitae aliquet sapien. Praesent interdum magna eu orci dapibus, et aliquet elit auctor. Phasellus sagittis, lorem vitae tempus sollicitudin, leo nunc faucibus mi, vitae congue nisl velit eget leo. Morbi ac nulla vel ipsum tincidunt vestibulum. Nam vel lorem sed eros fermentum volutpat eget ac purus.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "HTML", "CSS"],
      technologyArray: ["React", "Gatsby"],
      date: "2022-05-10",
    },
    {
      title: "Recipe Sharing App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque aliquam ante, vitae tempus sapien rhoncus vel. Aliquam erat volutpat. Aenean vehicula turpis ligula, nec feugiat ex egestas et. Nam sed consequat velit. Sed vel lacus sollicitudin, pharetra justo eget, fermentum dolor. Nulla facilisi. Maecenas nec tellus elit. Sed in nisi at turpis facilisis lacinia.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet fermentum augue non gravida. In hac habitasse platea dictumst. Proin vehicula hendrerit quam, in facilisis tortor aliquam quis. Nullam eu dui ut enim vestibulum bibendum. Fusce hendrerit sit amet nisi eget bibendum. Suspendisse potenti. Cras efficitur feugiat enim, eget lacinia tortor. Nulla facilisi. Integer sem felis, varius nec libero a, efficitur accumsan magna. Duis id lacinia sapien, vel finibus magna. Morbi suscipit ex in odio aliquam, quis sodales turpis tristique.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "PHP"],
      technologyArray: ["React", "Laravel"],
      date: "2022-07-12",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed urna diam. Donec et aliquam metus. Curabitur viverra auctor lacus. Nam id odio non ligula hendrerit rutrum. Suspendisse potenti. Nam sed nisl ac lorem viverra commodo vel at mi. Nulla facilisi. Nulla id elit auctor, euismod odio a, pretium nibh. Mauris tristique varius justo, id scelerisque orci condimentum et. Aenean ultricies velit ut justo blandit, at dignissim velit rutrum.",
      link: "https://www.example.com",
      repository: "https://www.github.com/example",
      image: "https://via.placeholder.com/1500",
      finished: true,
      languageArray: ["JavaScript", "Python"],
      technologyArray: ["Vue.js", "Flask"],
      date: "2022-08-30",
    },
    {
      title: "Online Learning Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, velit eu cursus convallis, nunc felis faucibus nisi, quis facilisis tortor ipsum nec ante. Fusce sollicitudin odio eget aliquet rutrum. Vivamus et posuere libero. Curabitur dignissim diam nec tortor convallis, a mattis ante viverra. Donec non nulla nec elit tempor sollicitudin. In vitae eros erat. Curabitur nec interdum lectus. Aliquam vehicula felis at urna euismod ultrices. Fusce feugiat, sem eu sodales ultrices, elit libero aliquam magna, vitae laoreet turpis orci a felis. Cras eget metus ex. Phasellus mollis lectus sed purus elementum, eu suscipit turpis varius. Ut vitae viverra dolor. Nulla facilisi. Mauris pulvinar lorem et neque efficitur tempor. Sed et ipsum non urna posuere laoreet. Phasellus eleifend fringilla quam.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id quam a ex facilisis vulputate. Morbi fringilla diam nec nisi consectetur, sed vestibulum nisl ultrices. Donec vel tortor id dolor convallis efficitur. Integer feugiat commodo sem vitae placerat. In et dictum libero, eu finibus libero. Ut vehicula tellus vel ligula ultrices varius. Morbi quis dui ac ligula vehicula tristique. Cras nec bibendum sem. Integer auctor mi nec lectus pharetra scelerisque. Integer ac tortor nec velit volutpat venenatis. Proin vitae justo id est volutpat pharetra. Nullam aliquet lorem a commodo euismod. Phasellus malesuada a nunc in vestibulum.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet est at felis vehicula blandit. Sed vitae luctus justo. Fusce nec velit eros. Cras volutpat, nulla nec efficitur semper, purus velit feugiat mi, at feugiat quam leo nec eros. Sed vulputate libero a augue vestibulum, nec viverra ligula fringilla. Nullam consequat bibendum elit. Fusce elementum ex sed libero dictum volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nam quis nulla purus.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae enim sed odio facilisis cursus. Nulla facilisi. Duis vel fermentum orci. Aenean id feugiat enim. Ut vitae lacus elit. Ut eleifend odio vitae mauris efficitur, a finibus magna fermentum. Sed eget placerat ligula. Fusce commodo ligula quis magna gravida, vel blandit quam vestibulum. Donec id mauris ac magna luctus ultrices a et sem. In hac habitasse platea dictumst. Phasellus vel tincidunt nibh.",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-16 mx-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
