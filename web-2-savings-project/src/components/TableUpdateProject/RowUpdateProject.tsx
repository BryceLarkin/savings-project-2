import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { TextFieldCurrency } from "../FormFields";
import {
  SpendUpdateManyWithoutProjectProfileInput,
  SpendUpdateWithoutProjectProfileDataInput
} from "../../gql/__generated__/graphql-global-types";
import { useFormikContext } from "formik";
import { ITheme } from "../Theme";
import { Typography } from "../Typography";
import { formatDate } from "../../helpers";
import { format } from "date-fns";
const formatCurrency = (num: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "75px 1fr 1fr 1fr",
      gridColumnGap: "1em"
    },
    month: {
      alignSelf: "center"
    }
  })
);

export const RowUpdateProject: React.FC<{
  index: number;
  isOwner: boolean;
  initSpend: SpendUpdateWithoutProjectProfileDataInput;
  month: string;
}> = ({ index, isOwner, initSpend, month }) => {
  const classes = useStyles();
  const baselineName = `update.${index}.data.baselineSpend`;
  const forecastedSavingsName = `update.${index}.data.forecastedSavingsAmount`;
  const actualSavingsName = `update.${index}.data.actualSavings`;

  const { values } = useFormikContext<
    SpendUpdateManyWithoutProjectProfileInput
  >();
  const {
    baselineSpend,
    forecastedSavingsAmount,
    actualSavings
  } = values.update[index].data;

  return (
    <div className={classes.root}>
      <Typography className={classes.month}>
        {format(new Date(month), "MMM yyyy")}
      </Typography>
      <TextFieldCurrency
        name={baselineName}
        label="Baseline Spend"
        disabled={!isOwner}
        dataCy="input-baseline-spend"
        helperText={
          baselineSpend !== initSpend.baselineSpend &&
          initSpend.baselineSpend !== null &&
          typeof initSpend.baselineSpend !== "undefined"
            ? formatCurrency(initSpend.baselineSpend)
            : ""
        }
      />
      <TextFieldCurrency
        name={forecastedSavingsName}
        label="Forecasted Savings"
        disabled={!isOwner}
        dataCy="input-forecasted-savings"
        helperText={
          forecastedSavingsAmount !== initSpend.forecastedSavingsAmount &&
          initSpend.forecastedSavingsAmount !== null &&
          typeof initSpend.forecastedSavingsAmount !== "undefined"
            ? formatCurrency(initSpend.forecastedSavingsAmount)
            : ""
        }
      />
      <TextFieldCurrency
        name={actualSavingsName}
        label="Actual Savings"
        dataCy="input-actual-savings"
        helperText={
          actualSavings !== initSpend.actualSavings &&
          initSpend.actualSavings !== null &&
          typeof initSpend.actualSavings !== "undefined"
            ? formatCurrency(initSpend.actualSavings)
            : ""
        }
      />
    </div>
  );
};
