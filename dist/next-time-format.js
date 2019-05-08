/*!
 * name: next-time-format
 * link: https://github.com/afeiship/next-time-format
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var toInt = function(number) {
    return parseInt(number, 10);
  };

  nx.timeFormat = function(inTimestamp) {
    var seconds = toInt(inTimestamp / 1e3);
    return {
      hour: toInt(seconds / 3600),
      minute: toInt(seconds / 60),
      second: seconds % 60
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timeFormat;
  }
})();
