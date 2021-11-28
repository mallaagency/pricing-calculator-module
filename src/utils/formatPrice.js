export const formatPrice = (currency, value) => {
  const result = `${currency?.symbol} ${value} ${currency?.ISOCode}`;
  return result;
};
