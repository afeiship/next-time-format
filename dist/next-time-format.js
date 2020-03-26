/*!
 * name: @feizheng/next-time-format
 * description: Time format for next.
 * url: https://github.com/afeiship/next-time-format
 * version: 1.0.0
 * date: 2020-03-26 23:52:23
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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

//# sourceMappingURL=next-time-format.js.map
