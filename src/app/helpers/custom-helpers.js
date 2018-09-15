// http://assemble.io/docs/Custom-Helpers.html
module.exports.reverseWord = function(value) {
  return value
    .split('')
    .reverse()
    .join('');
};
