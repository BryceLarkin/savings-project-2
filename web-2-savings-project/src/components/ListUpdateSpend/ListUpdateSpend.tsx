import React from "react";
import { Paper } from "../Paper";
import { makeStyles, createStyles } from "@material-ui/core";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useParams, useHistory } from "react-router-dom";
import { R } from "../../constants";
import {
  READ_PROJECT_PROFILE_SPEND_AND_OWNER,
  UPDATE_ONE_PROJECT_PROFILE_SPEND
} from "../../gql";
import {
  ReadProjectProfileSpendAndOwner,
  ReadProjectProfileSpendAndOwnerVariables
} from "../../gql/__generated__/ReadProjectProfileSpendAndOwner";
import {
  UpdateOneProjectProfileSpend,
  UpdateOneProjectProfileSpendVariables
} from "../../gql/__generated__/UpdateOneProjectProfileSpend";
import { Loading } from "../Loading";
import { Typography } from "../Typography";
import { SpendUpdateManyWithoutProjectProfileInput } from "../../gql/__generated__/graphql-global-types";
import { Formik, Form } from "formik";
import { BtnSubmit } from "../BtnSubmit";
import { ITheme } from "../Theme";
import { RowUpdateProject } from "./RowUpdateProject";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase } from "../../services";

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    rows: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridRowGap: "3em",
      marginBottom: "2em"
    }
  })
);
export const ListUpdateSpend: React.FC<{}> = props => {
  const { projectUrl, projectProfileId } = useParams<R.UPDATE_PROJECT_PARAMS>();
  const history = useHistory();
  const [user, userLoading, userError] = useAuthState(firebase.auth());

  const { data, loading, error } = useQuery<
    ReadProjectProfileSpendAndOwner,
    ReadProjectProfileSpendAndOwnerVariables
  >(READ_PROJECT_PROFILE_SPEND_AND_OWNER, {
    variables: { where: { id: projectProfileId } }
  });

  const [updateSpend] = useMutation<
    UpdateOneProjectProfileSpend,
    UpdateOneProjectProfileSpendVariables
  >(UPDATE_ONE_PROJECT_PROFILE_SPEND);

  const classes = useStyles();

  if (loading || userLoading) return <Loading />;

  if (userError)
    return <Typography>Error fetching user: {userError.message}</Typography>;

  if (error)
    return (
      <Typography>Error fetching project profile: {error.message}</Typography>
    );

  if (!data || data.projectProfile === null)
    return <Typography>No project profile found</Typography>;

  if (typeof user === "undefined" || user === null)
    return <Typography>No user found</Typography>;

  const initialValues: SpendUpdateManyWithoutProjectProfileInput = {
    update: data.projectProfile.spend.map(
      ({ id, baselineSpend, forecastedSavingsAmount, actualSavings }) => ({
        where: { id },
        data: {
          baselineSpend,
          forecastedSavingsAmount,
          actualSavings
        }
      })
    )
  };

  return (
    <Paper>
      <Formik<SpendUpdateManyWithoutProjectProfileInput>
        initialValues={initialValues}
        onSubmit={async spend => {
          const { errors } = await updateSpend({
            variables: {
              where: { id: projectProfileId },
              data: { spend }
            }
          });

          if (errors) {
            console.log(errors);
          }

          history.push(R.PROJECT_FN(projectUrl));
        }}
        render={({ submitForm, isSubmitting }) => {
          const { projectProfile } = data;
          if (projectProfile === null) return <></>;
          return (
            <Form>
              <div className={classes.rows}>
                {projectProfile.spend.map((s, index) => (
                  <RowUpdateProject
                    index={index}
                    isOwner={false}
                    key={s.id}
                    initSpend={initialValues.update[index].data}
                    month={s.month}
                  />
                ))}
              </div>
              <BtnSubmit handleSubmit={submitForm} disabled={isSubmitting}>
                Update Spend
              </BtnSubmit>
            </Form>
          );
        }}
      />
    </Paper>
  );
};
