export const numberFormat = (number) => {
  const newNumber = Intl.NumberFormat("us-US").format(number);
  return newNumber;
};
