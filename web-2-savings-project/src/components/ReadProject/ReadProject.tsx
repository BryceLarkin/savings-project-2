import React from "react";
import useReactRouter from "use-react-router";
import { PROJECT_PARAMS } from "../../constants/routes";
import { useQuery } from "@apollo/react-hooks";
import { READ_PROJECT } from "../../gql";
import {
  ReadProject as ReadProjectResponse,
  ReadProjectVariables
} from "../../gql/__generated__/ReadProject";
import { HandleQuery } from "../HandleQuery";
import { TableProject } from "./TableProject";
// import { Typography } from "@material-ui/core";

export const ReadProject: React.FC<{}> = props => {
  const {
    match: {
      params: { projectUrl }
    }
  } = useReactRouter<PROJECT_PARAMS>();

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
