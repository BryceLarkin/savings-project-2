import React from "react";
import { Typography } from "../Typography";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { R } from "../../constants";
import { READ_PROJECT_PROFILE_NAME } from "../../gql";
import {
  ReadProjectProfileName,
  ReadProjectProfileNameVariables
} from "../../gql/__generated__/ReadProjectProfileName";

export const UpdateSingleProjectProfileTitle: React.FC<{}> = props => {
  const { projectProfileId } = useParams<R.UPDATE_PROJECT_PARAMS>();

  const { data, loading, error } = useQuery<
    ReadProjectProfileName,
    ReadProjectProfileNameVariables
  >(READ_PROJECT_PROFILE_NAME, {
    variables: {
      where: { id: projectProfileId }
    }
  });

  if (loading) return <Typography>Loading...</Typography>;

  if (error || typeof data === "undefined" || data.projectProfile === null)
    return <Typography>Error fetching project</Typography>;

  const { project, businessUnit } = data.projectProfile;

  return (
    <Typography>
      {project.name} - {businessUnit.name}
    </Typography>
  );
};
