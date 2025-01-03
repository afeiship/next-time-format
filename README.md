# next-time-format
> Time format for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-time-format
```

## usage
```js
import '@jswork/next-time-format';

// micro
nx.timeFormat(354*1000);
// {day: 0, hour: 0, minute: 5, second: 54, datetime:'00:05:54' }


nx.timeFormat(4066);
/*
{
  day: 0,
  hour: 0,
  minute: 0,
  second: 4,
  millisecond: 66,
  datetime: '00:00:04'
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-time-format/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-time-format
[version-url]: https://npmjs.org/package/@jswork/next-time-format

[license-image]: https://img.shields.io/npm/l/@jswork/next-time-format
[license-url]: https://github.com/afeiship/next-time-format/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-time-format
[size-url]: https://github.com/afeiship/next-time-format/blob/master/dist/next-time-format.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-time-format
[download-url]: https://www.npmjs.com/package/@jswork/next-time-format
