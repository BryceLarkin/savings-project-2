import React from "react";
import { Typography } from "../Typography";

interface Denomination {
  locale: string;
  currency: string;
}

export const Currency: React.SFC<{
  data: number;
  includeCents?: boolean;
  denomination?: Denomination;
}> = ({ data, includeCents = false, denomination = {} }) => {
  const { locale = "en-US", currency = "USD" } = denomination;

  let options: Intl.NumberFormatOptions = {
    style: "currency",
    currency
  };

  if (!includeCents) {
    options = {
      ...options,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    };
  }

  const formatedCurrency = new Intl.NumberFormat(locale, options).format(data);

  return <Typography align="right">{formatedCurrency}</Typography>;
};
