// src/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  // You can fetch the project details based on `id` here.
  // For now, let's just simulate with some dummy data.
  const projects = {
    1: { name: 'Weather App', description: 'A web app that shows weather forecasts.', technologies: ['React', 'API'] },
    2: { name: 'Fitness Tracker', description: 'An app to track fitness progress.', technologies: ['React', 'Node.js'] },
    3: { name: 'Expense Manager', description: 'Track your expenses and save money.', technologies: ['React', 'MongoDB'] }
  };

  const project = projects[id];

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
