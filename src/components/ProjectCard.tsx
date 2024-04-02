import { Link } from "react-router-dom";
import Pill from "./Pill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";

type ProjectCardProps = {
  title: string;
  img: string;
  tech_stack: string[];
  desc: string;
  repo: string;
  demo_url: string;
  index?: number;
};

const ProjectCard = ({
  title,
  img,
  tech_stack,
  desc,
  repo,
  demo_url,
  index,
}: ProjectCardProps) => {
  return (
    <div
      className={`${
        index == 0 || (index && index % 2 === 0)
          ? "flexCard"
          : "flexCardReverse"
      } gap-4 p-4 mb-10 rounded-xl font-satoshi hover:bg-main-light scale-95 hover:scale-100 transition-all`}
    >
      {/* Left side */}
      <div className="flex flex-col text-[14px] w-full md:w-[50%]">
        <h4 className="text-lg">{title}</h4>
        <div className="flex flex-row gap-2">
          {tech_stack.map((tech, index) => (
            <Pill key={index} item={tech} />
          ))}
        </div>
        <p className="paragraph">{desc}</p>
        <div className="flex gap-4 text-xl min-w-32">
          <div className="p-1 px-2 rounded-md bg-purple-primary">
            <Link to={repo}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
          <div className="p-1 px-2 rounded-md bg-purple-primary">
            <Link to={demo_url}>
              <FontAwesomeIcon icon={faLink} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-[50%]">
        <img src={img} alt={title} className="rounded-xl" />
      </div>
    </div>
  );
};

export default ProjectCard;
