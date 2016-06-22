// Get a universally unique identifier
let count = 0;
module.exports = function uuid() {
  return `react-tabs-${count++}`;
};

module.exports.reset = function reset() {
  count = 0;
}
