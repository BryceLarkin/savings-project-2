import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { READ_USER_PROJECTS } from "../../gql";
import {
  ReadUserProjects,
  ReadUserProjectsVariables
} from "../../gql/__generated__/ReadUserProjects";
import { TableUserProjects, HandleQuery } from "../../components";
import { Typography } from "@material-ui/core";

export const UserProfile: React.SFC<{}> = props => {
  const { data, loading, error } = useQuery<
    ReadUserProjects,
    ReadUserProjectsVariables
  >(READ_USER_PROJECTS, {
    variables: {
      where: { id: "a4sd9nfv9gctauo" }
    }
  });

  return (
    <HandleQuery loading={loading} error={error}>
      {data && data.user !== null ? (
        <TableUserProjects user={data.user} />
      ) : (
        <Typography>No projects found</Typography>
      )}
    </HandleQuery>
  );
};
