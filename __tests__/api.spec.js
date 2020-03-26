const nx = require('@feizheng/next-js-core2');
require('../src/next-time-format');

describe('api.basic test', () => {
  test('nx.timeFormat', function() {
    var time1 = 61 * 1000;
    var rs1 = nx.timeFormat(time1);

    expect(rs1.hour).toBe(0);
    expect(rs1.minute).toBe(1);
    expect(rs1.second).toBe(1);
    expect(rs1.datetime).toBe('00:01:01');
  });
});
