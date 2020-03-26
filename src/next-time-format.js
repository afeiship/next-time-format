(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var toInt = function(number) { return parseInt(number, 10); };
  var pad = function(value) { return ('' + value).padStart(2, '0'); };

  nx.timeFormat = function(inTimestamp) {
    var seconds = toInt(inTimestamp / 1e3);
    var hour = toInt(seconds / 3600);
    var minute = toInt(seconds / 60);
    var second = seconds % 60;
    return {
      hour: hour,
      minute: minute,
      second: second,
      datetime: [pad(hour), pad(minute), pad(second)].join(':')
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timeFormat;
  }
})();
