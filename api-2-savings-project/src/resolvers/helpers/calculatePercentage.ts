export const calculatePercentage = (numerator: number, denominator: number) => {
  const percentage = Math.round((numerator / denominator) * 100);

  if (Number.isInteger(percentage)) {
    return percentage;
  } else {
    return 0;
  }
};
