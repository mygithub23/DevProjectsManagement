import React from 'react';

const DeveloperItem = (props) => (
  <div>
    <h1>Developer detail page</h1>
    <p>This page is for the developer with the id of {props.match.params.id}</p>
  </div>
);

export default DeveloperItem;
