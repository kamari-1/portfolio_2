import ResumeCard from "../components/ResumeCard";
import { RESUME_DATA } from "./../assets/data";

const Resume = () => {
  return (
    <section className="max-container mt-10">
      <div className="flex">
        <h1 className="title mb-10">My Experience</h1>
      </div>
      {RESUME_DATA.map((data) => (
        <ResumeCard
          key={data.company}
          company={data.company}
          title={data.title}
          period={data.period}
          responsibilities={data.responsibilities}
          skills={data.skills}
        />
      ))}
    </section>
  );
};

export default Resume;
