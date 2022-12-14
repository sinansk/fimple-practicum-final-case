import createNumberMask from "text-mask-addons/dist/createNumberMask";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import React from "react";

//https://codesandbox.io/s/react-currency-input-with-react-text-mask-4es23?file=/src/CurrencyInput.js:133-149

const defaultMaskOptions = {
  prefix: "",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ".",
  allowDecimal: false,
  decimalSymbol: ",",
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  //   allowNegative: false,
  allowLeadingZeroes: false,
};

const CurrencyInput = ({ maskOptions, ...inputProps }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return <MaskedInput mask={currencyMask} {...inputProps} />;
};

CurrencyInput.defaultProps = {
  inputMode: "numeric",
  maskOptions: {},
};

CurrencyInput.propTypes = {
  inputmode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.bool,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.bool,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    requireDecimal: PropTypes.bool,
    allowNegative: PropTypes.bool,
    allowLeadingZeroes: PropTypes.bool,
    integerLimit: PropTypes.number,
  }),
};

export default CurrencyInput;
