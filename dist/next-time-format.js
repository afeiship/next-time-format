/*!
 * name: @feizheng/next-time-format
 * description: Time format for next.
 * url: https://github.com/afeiship/next-time-format
 * version: 1.0.3
 * date: 2020-03-27 22:10:59
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var pad = function(value) { return ('' + value).padStart(2, '0'); };

  nx.timeFormat = function(inTimestamp) {
    var millisecond = parseInt((inTimestamp % 1000) / 100),
      second = Math.floor((inTimestamp / 1000) % 60),
      minute = Math.floor((inTimestamp / (1000 * 60)) % 60),
      hour = Math.floor((inTimestamp / (1000 * 60 * 60)) % 24);

    return {
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      datetime: [pad(hour), pad(minute), pad(second)].join(':')
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timeFormat;
  }
})();

//# sourceMappingURL=next-time-format.js.map
