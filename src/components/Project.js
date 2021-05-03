import React from 'react'

// import classes from './Project.module.css';

const Project = (props) => {
  return (
    // <li className={classes.project}>
    <li>
      <h2>{props.projectName}</h2>
      <h3>{props.stackName}</h3>
      <p>{props.count}</p>
      <h3>{props.developerName}</h3>
    </li>
  );
};

export default Project;
