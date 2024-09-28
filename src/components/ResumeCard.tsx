import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Pill from "./Pill";

type ResumeCardProps = {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
  skills: string[];
};

const ResumeCard = ({
  company,
  title,
  period,
  responsibilities,
  skills,
}: ResumeCardProps) => {
  return (
    <div className="text-wrap md:text-justify font-manrope flex flex-col pb-10">
      <div className="flex flex-col lg:flex-row justify-between align-middle my-4">
        <div>
          <h3 className="text-lg">
            <strong className="text-purple-primary text-xl">{company}</strong> -{" "}
            {title}
          </h3>
        </div>
        <div className="flex mt-2 md:mt-0 gap-2 items-center">
          <CalendarDaysIcon className="h-6 text-purple-primary" />
          <h4 className="font-[inconsolata]">{period}</h4>
        </div>
      </div>

      <div className="w-[90%] max-w-[800px]">
        <ul className="pl-10">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="list-disc">
              <p className="text-[14px] leading-6">{responsibility}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row flex-wrap gap-4 pt-4 text-[14px]">
        {skills.map((skill, index) => (
          <Pill key={index} item={skill} />
        ))}
      </div>
    </div>
  );
};

export default ResumeCard;
