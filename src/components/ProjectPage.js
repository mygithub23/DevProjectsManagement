import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => (
  <div>
    <h1>PROJECT LIST</h1>
    <p>List of Active Projects - Here display some kind project report</p>
    <p>User can sort, filter and on record click it will show clicked record detail</p>
    <Link to="/project/1"> ---- Project One ---- </Link>
    <Link to="/project/2"> ---- Project Two ---- </Link>
  </div>
);

export default ProjectPage;
