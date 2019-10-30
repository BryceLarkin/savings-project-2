import React, { useState } from "react";
import { TransferList } from "../TransferList";
import { useQuery } from "@apollo/react-hooks";
import { READ_PICKER_PROJECTS } from "../../gql";
import { ReadPickerProjects } from "../../gql/__generated__/ReadPickerProjects";
import { Loading } from "../Loading";
import { Typography } from "@material-ui/core";

export const TransferListProjects: React.FC<{
  name: string;
}> = ({ name }) => {
  const [initProjects, setInitProjects] = useState<string[]>([]);
  const [idToNameMap, setIdToNameMap] = useState();

  const { loading } = useQuery<ReadPickerProjects>(READ_PICKER_PROJECTS, {
    onCompleted: ({ projects }) => {
      const idMap = projects.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.id]: cur.name
        }),
        {}
      );
      const projectIds = projects.map(({ id }) => id);
      setIdToNameMap(idMap);
      setInitProjects(projectIds);
    }
  });

  if (loading) return <Loading />;

  if (initProjects.length === 0) {
    return <Typography>No Projects. Please create one.</Typography>;
  }
  return (
    <TransferList
      initLeftIds={initProjects}
      idToNameMap={idToNameMap}
      name={name}
    />
  );
};
