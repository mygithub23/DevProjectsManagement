import React from 'react';

import Project from './Project';
// import classes from './ProjectsList.module.css';

const ProjectList = (props) => {
  return (
    // <ul className={classes['projects-list']}>
    <ul>
      {props.projects.map((project) => (
        <Project
          key={project.id}
          projName={project.projectName}
          stackName={project.stackName}
          count={project.count}
          developerName={project.developerName}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
