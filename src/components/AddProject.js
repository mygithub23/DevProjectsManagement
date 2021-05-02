import React, { useRef } from 'react';

// import classes from './AddProject.module.css';

function AddProject(props) {
  const NameRef = useRef('');


  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const project = {
      name: nameRef.current.value,
    };

    props.onAddProject(project);
  }

  return (
    <form onSubmit={submitHandler}>
      {/* <div className={classes.control}> */}
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={NameRef} />
      </div>      
      <button>Add Project</button>
    </form>
  );
}

export default AddProject;
