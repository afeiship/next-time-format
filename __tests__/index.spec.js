(function () {
  require('../src');

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
      expect(res.datetime).toBe('08:05:07');
    });

    test('nx.timeFormat with millsecond', () => {
      var time = 1432323066;
      var res = nx.timeFormat(time);
      // console.log('res: ', res);
      expect(res).toEqual(
        {
          day: 16,
          hour: 13,
          minute: 52,
          second: 3,
          millisecond: 66,
          datetime: '13:52:03'
        }
      );
    });
  });
})();
