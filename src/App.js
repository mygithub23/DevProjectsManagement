import React, { useState, useEffect, useCallback } from 'react';

import ProjectsList from './components/ProjectList';
import AddProject from './components/AddProject';
// import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjectsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/api/projects');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log('++++++++++++++++++++ my Data >>>>>>>>>>>>>>>>> ', data)

      const transformedProjects = data.map((projectData) => {
        return {
            
          id: projectData._id,
          projectName: projectData.name,
          stackName: projectData.tech_stack.name,
          count: projectData.tech_stack.count,
          developerName: projectData.developers.name
        };
      });
      setProjects(transformedProjects);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProjectsHandler();
  }, [fetchProjectsHandler]);

  function addProjectHandler(project) {
    console.log(project);
  }

  let content = <p>Found no projects.</p>;

  if (projects.length > 0) {
    content = <ProjectsList projects={projects} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddProject onAddProject={addProjectHandler} />
      </section>
      <section>
        <button onClick={fetchProjectsHandler}>Fetch Projects</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
