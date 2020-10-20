export function numberWithCommas(x) {
  // Don't have to use Stackoverflow's solution in video
  // Refer new number formatting feature - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  return new Intl.NumberFormat().format(x);
}
