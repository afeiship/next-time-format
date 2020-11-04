const nx = require('@feizheng/next-js-core2');
require('../src/next-time-format');

describe('api.basic test', () => {
  test('nx.timeFormat h/m/s', function () {
    var time1 = 61 * 1000;
    var res = nx.timeFormat(time1);
    expect(res.hour).toBe(0);
    expect(res.minute).toBe(1);
    expect(res.second).toBe(1);
    expect(res.datetime).toBe('00:01:01');
  });

  test('nx.timeFormat long time', function () {
    var time1 = 50 * 3600 * 1000 + 6 * 3600 * 1000 + 5 * 60 * 1000 + 7 * 1000;
    var res = nx.timeFormat(time1);
    expect(res.datetime).toBe('56:05:07');
  });
});
