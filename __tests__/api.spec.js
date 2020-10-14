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
    var time1 = 3 * 60 * 64 * 1000;
    var res = nx.timeFormat(time1);
    expect(res.datetime).toBe('03:12:00');
  });
});
