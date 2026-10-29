import Marquee from "react-fast-marquee";

// Edit this list with Maram's real skills and tools
const skills = [
  "React",
  "JavaScript",
  "Python",
  "Java",
  "SQL",
  "Git",
  "HTML & CSS",
  "Node.js",
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Technologies</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          The languages and tools I use to build projects and learn new
          technologies quickly.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={60} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="mx-2 sm:mx-4 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#FCE4EC] text-picto-primary text-[14px] sm:text-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;