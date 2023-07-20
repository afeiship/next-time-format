import nx from '@jswork/next';

/* prettier-ignore */
const pad = function (value) { return ('' + value).padStart(2, '0'); };

nx.timeFormat = function (inTimestamp) {
  const millisecond = parseInt(inTimestamp % 1000),
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

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.timeFormat;
}

export default nx.timeFormat;
