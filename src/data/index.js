import PROFILE from "../images/profile.jpeg";
import project1 from "../images/project1.jpeg";
import project2 from "../images/project2.jpeg";
import project3 from "../images/project3.jpeg";
import project4 from "../images/project4.jpeg";
import project5 from "../images/project5.jpeg";
import project6 from "../images/project6.jpeg";

export default {
  short_name: "James",
  full_name: "James Kim",
  profile_image: PROFILE,
  address: "Las Vegas, NV",
  contact_email: "Projdk90@gmail.com",
  contact_sub_heading: "Get in touch!",
  formspree_link: "https://formspree.io/f/mnqwjqry",
  github_url: "https://github.com/JustKidding22",
  linkedin_url: "https://www.linkedin.com/in/james-kim-220462220/",
  stackoverflow_url: "https://stackoverflow.com/users/17910691/j-k?tab=profile",
  about_me: [
    {
      id: "first-p-about",
      content:
        " Hey! Thanks for dropping by, my name is James. I've been in the mobile phone industry with T-Mobile for almost 8 years and before that the car sales industry with Autonation for about a year and a half. I'm making a giant leap into the developing side of technology and anticipating developing my new career path. ",
    },
    {
      id: "second-p-about",
      content:
        " Being in the mobile phone industry for so long made me recognize how fast the world is changing along with the technology. It was during the second year of the pandemic that it really made an impact on how I should move along with the technology to future proof myself. I am very passionate about electronics and how it functions. That passion also comes with the mindset of always being a student and absorbing whatever new information that sets the world standard. I am currently enrolled at the University of Texas at Austin for a boot camp course for Full Stack Developing. ",
    },
  ],
  resume_summary:
    "Graduate bootcamp course with experience working across the full-stack of software development. Continue the forever journey of expanding my developing skill set . Looking for a role where I can grow and learn from experienced team members while drawing on project experience I have already successfully executed.",
  front_end_technolgies: [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "React",
    "Handlebars",
  ],
  back_end_technolgies: [
    "Javascript",
    "Node.js",
    "Express.js",
    "SQL",
    "NoSQL",
    "MERN",
  ],
  projects: [
    {
      id: "project1",
      name: "Book Search Engine",
      githubLink: "https://github.com/JustKidding22/The-Book-Search",
      liveLink: "https://book-search-2022.herokuapp.com/",
      image: project1,
      techStack: "MERN STACK",
    },
    {
      id: "project2",
      name: "Budget Tracker",
      githubLink: "https://github.com/JustKidding22/Budget-Tracker",
      liveLink: "https://budget-tracker-2022.herokuapp.com/",
      image: project2,
      techStack: "Express, Mongoose, MongoDB, and Heroku",
    },
    {
      id: "project3",
      name: "Git A Recipe",
      githubLink: "https://github.com/JustKidding22/Git-A-Recipe",
      liveLink: "https://justkidding22.github.io/Git-A-Recipe/",
      image: project3,
      techStack: "HTML, CSS, Javascript",
    },
    {
      id: "project4",
      name: "Note Taker",
      githubLink: "https://github.com/JustKidding22/NoteTaker",
      liveLink: "https://note-taker-application-2021.herokuapp.com/",
      image: project4,
      techStack: "HTML, CSS, Javascript, Node, Express",
    },
    {
      id: "project5",
      name: "Work Day Scheduler",
      githubLink: "https://github.com/JustKidding22/Work-Day-Scheduler",
      liveLink: "https://justkidding22.github.io/Work-Day-Scheduler/",
      image: project5,
      techStack: "HTML, CSS, Javascript, Moment.js",
    },
    {
      id: "project6",
      name: "Weather Dashboard",
      githubLink: "https://github.com/JustKidding22/Weather-Dashboard",
      liveLink: "https://justkidding22.github.io/Weather-Dashboard/",
      image: project6,
      techStack: "HTML, CSS, Javascript",
    },
  ],
};
