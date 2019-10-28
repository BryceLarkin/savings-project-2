import React from "react";
import { PROJECT_PARAMS } from "../../constants/routes";
import { useQuery } from "@apollo/react-hooks";
import { READ_PROJECT } from "../../gql";
import {
  ReadProject as ReadProjectResponse,
  ReadProjectVariables
} from "../../gql/__generated__/ReadProject";
import { HandleQuery } from "../../components/HandleQuery";
import { TableProject } from "./TableProject";
// import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

export const ReadProject: React.FC<{}> = props => {
  const { projectUrl } = useParams<PROJECT_PARAMS>();

  const { data, loading, error } = useQuery<
    ReadProjectResponse,
    ReadProjectVariables
  >(READ_PROJECT, {
    variables: { where: { url: projectUrl } }
  });

  return (
    <HandleQuery loading={loading} error={error}>
      <TableProject data={data} />
    </HandleQuery>
  );
};
