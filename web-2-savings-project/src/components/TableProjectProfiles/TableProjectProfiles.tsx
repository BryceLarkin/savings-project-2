import React from "react";
import MaterialTable from "material-table";
import { useQuery } from "@apollo/react-hooks";
import { READ_PROJECT_PROFILE_AND_PROJECT_NAMES } from "../../gql";
import {
  ReadProjectProfileAndProjectNames,
  ReadProjectProfileAndProjectNamesVariables
} from "../../gql/__generated__/ReadProjectProfileAndProjectNames";
import { LinkUpdateProjectProfile } from "../Links";
import { Link } from "@material-ui/core";

export const TableProjectProfiles: React.FC<{}> = props => {
  const { data, loading } = useQuery<
    ReadProjectProfileAndProjectNames,
    ReadProjectProfileAndProjectNamesVariables
  >(READ_PROJECT_PROFILE_AND_PROJECT_NAMES);

  // if (loading) return <Loading />;
  // if (typeof data === "undefined" || data.projectProfiles.length === 0)
  //   return <Typography>No project profiles to update</Typography>;

  return (
    <MaterialTable
      title="Project Profiles"
      isLoading={loading}
      columns={[
        { title: "Project", field: "project.name", defaultGroupOrder: 0 },
        {
          title: "Business Unit",
          field: "businessUnit.name",
          render: row => (
            <Link
              component={LinkUpdateProjectProfile({
                projectUrl: row.project.url,
                projectProfileId: row.id
              })}
            >
              {row.businessUnit.name}
            </Link>
          )
        }
      ]}
      data={data ? data.projectProfiles : []}
      options={{
        pageSize: 20,
        emptyRowsWhenPaging: false,
        header: false
      }}
    />
  );
};
