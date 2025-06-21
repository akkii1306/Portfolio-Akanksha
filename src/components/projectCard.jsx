const projectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-[#2D1B5A] border border-[#810CA8] dark:border-[#C147E9] p-4 rounded-xl shadow transition">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
      <p className="mt-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="bg-[#C147E9] text-white px-2 py-1 text-xs rounded">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <a href={project.github} target="_blank" className="text-[#810CA8] underline">GitHub</a>
        <a href={project.demo} target="_blank" className="text-[#810CA8] underline">Live Demo</a>
      </div>
    </div>
  );
};

export default projectCard;
