import React from 'react';

const ProjectItem = (props) => (
  <div>
    <h1>Project detail page</h1>
    <p>This page is for the project with the id of {props.match.params.id}</p>
  </div>
);

export default ProjectItem;
