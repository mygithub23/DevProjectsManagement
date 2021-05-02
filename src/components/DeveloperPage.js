import React from 'react';
import { Link } from 'react-router-dom';

const DeveloperPage = () => (
  <div>
    <h1>Developer LIST</h1>
    <p>List of Active Developers - Here display some kind Developer report</p>
    <p>User can sort, filter and on record click it will show clicked record detail</p>
    <Link to="/developer/1"> ---- Project One ---- </Link>
    <Link to="/developer/2"> ---- Project Two ---- </Link>
  </div>
);

export default DeveloperPage;
