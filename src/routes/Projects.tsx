import { PROJECT_DATA } from "../assets/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="max-container mt-10">
      <div className="flex">
        {/* <h1 className="title mb-10">My Projects</h1> */}
      </div>
      {PROJECT_DATA.map((project, index) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          img={project.img}
          tech_stack={project.tech_stack}
          desc={project.desc}
          repo={project.repo}
          demo_url={project.demo_url}
          index={index}
        />
      ))}
    </section>
  );
};

export default Projects;
