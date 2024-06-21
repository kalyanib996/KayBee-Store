const PriceFormat = ({price}) => {
  return Intl.NumberFormat(
    "en-EN",
    { style: "currency", currency: "CAD" },
    { maximumSignificantDigits: 3 }
  ).format(price);
};
export default PriceFormat;
