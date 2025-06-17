import projectDetails from "../data/projectDetails";

const Personal = () => {
  return (
    <div>
      <h2>Personal Projects</h2>
      {projectDetails.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Personal;
