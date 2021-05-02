import React from 'react';

const stackItem = (props) => (
  <div>
    <h1>stack detail page</h1>
    <p>This page is for the stack with the id of {props.match.params.id}</p>
  </div>
);

export default stackItem;
