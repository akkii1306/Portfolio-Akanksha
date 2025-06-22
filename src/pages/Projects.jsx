import projects from "../data/projects";
import ProjectCard from "../components/projectCard";

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-16 flex items-center bg-[#E5B8F4] dark:bg-[#1A103D] text-[#2D033B] dark:text-[#EDE9F9]">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
