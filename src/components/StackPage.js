import React from 'react';
import { Link } from 'react-router-dom';

const StackPage = () => (
  <div>
    <h1>STACKS LIST</h1>
    <p>List of Active Stacks - Here display some kind stack report</p>
    <p>User can sort, filter and on record click it will show clicked record detail</p>
    <Link to="/stack/1"> ---- Stack One ---- </Link>
    <Link to="/stack/2"> ---- Stack Two ---- </Link>
  </div>
);

export default StackPage;
