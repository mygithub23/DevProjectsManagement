import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjectsById, deleteProjects } from "../ducks/projectsDucks";
import { connect } from "react-redux";

const ProjectDetails = ({
  match,
  currentProject,
  getProjectsById,
  deleteProjects,
  history,
}) => {
  const currentProjectId = match.params.projectId;

  useEffect(() => {
    getProjectsById(currentProjectId);
  }, [currentProjectId, getProjectsById]);

  if (!currentProject) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{currentProject.projectName}</h1>
     
      <Link to={`/projects/${currentProject._id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => deleteProjects({ currentProjectId, history })}>
        Delete
      </button>
    </div>
  );
};

const mapDispatchToProps = { getProjectsById, deleteProjects };
const mapStateToProps = ({ projects }) => ({
  currentProject: projects.currentProject,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
