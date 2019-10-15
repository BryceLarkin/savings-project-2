import React from "react";
import { ReadTableProjects_projects } from "../../gql/__generated__/ReadTableProjects";

export const TableProjects: React.FC<{
  projects: ReadTableProjects_projects[];
}> = ({ projects }) => {
  return (
    <>
      {projects.map(project => (
        <div key={project.id}>{project.id}</div>
      ))}
    </>
  );
};
