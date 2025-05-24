const convertToCelsius = function(num) {
  celsius = (num - 32) * 5 / 9;
  return +Number(celsius).toFixed(1);
};

const convertToFahrenheit = function(num) {
  fahr = num * 9 / 5 + 32;
  return +Number(fahr).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
