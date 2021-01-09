/*!
 * name: @jswork/next-time-format
 * description: Time format for next.
 * homepage: https://github.com/afeiship/next-time-format
 * version: 1.0.3
 * date: 2021-01-09 16:30:48
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  /* prettier-ignore */
  var pad = function (value) { return ('' + value).padStart(2, '0'); };

  nx.timeFormat = function (inTimestamp) {
    var millisecond = parseInt(inTimestamp % 1000),
      second = Math.floor((inTimestamp / 1000) % 60),
      minute = Math.floor((inTimestamp / (1000 * 60)) % 60),
      hour = Math.floor(inTimestamp / (1000 * 60 * 60));

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
